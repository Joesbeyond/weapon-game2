var _ = require('lodash');
function PoisonFireEffect() {

};

PoisonFireEffect.getPoisonFireEffect = function(ordinary, soldier, ordinaryAttack, soldierAttack) {
		var result = '';
        var excuteTimes = 0;    
		soldier.hp -= ordinaryAttack;
        ordinary.hp -= soldierAttack;  
        delayTimes-- ; 
        var odd = _.random(0, 100);
        if (odd < soldier.getWeaponEffectOdds()) {
            result += soldier.profession + soldier.name + '用' + soldier.getWeaponName() +
                    '攻击了' + ordinary.profession + ordinary.name + ',' + ordinary.name + '受到了' +
                    soldierAttack + '点伤害,' + ordinary.name + soldier.getWeaponEffectBehaviour() +'了,' + ordinary.name + '剩余生命：'+
                    ordinary.hp + '\n' +
                    ordinary.name + '受到' + soldier.getWeaponEffectAttack() +
                    '点'+soldier.getWeaponEffectName()+'伤害,' + ordinary.name + '剩余生命：' + (ordinary.hp - soldier.weapon.Effect.attack) +'\n';
                    var delayTimes = soldier.getWeaponEffectDelay();
                    excuteTimes++ ;
                    console.log(excuteTimes++ );
                   // console.log(delayTimes);
        }else {
            result += soldier.name + '进攻\n';
            if(delayTimes === 1){
                //李四受到2点毒性伤害, 李四剩余生命：x
               // console.log(ordinary.hp);
                result += ordinary.name + '受到' + soldier.weapon.Effect.attack +'点'+soldier.weapon.Effect.name+'伤害,' + ordinary.name + '剩余生命：' + (ordinary.hp - soldier.weapon.Effect.attack) +'\n';
            
            }

        }
            ordinary.hp = ordinary.hp - soldier.weapon.Effect.attack;
/*
            if (ordinary.isDead()) {
            result += soldier.profession + soldier.name + '使用最后一击，把' + ordinary.name + '打死了';
            	break;
            }*/
            result += ordinary.profession + ordinary.name + '攻击了' + soldier.profession + soldier.name +
                    ',攻击了' + ordinaryAttack + '点伤害,' + soldier.name + '的' + soldier.armor.name +
                    '抵挡了' + soldier.armor.defense + '点伤害' + soldier.name + '还剩' + soldier.hp + '点血' + '\n';

             return result;

}
module.exports = PoisonFireEffect;