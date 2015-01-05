/**
 * Created by joes on 15-1-2.
 */
var Effect = require('./effect');

function Weapon(name, attack, Effect) {
    this.name = name;
    this.attack = attack;
    this.Effect = Effect;
}

/*Weapon.all = function() {
	return [
		new Weapon('优质毒剑', 3, effect1);
		new Weapon('火焰剑', 3, effect);
		
		new Weapon('寒冰剑', 3, effect);
		
		new Weapon('晕锤', 3, effect2);
		
		new Weapon('利剑', 3, effect);
	];
}*/
	
module.exports = Weapon;
