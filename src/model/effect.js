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

/*Effect.all = function() {

	return [
		new Effect('毒性', '中毒', 2, 2, 50);
        new Effect('眩晕', '晕倒', 2, 2, 50);
	    new Effect('利剑', '致命', 0, 0, 100);
        new Effect('火焰', '着火', 2, 0, 100);
        new Effect('冰冻', '冻僵', 2, 0, 100);	
	];
}*/
 
module.exports = Effect;
