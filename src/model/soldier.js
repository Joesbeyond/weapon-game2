var Person = require('./person');
function Soldier(profession, name, hp, attack, weapon, armor, state) {
    Person.call(this, profession, name, hp, attack, weapon, armor, state);
    this.weapon = weapon;
    this.armor = armor;
    this.state = state;
}

Soldier.prototype = Object.create(Person.prototype);

Soldier.prototype.constructor = Soldier;
Soldier.prototype.getWeaponName = function() {
	return this.weapon.name;
};
Soldier.prototype.getWeaponAttack = function() {
	return this.weapon.attack;
};
Soldier.prototype.getWeaponEffectName = function() {
	return this.weapon.Effect.name;
};
Soldier.prototype.getWeaponEffectBehaviour = function() {
	return this.weapon.Effect.behaviour;
};
Soldier.prototype.getWeaponEffectAttack = function() {
	return this.weapon.Effect.attack;
};
Soldier.prototype.getWeaponEffectDelay = function() {
	return this.weapon.Effect.delay;
};
Soldier.prototype.getWeaponEffectOdds = function() {
	return this.weapon.Effect.odds;
};

module.exports = Soldier;