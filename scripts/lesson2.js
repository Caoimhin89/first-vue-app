new Vue({
  el: '#lesson2',
  data: {
    x: 0,
    y: 0,
    counter: 0
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
