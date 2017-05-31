define(function() {
    return {
        controller: function($scope) {
            $scope.$on('$destroy', function(){
                //this can be run when controller is destroyed when going back. Can be used to kill intervals or timeouts for example
            });
            console.log('load controller 2. Id:', $scope.idController);
            $scope.p = {};
            if ($scope.params)
                $scope.p.value = $scope.params.value;
            $scope.open = function(){
                $scope.selectModule('page1', $scope.p)
            }
            $scope.back = function(){
                $scope.goBack($scope.idController - 1);
            }
        }
    }
});