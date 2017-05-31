define(function() {
    return {
        controller: function($scope) {
            console.log('load root controller. Id:', $scope.idController);
            $scope.open = function(module){
                $scope.selectModule(module);
            }
        }
    }
});