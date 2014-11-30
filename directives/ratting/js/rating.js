(function() {
    var app = angular.module("rateApp",[]);

    app.directive('rating', function() {
        return {
            restrict: 'A',
            templateUrl:'rate-template.html',
            scope:{

            },
            link: function(scope, elem, attrs) {
                //console.log("Recognized the fundoo-rating directive usage");
            }
        };
    });
})();