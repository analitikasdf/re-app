export const state = () => ({
	authenticated: false
});

export const mutations = {
	authenticated(state, status) {
		state.authenticated = status;
		console.log('authenticated', state.authenticated);
	}
};
