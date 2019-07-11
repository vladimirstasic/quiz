<template>
    <div id="app">
        <div id="particles-js" class="position-fixed h-100 w-100"></div>
        <b-container class="bv-example-row">
            <Header
                    :numCorrect="getNumCorrect"
                    :numTotal="getNumTotal"
            />
            <b-row>
                <b-col>
                    <QuestionBox
                            v-if="getFetchedQuestions.length"
                    />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Header from './components/Header.vue';
    import QuestionBox from './components/QuestionBox.vue';
    import 'particles.js';
    import particlesJSON from './assets/particles-js/particlesjs-config.json';

    export default {
        name:       'app',
        components: {
            Header,
            QuestionBox
        },
        computed:   {
            ...mapGetters([
                'getNumTotal',
                'getNumCorrect',
                'getFetchedQuestions',
            ])
        },
        methods:    {
            ...mapActions([
                'fetchQuestions',
            ]),
            initParticles() {
                window.particlesJS("particles-js", particlesJSON)
            }
        },
        mounted:    function () {
            this.fetchQuestions();
            this.initParticles();
        },
    }
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>


