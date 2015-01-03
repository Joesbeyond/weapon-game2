/**
 * Created by joes on 15-1-2.
 */
var Effect = require('./effect');

function Weapon(name, attack, Effect) {
    this.name = name;
    this.attack = attack;
    this.Effect = Effect;
}

module.exports = Weapon;
