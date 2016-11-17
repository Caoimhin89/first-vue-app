new Vue({
  el: '#exercises4',
  data: {
    highlight: false,
    shrink: true,
    green: 'green',
    big: 'big',
    thin: 'thin',
    border: 'border',
    selectedClass: '',
    isOrange: false,
    progWidth: 50
  },
  computed: {
    myEffect: function() {
      return {
        highlight: this.highlight,
        shrink: this.shrink
      };
    },
    myWidth: function() {
      var formattedWidth = this.progWidth + 'px';
      console.log("formattedWidth: " + formattedWidth);
      return formattedWidth;
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
    },
    progress: function() {
      var vm = this;
      setInterval(function() {
        vm.progWidth += 50;
        console.log(vm.progWidth + "inside function");
      }, 500);
    }
  }
});
