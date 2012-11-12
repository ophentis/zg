var ZGUtil = {};

ZGUtil.attrToArray = function(attr) {
	return [
		attr.hp,
		attr.strength,
		attr.skill,
		attr.speed,
		attr.defence,
		attr.wisdom,
		attr.luck
	];
}

ZGUtil.growth = function(character) {
    try {
        var level = character.level,
            lv0 = ZG.base[character.specie].lv0,
            reduce = ZG.reduce[character.specie];
    } catch(e) {
    	console.error(character);
    	console.error(e);
        return {};
    }

    // console.log(character);

    var growth = angular.extend({},character.attributes);
    for( var attr in growth ) {
        var original = growth[attr];
        growth[attr] = original - lv0[attr] - reduce[attr]*level;
    }
	console.log(growth);
    return growth;
}

ZGUtil.sum = function(attributes) {
    // console.log(attributes);

    var sum = 0;
    for( var k in attributes ) {
        sum += attributes[k];
    }
    return sum;
}
