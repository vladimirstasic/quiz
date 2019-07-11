export default {
    increment:      (state, trueOrFalse) => {
        if (trueOrFalse) {
            state.counter.numCorrect++;
        }
        state.counter.numTotal++;
    },
    next(state) {
        state.counter.index++;
    },
    fetchQuestions: (state, questions) => {
        state.fetched.questions = questions;
    },
    selectedIndex:  (state, index) => {
        state.answers.selectedIndex = index;
    },
}

