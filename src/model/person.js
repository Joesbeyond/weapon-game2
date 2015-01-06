/**
 * Created by joes on 15-1-2.
 */
function Person(profession, name, hp, attack, state) {
    this.profession = profession;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.state = state;
}

Person.prototype.isDead = function() {
    return this.hp <= 0;
  };

module.exports = Person;