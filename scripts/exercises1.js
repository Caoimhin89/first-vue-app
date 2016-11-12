new Vue({
  el: '#exercises1',
  data: {
    myName: 'Kevin',
    myAge: 27,
    imgLink: 'https://vuejs.org/images/logo.png',
    input: ''
  },
  methods: {
    randomNum() {
      return Math.random();
    },
    getInput(event) {
      this.input = event.target.value;
    }
  }
});
