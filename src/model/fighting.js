/**
 * Created by joes on 15-1-2.
 */
 var PoisonFireEffect = require('./poison-fire-effect');

var _ = require('lodash');
function Fighting(ordinary, soldier) {
    this.ordinary = ordinary;
    this.soldier = soldier;
    this.swimTimes = 0;
}

Fighting.prototype.fight = function() {
    var result = '战斗开始！\n';
    while (1) {

        var soldierAttack = this.soldier.attack + this.soldier.getWeaponAttack();
        var ordinaryAttack = this.ordinary.attack - this.soldier.armor.defense;
        var soldierDeadAttack = 3*soldierAttack;
        //this.soldier.hp -= ordinaryAttack;
        //this.ordinary.hp -= soldierAttack;
        if (this.ordinary.isDead()) {
            result += this.soldier.profession + this.soldier.name + '把' + this.ordinary.name + '打死了';
            break;
        }
        if (this.soldier.isDead()) {
            result += this.ordinary.profession + this.ordinary.name + '把' + this.soldier.name + '打死了';
            break;
        }

        if(this.soldier.getWeaponEffectName() === '毒性' || this.soldier.getWeaponEffectName() === '火焰') {

            result += this.soldier.state.PoisonFireEffect.getPoisonFireEffect(this.ordinary, this.soldier, ordinaryAttack, soldierAttack);
           

        /*this.soldier.hp -= ordinaryAttack;
        this.ordinary.hp -= soldierAttack;  
        delayTimes-- ; 
        var odd = _.random(0, 100);
        var excuteTimes = 0;
        if (odd < this.soldier.getWeaponEffectOdds()) {
            result += this.soldier.profession + this.soldier.name + '用' + this.soldier.getWeaponName() +
                    '攻击了' + this.ordinary.profession + this.ordinary.name + ',' + this.ordinary.name + '受到了' +
                    soldierAttack + '点伤害,' + this.ordinary.name + this.soldier.getWeaponEffectBehaviour() +'了,' + this.ordinary.name + '剩余生命：'+
                    this.ordinary.hp + '\n' +
                    this.ordinary.name + '受到' + this.soldier.getWeaponEffectAttack() +
                    '点'+this.soldier.getWeaponEffectName()+'伤害,' + this.ordinary.name + '剩余生命：' + (this.ordinary.hp - this.soldier.weapon.Effect.attack) +'\n';
                    var delayTimes = this.soldier.getWeaponEffectDelay();
                    excuteTimes++ ;
                    console.log(excuteTimes++ );
                   // console.log(delayTimes);
        }else {
            result += this.soldier.name + '进攻\n';
            if(delayTimes === 1){
                //李四受到2点毒性伤害, 李四剩余生命：x
               // console.log(this.ordinary.hp);
                result += this.ordinary.name + '受到' + this.soldier.weapon.Effect.attack +'点'+this.soldier.weapon.Effect.name+'伤害,' + this.ordinary.name + '剩余生命：' + (this.ordinary.hp - this.soldier.weapon.Effect.attack) +'\n';
            
            }

        }
            this.ordinary.hp = this.ordinary.hp - this.soldier.weapon.Effect.attack;

            if (this.ordinary.hp <= 0) {
            result += this.soldier.profession + this.soldier.name + '使用最后一击，把' + this.ordinary.name + '打死了';
            break;
            }
            result += this.ordinary.profession + this.ordinary.name + '攻击了' + this.soldier.profession + this.soldier.name +
                    ',攻击了' + ordinaryAttack + '点伤害,' + this.soldier.name + '的' + this.soldier.armor.name +
                    '抵挡了' + this.soldier.armor.defense + '点伤害' + this.soldier.name + '还剩' + this.soldier.hp + '点血' + '\n';
*/

        };
            

        if(this.soldier.weapon.Effect.name === '冰冻') {

            result += this.soldier.profession + this.soldier.name + '用' + this.soldier.weapon.name +
                    '攻击了' + this.ordinary.profession + this.ordinary.name + ',' + this.ordinary.name + '受到了' +
                    soldierAttack + '点伤害,' + this.ordinary.name + this.soldier.weapon.Effect.behaviour +'了,' + this.ordinary.name + '剩余生命：'+
                    this.ordinary.hp + '\n'

            var freezeRandom = _.random(0, 100);
            if (freezeRandom < this.soldier.weapon.Effect.odds) {

                result += this.ordinary.name + '冻得直哆嗦,没有击中' + this.soldier.name + '\n';

            }else {
                result += this.ordinary.profession + this.ordinary.name + '攻击了' + this.soldier.profession + this.soldier.name +
                    ',攻击了' + ordinaryAttack + '点伤害,' + this.soldier.name + '的' + this.soldier.armor.name +
                    '抵挡了' + this.soldier.armor.defense + '点伤害' + this.soldier.name + '还剩' + this.soldier.hp + '点血' + '\n';
            
            } 
        };


        if(this.soldier.weapon.Effect.name === '眩晕') {

            this.ordinary.hp -= soldierAttack; 
            this.soldier.weapon.Effect.delay -= 1;
            var odd = _.random(0, 100);
           
            if (odd < this.soldier.weapon.Effect.odds) {

                result += this.soldier.profession + this.soldier.name + '用' + this.soldier.weapon.name +
                    '攻击了' + this.ordinary.profession + this.ordinary.name + ',' + this.ordinary.name + '受到了' +
                    soldierAttack + '点伤害,' + this.ordinary.name + this.soldier.weapon.Effect.behaviour +'了,' + this.ordinary.name + '剩余生命：'+
                    this.ordinary.hp + '\n'
                    this.swimTimes++ ;

                    if (this.swimTimes >= 0) {
                     result += this.ordinary.name + '晕倒了，无法攻击,' + this.soldier.weapon.Effect.name + '还剩：' + this.swimTimes + '轮\n';
                    }else {

                        if (this.ordinary.hp <= 0) {
                            result += this.soldier.profession + this.soldier.name + '使用最后一击，把' + this.ordinary.name + '打死了';
                                break;
                        }
                        this.soldier.hp -= ordinaryAttack;
                        result += this.ordinary.profession + this.ordinary.name + '攻击了' + this.soldier.profession + this.soldier.name +
                            ',攻击了' + ordinaryAttack + '点伤害,' + this.soldier.name + '的' + this.soldier.armor.name +
                            '抵挡了' + this.soldier.armor.defense + '点伤害' + this.soldier.name + '还剩' + this.soldier.hp + '点血' + '\n';
                    } 
            }else {
                result += this.soldier.name + '进攻\n';
                if(this.swimTimes > 0){
                    this.swimTimes--;
                    result += this.ordinary.name + '晕倒了，无法攻击,' + this.soldier.weapon.Effect.name + '还剩：' + this.swimTimes + '轮\n';
    
                }else{
                    this.soldier.hp -= ordinaryAttack;
                result += this.ordinary.profession + this.ordinary.name + '攻击了' + this.soldier.profession + this.soldier.name +
                    ',攻击了' + ordinaryAttack + '点伤害,' + this.soldier.name + '的' + this.soldier.armor.name +
                    '抵挡了' + this.soldier.armor.defense + '点伤害' + this.soldier.name + '还剩' + this.soldier.hp + '点血' + '\n';

                }
                if (this.ordinary.hp <= 0) {
                    result += this.soldier.profession + this.soldier.name + '把' + this.ordinary.name + '打死了';
                    break;
                }
                
            }
        };

        if(this.soldier.weapon.Effect.name === '利剑') {
            result += this.soldier.profession + this.soldier.name + '用' + this.soldier.weapon.name +
                    '攻击了' + this.ordinary.profession + this.ordinary.name + ',' + this.soldier.name + '发动了'+
                    this.soldier.weapon.Effect.behaviour + '一击,' + this.ordinary.name + '受到了'+ soldierDeadAttack +'点伤害,'+
                    this.ordinary.name+'剩余生命：'+ (this.ordinary.hp - soldierDeadAttack)
                    break;
        }
};      

        return result;
}
module.exports = Fighting;
