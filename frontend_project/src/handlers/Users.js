import Api from '@/handlers/Api'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    userList: [],
    currentPage: 1,
  },
  getters: {
    sort_field (state) {
      return (field,page) => {
        return state.userList.sort((a, b) => {
          if (a[field] < b[field]) return -1
          return a[field] > b[field] ? 1 : 0
        }).slice((page-1)*10,page*10)
      }
    },
    pages(state){
      return () => {
        const last_page = Math.ceil(state.userList.length/10)
        let pages = []
        if (last_page > 1)
        {
          if(state.currentPage - 2 > 1)
          {
            pages.push(1)
            if(state.currentPage - 3 != 1)
            {
              pages.push(' ...')
            }
          }
          for(let i = -2;i <= 2;i++)
          {
            if(state.currentPage + i <= last_page && state.currentPage + i >= 1)
            {
              pages.push(state.currentPage+i)
            }
          }
          if(state.currentPage + 2 < last_page)
          {
            if(state.currentPage + 3 != last_page)
            {
              pages.push('... ')
            }
            pages.push(last_page)
          }
        }
        else{
          pages = [1]
        }
        return pages
      }
    },
    userData(state){
      return () => {
        return state.currentUser 
      }
    }
  },
  mutations: {
    setUserList(state, userlist) {
      state.userList = userlist;
    },
    alterUser(state, values)
    {
      const field = values['key']
      const data = values['value']
      if (field in ['zipCode','city','streetAddress','country','state'])
      {
        state.currentUser.address[field] = data
      }
      else {
        if (field in ['latitude','longitude'])
        {
          state.currentUser.address.geo[field] = data
        }
        else{
          state.currentUser[field] = data
        }
      }
    },
    setUser(state, user) {
      state.currentUser = user;
    },
    setPage(state, page) {
      state.currentPage = page;
    },
    deleteUser(state){
      state.currentUser = {}
      state.getUserList()
    }
  },
  actions: {
    registerUser(state,user_data)
    {
      const fields = ['firstName','lastName','email','phone']
      const address = ['zipCode','city','streetAddress','country','state']
      const geo = ['latitude','longitude']
      let T = {}
      fields.forEach((value) => {
        T[value] = user_data[value];
      })
      T.address = {}
      address.forEach((value) => {
        T.address[value] = user_data[value];
      })
      T.address.geo = {}
      geo.forEach((value) => {
        T.address.geo[value] = user_data[value];        
      })
      return Api.addUser(T)
      .then(function(response){
        state.commit('setUser',response.data)
        return response.data.id;  
      })
      .catch(function (error){
        console.log(error)
        return 'Falha'
      })
    },
    getUserList(state){
      return Api.getUserList()
      .then(function(response){
        state.commit('setUserList',response.data)
      })
      .catch(function (error){
        console.log(error)
      })
    },
    getUser(state,id){
      return Api.getUser(id)
      .then(function(response){
        state.commit('setUser',response.data)
      })
      .catch(function (error){
        console.log(error)
      })
    },
    changePage(state,page){
      state.commit('setPage',page)
    },
    changeUserData(state,values){
      state.commit('alterUser',values)
      return Api.editUser(state.state.currentUser)
      .then(function(response){
        state.dispatch('getUser',response.data.id)
      })
      .catch(function (error){
        console.log(error )
        state.dispatch('getUser',state.currentUser.id)
      })
    },
    deleteUser(state,id){
      return Api.removeUser(id)
      .then(function(response){
        state.commit('deleteUser',response.data)
      })
      .catch(function (error){
        console.log(error)
      })
    }
  }
})