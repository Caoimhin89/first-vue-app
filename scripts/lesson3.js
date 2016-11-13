new Vue({
  el: '#lesson3',
  data: {
    name: 'Kevin',
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      console.log('Computed');
      return this.relativeToFive();
    }
  },
  methods: {
    result: function() {
      console.log('Method');
      return this.relativeToFive();
    },
    relativeToFive: function() {
      if(this.counter > 5) {
        return "Greater than 5";
      } else if(this.counter === 5) {
        return "Equal to 5";
      } else {
        return "Less than 5";
      }
    }
  }
});
