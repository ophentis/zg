

function mainCtrl($scope) {
    //$scope.species = {}
    
    var minGrowth = {
        hp: [1,2],
        strength: [1,2],
        skill: [1,2],
        speed: [1,2],
        defense: [1,2],
        wisdom: [1,2],
        strength: [0,1],
    }
    
    for(var base in ZG.base) {
        var tmp = {};
        for(var attr in minGrowth) {
            var g = min[Growth];
            tmp[attr] = (g[0]);
        }
    }
}
