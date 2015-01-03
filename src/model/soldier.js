/**
 * Created by joes on 15-1-2.
 */
var Person = require('./person');
function Soldier(profession, name, hp, attack, weapon, armor) {
    Person.call(this, profession, name, hp, attack, weapon, armor);
    this.weapon = weapon;
    this.armor = armor;
}

Soldier.prototype = Object.create(Person.prototype);

Soldier.prototype.constructor = Soldier;

module.exports = Soldier;
