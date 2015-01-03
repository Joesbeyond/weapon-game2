/**
 * Created by joes on 15-1-2.
 */
var Person = require('./person');

function Ordinary(profession, name, hp, attack) {

    Person.call(this, profession, name, hp, attack);
}
Ordinary.prototype = Object.create(Person.prototype);
Ordinary.prototype.constructor = Ordinary;

module.exports = Ordinary;