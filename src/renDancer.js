var renDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bigRen animated shake infinite"></span>');
  this.setPosition(top, left);
//this.step();
};
renDancer.prototype = Object.create(makeDancer.prototype);
renDancer.prototype.constructor = renDancer;

renDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
