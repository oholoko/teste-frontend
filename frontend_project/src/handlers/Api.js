import axios from 'axios'

const baseURL = 'http://127.0.0.1:3000';

const getBase = () => { 
	return axios.create({
		baseURL: baseURL,
		withCredentials: false,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}

export default {
  getUser (userData) {
    const userId = userData.id
    return getBase().get('users/'+userId)
  },

  getUserList () {
    return getBase().get('users')
  },

  editUser (userData) {
    const userId = userData.id
    return getBase().put('users/'+userId,{"data":userData})
  },

  removeUser (userData) {
    const userId = userData.id
    return getBase().delete('users/'+userId)
  },

  addUser (userData) {
    const userId = userData.id
    return getBase().post('users/'+userId,{"data":userData})
  },
}