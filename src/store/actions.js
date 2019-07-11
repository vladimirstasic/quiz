export default {
    increment:      ({commit}, payload) => {
        commit('increment', payload)
    },
    fetchQuestions: ({commit}) => {

        fetch('https://opentdb.com/api.php?amount=20&category=18&type=multiple', {
            method: 'get'
        })
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                commit('fetchQuestions', jsonData.results);
            });
    },
    next:           ({commit}) => {
        commit('next')
    },
    selectedIndex:      ({commit}, payload) => {
        commit('selectedIndex', payload)
    },
}
