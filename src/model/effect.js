/**
 * Created by joes on 15-1-2.
 */
function Effect(name, behaviour, attack, delay, odds) {
	this.name = name;
	this.behaviour = behaviour;
    this.attack = attack;
    this.delay = delay;
    this.odds = odds;
}

module.exports = Effect;
