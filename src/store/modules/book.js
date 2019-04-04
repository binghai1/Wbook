const book={
    state: {
        test:9
    },
    mutations: {
        'SET_TEST':(state,newState)=>{
            state.test=newState
        }
    },
    actions: {
        setTest:({commit,state},newState)=>{
            return commit('SET_TEST',newState)
        }
        
    }
}
export default book