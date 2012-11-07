
// angular.module('characters', ['mongolab']);

function MainCtrl($scope) {
	var LEVEL = 25;
	
	$scope.level = LEVEL;
    $scope.table = initTable(LEVEL);
    $scope.updateTable = updateTable;
    
    $scope.percentage = 130;
    $scope.updateTable();
}

function initTable(level) {
	var table = [];
    
    for(var i=0;i<level;i++) {
    	var arr = [];
	    for(var j=0;j<level*2;j++) {
	    	arr[j] = null;
	    }
	    table[i] = arr;
	}
	
	return table;
}

function updateTable() {
	if( !this.percentage ) return;
	
	var p = this.percentage/100,
	    level = this.level;
	    
	var n = 2-p,
	    m = p-1;
	
	//get reference to table array
	var table = (this.table.length === this.level) ? this.table: initTable(this.level);
	
	table[0][0] = n;
	table[0][1] = m;
	    
	for(var i=1; i<level; i++) {
	    for( var j=i; j < (i+1)*2; j++ ) {
	    	var value = 0;
	    	
	    	if(table[i-1][j-2]) value+= table[i-1][j-2]*m;
	    	if(table[i-1][j-1]) value+= table[i-1][j-1]*n;
	    	
	    	table[i][j] = value;
	    }
	}
	
	this.table = table;
}


