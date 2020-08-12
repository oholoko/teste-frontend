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
    }
  },
  mutations: {
    setUserList(state, userlist) {
      state.userList = userlist;
    },
    setPage(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    getUserList(state){
      return Api.getUserList()
      .then(function(response){
        state.commit('setUserList',response.data)
      })
      .catch(function (error){
        console.log(error)
      })
    },
    changePage(state,page){
      state.commit('setPage',page)
    }
  }
})