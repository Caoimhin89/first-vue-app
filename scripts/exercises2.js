new Vue({
  el: '#exercises2',
  data: {
    value: ''
  },
  methods: {
    printAlert: function() {
      alert('Alert!!');
    },
    setValue: function(event) {
      this.value = event.target.value;
    }
  }
});
