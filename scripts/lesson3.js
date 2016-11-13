new Vue({
  el: '#lesson3',
  data: {
    name: 'Kevin',
    counter: 0,
    result: ''
  },
  methods: {
    increase: function() {
      this.counter++;
      this.result = this.relativeToFive();
    },
    relativeToFive: function() {
      if(this.counter > 5) {
        return "Greater than 5";
      } else if(this.counter === 5) {
        return "Equal to 5";
      } else {
        return "Less than 5";
      }
    },
    decrease: function() {
      this.counter--;
      this.result = this.relativeToFive();
    }
  }
});
