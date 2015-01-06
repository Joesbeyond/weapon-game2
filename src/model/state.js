var PoisonFireEffect = require('./poison-fire-effect');
var Frozen = require('./frozen');
var Dizzy = require('./dizzy');

function State(PoisonFireEffect) {
	this.PoisonFireEffect = PoisonFireEffect;
//	this.Frozen = Frozen;
//	this.Dizzy = Dizzy;
};
module.exports = State; 