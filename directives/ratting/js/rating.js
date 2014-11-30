(function() {
    var app = angular.module("rateApp",[]);

    app.directive('rating', function() {
        return {
            restrict: 'A',
            templateUrl:'rate-template.html',
            scope:{
            	max:'='
            },
            link: function(scope, elem, attrs) {
            	scope.stars = [];
            	for(var i=0;i < scope.max; i++){
            		scope.stars.push({});
            	}
            }
        };
    });
})();