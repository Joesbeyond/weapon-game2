var Weapon = require('./model/weapon');
var Armor = require('./model/armor');
var Effect = require('./model/effect');
var Soldier= require('./model/soldier');
var Fighting =  require('./model/fighting');
var Ordinary = require('./model/ordinary');
function main() {

//    var effect = new Effect('毒性', 2, 0, 100);
//    var effect = new Effect('火焰', '着火', 2, 0, 100);
    var armor = new Armor('阿克斯圣光盾', 2);
//    var weapon = new Weapon('优质毒剑', 3, effect);
//	var weapon = new Weapon('火焰剑', 3, effect);
	
	var effect = new Effect('冰冻', '冻僵', 2, 0, 100);
	var weapon = new Weapon('寒冰剑', 3, effect);

    var liSi = new Ordinary('普通人', '李四', 22, 4);
    var zhangSan = new Soldier('战士', '张三', 30, 5, weapon, armor);

    var fighting = new Fighting(liSi, zhangSan);
    console.log(fighting.fight());
}

main();
