// Registering component in log-component.js
AFRAME.registerComponent("log", {
  schema: {
    message: { type: "string", default: "Hello, World!" },
  },
  init: function () {
    console.log(this.data.message);
  },
});

AFRAME.registerComponent("box", {
  schema: {
    moveX: { type: 'number', default: 0 }
  },
  tick: function () {
    this.data.moveX += 0.05;
    var pos = this.el.getAttribute('position');
    pos.x = this.data.moveX;
    this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z});
  }
})