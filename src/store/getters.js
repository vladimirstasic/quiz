export default {
    getNumTotal:         (state) => {
        return state.counter.numTotal
    },
    getNumCorrect:       (state) => {
        return state.counter.numCorrect
    },
    getFetchedQuestions: (state) => {
        return state.fetched.questions
    },
    getCurrentIndex:     (state) => {
        return state.counter.index;
    },
    getSelectedIndex:    (state) => {
        return state.answers.selectedIndex;
    }
}
