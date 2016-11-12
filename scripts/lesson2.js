new Vue({
  el: '#lesson2',
  data: {
    x: 0,
    y: 0,
    counter: 0
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert('Alert!');
    }
  }
});
