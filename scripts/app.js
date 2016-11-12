new Vue({
  el: '#app',
  data: {
    title: 'Hello World! Try out some string interpolation! Type something in the text box.',
    hello: 'Hi! Do you like function interpolation?',
    link: 'http://wikipedia.org/',
    finishedLink: '<a href="http://google.com/">Google</a>',
    text: "I can prevent re-rendering with Vue's 'v-once' directive. I've attached it to the third list element here. Go ahead... try to change it."
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      return this.hello;
    },
    changeText: function(event) {
      this.text = event.target.value;
    }
  }
});
