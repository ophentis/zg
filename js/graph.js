
angular.module('characters', ['mongolab']);

function GraphCtrl($scope, $location, $routeParams, Character) {
    console.log($scope);
    console.log($location);
    console.log($location.$$path.split('/'));
    
    var self = this;
    
    Character.get({
        id : $location.$$path.split('/')[1]
    }, function(character) {
        self.original = character;
        $scope.character = new Character(self.original);
        
        $scope.drawChart($scope.character);
    });
   
//     
	// $scope.name = '白兔';
	// $scope.level = 25;
	// $scope.hp = 56;
	// $scope.strength = 47;
	// $scope.skill = 50;
	// $scope.speed = 51;
	// $scope.defence = 43;
	// $scope.wisdom = 47;
	// $scope.luck = 20;
// 	

    $scope.drawChart = function drawChart() {
        if( !this.chart ) {
            this.chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'graph',
                    polar: true,
                    type: 'line'
                },
                title: {
                    text: '成長'
                },
                pane: {
                    size: '80%'
                },
                xAxis: {
                    categories: ['HP', '力', '技', '速', '守', '賢', '運'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    min: 0,
                    title: {
                        text: '成長'
                    }
                },
                tooltip: {
                    shared: true
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 100,
                    layout: 'vertical'
                },
                series: [
                    {
                        name: '目前',
                        marker: {
                            symbol: 'square'
                        },
                        data: [0,0,0,0,0,0,0],
                        pointPlacement: 'on'
                    }, {
                        name: '平均成長',
                        marker: {
                            symbol: 'diamond'
                        },
                        data: [0,0,0,0,0,0,0],
                        pointPlacement: 'on'
                    }, {
                        name: '最低成長',
                        marker: {
                            symbol: 'diamond'
                        },
                        data: [0,0,0,0,0,0,0],
                        pointPlacement: 'on'
                    }, {
                        name: '最高成長',
                        marker: {
                            symbol: 'diamond'
                        },
                        data: [0,0,0,0,0,0,0],
                        pointPlacement: 'on'
                    }
                ]
            });
        }
        
        if( !this.character ) return;
        
        var c = this.character;
        var g = ZG.growth[c.specie];
        var b = ZG.base[c.specie];
        //console.log(ZG.growth);
        //current attributes
        this.chart.series[0].setData([
                c.attributes.hp,
                c.attributes.strength,
                c.attributes.skill,
                c.attributes.speed,
                c.attributes.defense,
                c.attributes.wisdom,
                c.attributes.luck
            ],false);
        
        //average attributes at current level
        this.chart.series[1].setData([
                (b.lv0.hp + g.hp * c.level) >> 0,
                (b.lv0.strength + g.strength * c.level) >> 0,
                (b.lv0.skill + g.skill * c.level) >> 0,
                (b.lv0.speed + g.speed * c.level) >> 0,
                (b.lv0.defense + g.defense * c.level) >> 0,
                (b.lv0.wisdom + g.wisdom * c.level) >> 0,
                (b.lv0.luck + g.luck * c.level) >> 0
            ],false);
            
        this.chart.series[2].setData([
                b.lv0.hp + 1 * c.level,
                b.lv0.strength + 1 * c.level,
                b.lv0.skill + 1 * c.level,
                b.lv0.speed + 1 * c.level,
                b.lv0.defense + 1 * c.level,
                b.lv0.wisdom + 1 * c.level,
                b.lv0.luck + 0 * c.level
            ],false);
            
        this.chart.series[3].setData([
                b.lv0.hp + 2 * c.level,
                b.lv0.strength + 2 * c.level,
                b.lv0.skill + 2 * c.level,
                b.lv0.speed + 2 * c.level,
                b.lv0.defense + 2 * c.level,
                b.lv0.wisdom + 2 * c.level,
                b.lv0.luck + 2 * c.level
            ],false);
        
        this.chart.redraw();
        
    }
	$scope.updateGraph = function() {
		console.log(this);
		console.log($scope);
	
		var newData = [
			this.hp,
			this.strength,
			this.skill,
			this.speed,
			this.defence,
			this.wisdom,
			this.luck
		];
		
		for(var i=0; i<7; i++) {
			chart.series[0].data[i].update(newData[i],false);
		}
	
		chart.redraw();
	}
}

