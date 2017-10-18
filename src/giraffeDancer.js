var giraffeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="giraffe"></span>');
  this.setPosition(top, left);
};

giraffeDancer.prototype = Object.create(makeDancer.prototype);
giraffeDancer.prototype.constructor = giraffeDancer;