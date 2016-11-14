new Vue({
  el: '#lesson4',
  data: {
    attachRed: false,
    color: 'green',
    width: 100,
    height: 100
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
  methods: {

  }
});
