<template>
    <div>
        <b-jumbotron class="text-center">
            <template slot="header">Some question here</template>
            <template slot="lead">
                {{ getFetchedQuestions[getCurrentIndex].question }}
            </template>
            <hr class="my-4">
            <b-list-group class="mb-4 w-50 mx-auto">
                <b-list-group-item
                        href="javascript:void(0)"
                        v-for="(answer, index) in shuffledAnswers"
                        :key="index"
                        @click.prevent="selectedIndex(index)"
                        :variant="answerCLass(index)"
                >
                    {{ answer }}
                </b-list-group-item>
            </b-list-group>
            <b-button
                    variant="primary"
                    @click="submitAnswer"
                    class="mr-2"
                    :disabled="getSelectedIndex === null"
            >
                Submit
            </b-button>
            <b-button variant="success" @click="next">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
    import _ from 'lodash';
    import {mapActions, mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'getFetchedQuestions',
                'getCurrentIndex',
                'getSelectedIndex'
            ]),
            currentQuestion: function () {
                return this.getFetchedQuestions[this.getCurrentIndex];
            },
        },
        data() {
            return {
                shuffledAnswers: [],
                correctIndex:    null,
                answered:        false
            }
        },
        watch:    {
            currentQuestion: {
                immediate: true,
                handler() {
                    this.selectedIndex(0);
                    this.answered = false;
                    this.shuffleAnswers();
                }
            }
        },
        methods:  {
            ...mapActions([
                'increment',
                'next',
                'selectedIndex'
            ]),
            shuffleAnswers() {
                let answers          = [...this.getFetchedQuestions[this.getCurrentIndex].incorrect_answers, this.getFetchedQuestions[this.getCurrentIndex].correct_answer];
                this.shuffledAnswers = _.shuffle(answers);
                this.correctIndex    = this.shuffledAnswers.indexOf(this.getFetchedQuestions[this.getCurrentIndex].correct_answer);
            },
            submitAnswer() {
                let isCorrect = false;
                isCorrect     = (this.correctIndex === this.getSelectedIndex);
                this.answered = true;
                this.increment(isCorrect);
            },
            answerCLass(index) {
                let answerClass = '';
                if (!this.answered && this.getSelectedIndex === index) {
                    answerClass = 'selected';
                } else if (this.answered && this.correctIndex === index) {
                    answerClass = 'success'
                } else if (this.answered && this.getSelectedIndex === index && this.correctIndex !== index) {
                    answerClass = 'danger'
                }
                return answerClass;
            }
        }
    }
</script>
