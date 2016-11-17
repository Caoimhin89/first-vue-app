new Vue({
  el: '#exercises4',
  data: {
    highlight: false,
    shrink: true,
    green: 'green',
    big: 'big',
    thin: 'thin',
    border: 'border',
    selectedClass: ''
  },
  computed: {
    myEffect: function() {
      return {
        highlight: this.highlight,
        shrink: this.shrink
      };
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.highlight = !vm.highlight;
        vm.shrink = !vm.shrink;
      }, 5000);
    },
    selectClass: function(event) {
      this.selectedClass = event.target.value;
      console.log(this.selectedClass);
    }
  }
});
