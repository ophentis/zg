
var Prototype = {};

angular.module('characters', ['mongolab'])
       .config(function($routeProvider) {
            $routeProvider.when('/', {controller:ListCharacterCtrl, templateUrl:'partial/_characterList.html'})
                          .when('/add/', {controller:AddCharacterCtrl, templateUrl:'partial/_characterDetail.html'})
                          .when('/edit/:characterId', {controller:EditCharacterCtrl, templateUrl:'partial/_characterDetail.html'})
                          .when('/combine/', {controller:CombineCharacterCtrl, templateUrl:'partial/_characterCombine.html'})
                          .otherwise({redirectTo:'/list.html'});
       });

function ListCharacterCtrl($scope, Character){

	//@promise
	$scope.characterList = Character.query(function(characters) {

        for(var i=0; i<characters.length; i++) {
            var character = characters[i];
            character.totalAttributes = ZGUtil.sum(character.attributes);
            character.growth = ZGUtil.growth(character);
            character.totalGrowth = ZGUtil.sum(character.growth);
        }
	});

}

function AddCharacterCtrl($scope, $location, Character) {
//     console.log(arguments);

    $scope.species = $scope.species || ZG.species;

    $scope.save = function() {
        Character.save($scope.character, function(character) {
            $location.path('/edit/' + character._id.$oid);
        });
    }
}

function EditCharacterCtrl($scope, $location, $routeParams, Character) {

    $scope.species = $scope.species || ZG.species;

    var self = this;

    Character.get({
        id : $routeParams.characterId
    }, function(character) {
        self.original = character;
        $scope.character = new Character(self.original);
    });

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.character);
    }

    $scope.remove = function() {
        self.original.destroy(function() {
            $location.path('/');
        });
    };

    $scope.save = function() {
        $scope.character.update(function() {
            $location.path('/');
        });
    };

}

function CombineCharacterCtrl($scope, Character) {
    $scope.species = ZG.species || {};
//     console.log($scope.species);

    $scope.characterList = Character.query(function(characters) {
        // console.log(characters);

        for(var i=0; i<characters.length; i++) {
            var character = characters[i];
            character.totalAttributes = ZGUtil.sum(character.attributes);
            character.growth = ZGUtil.growth(character);
            character.totalGrowth = ZGUtil.sum(character.growth);
        }
    });

    $scope.updateCombineResult = function() {

        if( !this.sun || !this.moon ) return;

		this.combineSpecie = this.combineSpecie || this.sun.specie;

        this.sun.base = ZG.base[this.sun.specie];

        var combine = {
            base: ZG.base[this.combineSpecie],
            growth: {},
            attributes: {}
        };

        for(var attr in this.sun.attributes) {
            //growth is (int)((sun+moon)/2) no lesser than 0
            combine.growth[attr] = Math.max((this.sun.growth[attr]+this.moon.growth[attr]) >> 1, 0);
            combine.attributes[attr] = combine.base.lv0[attr] + combine.growth[attr] + combine.base.growth[attr];
        }
        combine.totalGrowth = ZGUtil.sum(combine.growth);
        combine.totalAttributes = ZGUtil.sum(combine.attributes);

        this.combine = combine;

    }
}
