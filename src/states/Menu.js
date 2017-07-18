/*
 * Menu state
 * ==========
 *
 * simple menu
 */

'use strict';

exports.create = function (game) {
	// Create the text label which will act as the menu button.
	var startButton = game.add.text(320, 240, 'Start!!', {
		fill: 'white',
		font: '64px Arial'
	});
// Change the label orientation relative to its middle center.
	startButton.anchor.set(0.5);
// Enable input events, like mouse clicks.
	startButton.inputEnabled = true;
// When clicking the label, go to the next game state.
	startButton.events.onInputUp.add(function () {
		game.state.start('Game');
	});
};
