(function() {
    var app = angular.module("rateApp", []);
    app.controller('ratingCrtl',['$scope','$window',
        function($scope,$window){
            $scope.rating = 5;
            $scope.onRating = function(rating){
                console.log(rating);
            };
        }
    ]);
    app.directive('rating', function() {
        return {
            restrict: 'A',
            templateUrl: 'rate-template.html',
            scope: {
                max: '=',
                readonly: '@',
                ratingValue: '=',
                onRating: '&',
            },
            link: function(scope, elem, attrs) {

                var updateStars = function() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({filled: i < scope.ratingValue});
                    }
                };

                scope.toggle = function(index) {
                    if (scope.readonly && scope.readonly === 'true') {
                        return;
                    }
                    scope.ratingValue = index + 1;
                    scope.onRating();
                };

                scope.$watch('ratingValue', function(oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        };
    });
})();