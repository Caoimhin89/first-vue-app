new Vue({
  el: '#app',
  data: {
    title: 'Hello World! Try out some string interpolation! Type something in the text box.',
    hello: 'Hi! Do you like function interpolation?',
    link: 'http://wikipedia.org/'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      return this.hello;
    }
  }
});
