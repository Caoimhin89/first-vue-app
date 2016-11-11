new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    hello: 'Hi! Welcome!'
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
