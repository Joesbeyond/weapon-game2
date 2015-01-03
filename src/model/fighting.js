/**
 * Created by joes on 15-1-2.
 */
var _ = require('lodash');
function Fighting(ordinary, soldier) {
    this.ordinary = ordinary;
    this.soldier = soldier;
}

Fighting.prototype.fight = function () {
    var result = '战斗开始！\n';
    while (1) {

        var soldierAttack = this.soldier.attack + this.soldier.weapon.attack;
        var ordinaryAttack = this.ordinary.attack - this.soldier.armor.defense;
        this.soldier.hp -= ordinaryAttack;
        this.ordinary.hp -= soldierAttack;
        if (this.ordinary.hp <= 0) {
            result += this.soldier.profession + this.soldier.name + '使用最后一击，把' + this.ordinary.name + '打死了';
            break;
        }
        if (this.soldier.hp <= 0) {
            result += this.ordinary.profession + this.ordinary.name + '使用最后一击，把' + this.soldier.name + '打死了';
            break;
        }


        var odd = _.random(0, 100);
        if (odd < this.soldier.weapon.Effect.odds) {
            result += this.soldier.profession + this.soldier.name + '用' + this.soldier.weapon.name +
            '攻击了' + this.ordinary.profession + this.ordinary.name + ',' + this.ordinary.name + '受到了' +
            soldierAttack + '点伤害,' + this.ordinary.name + this.soldier.weapon.Effect.behaviour +'了,' + this.ordinary.name + '剩余生命：'+
            this.ordinary.hp + '\n' +
            this.ordinary.name + '受到' + this.soldier.weapon.Effect.attack +
            '点'+this.soldier.weapon.Effect.name+'伤害,' + this.ordinary.name + '剩余生命：' + (this.ordinary.hp - this.soldier.weapon.Effect.attack) +'\n';
        }
        this.ordinary.hp = this.ordinary.hp - this.soldier.weapon.Effect.attack;

        var commonResult = this.ordinary.profession + this.ordinary.name + '攻击了' + this.soldier.profession + this.soldier.name +
            ',攻击了' + ordinaryAttack + '点伤害,' + this.soldier.name + '的' + this.soldier.armor.name +
            '抵挡了' + this.soldier.armor.defense + '点伤害' + this.soldier.name + '还剩' + this.soldier.hp + '点血' + '\n';
            

        if(this.soldier.weapon.Effect.name === '冰冻') {
            var freezeRandom = _.random(0, 100);
            if (freezeRandom < this.soldier.weapon.Effect.odds) {

                result += this.ordinary.name + '冻得直哆嗦,没有击中' + this.soldier.name + '\n';

            }else {
                result += commonResult;
            } 
        }else {
                result += commonResult;
            }
        
};
        return result;
}
module.exports = Fighting;
