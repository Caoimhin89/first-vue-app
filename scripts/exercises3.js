new Vue({
  el: '#exercises3',
  data: {
    value: 0,
    duration: 0
  },
  computed: {
    result: function() {
      return this.value !== 37? 'Not there yet!' : 'Done!';
    },
    message: function() {
      return this.value > 37? `Woops! You went over 37! Looks like you need to
       reset and try again.`: 'Try to get to 37 without going over.';
    }
  },
  watch: {
    result: function() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, vm.duration);
    }
  },
  methods: {
    setDuration: function(event) {
      this.duration = event.target.value;
    },
    resetValues: function() {
      this.value = 0;
      this.duration = 0;
    }
  }
});
