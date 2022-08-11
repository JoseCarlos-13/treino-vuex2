import { User } from "../main"

export default {
	namespaced: true,

	state: {
		users: {},
		alertSuccess: false
	},

	getters: {
		getterUsers(state){
			return state.users
		},

		getterAlertSuccess(state){
			return state.alertSuccess
		}
	},

	mutations: {
		setterUsers(state, users){
			return state.users = users
		},

		setterAlertSuccess(state, success){
			return state.alertSuccess = success
		}
	},

	actions: {
		success({commit, state}){
			commit('setterAlertSuccess', !state.alertSuccess)
			setTimeout(() => {
				commit('setterAlertSuccess', state.alertSuccess = false)
			}, 2000);
		},
		// eslint-disable-next-line
		createUser({}, payload){
			return	User.post('usuarios.json', payload)
		},

		loadList({ commit }, payload){
			return User.get('usuarios.json', payload).then(response => {
				commit('setterUsers', response.data)
				return response
			})
		}
	}
}