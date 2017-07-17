/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

'use strict';

var Logo = require('../objects/Logo');
var Robot = require('../objects/Robot');

exports.create = function (game) {
	//  TODO: Replace this content with really cool game code here :)
	var x = game.world.centerX;
	var y = game.world.centerY;
	game.add.existing(new Logo(game, x, y));

	var caption = game.add.text(320, 240, 'My Awesome Game', {
		fill: 'white',
		font: '48px Arial',
		fontStyle: 'bold',
		stroke: 'black',
		strokeThickness: 3
	});
	caption.anchor.set(0.5);
	// Add after the anchor adjustment of the text label.
	game.add.tween(caption)
		.to({y: '+40'}, 500, 'Sine.easeInOut')
		.yoyo(true)
		.loop()
		.start();

	var robots = game.add.group();
	for (var i = 0; i < 30; ++i) {
		var bot = robots.add(new Robot(game, game.world.randomX, game.world.randomY));
		bot.scale.x = game.rnd.sign();      // randomly flips a bot sprite.
		bot.run();
	}
};
