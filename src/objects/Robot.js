/*
 * Robot
 * =====
 *
 * robot-enemy
 */

'use strict';

module.exports = Robot;

function Robot(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'running_bot');
	// Set the anchor point so coordinates are relative to the robot feet.
	this.anchor.set(0.5, 1);
	// Set up the robot animation.
	this.animations.add('running', null, 20, true);

  // TODO:
  //   1. Edit constructor parameters accordingly.
  //   2. Adjust object properties.
}
Robot.prototype = Object.create(Phaser.Sprite.prototype);
Robot.prototype.constructor = Robot;

Robot.prototype.run = function () {
	this.play('running');
};