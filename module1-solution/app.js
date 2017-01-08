(function () {

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menuItems="";
  $scope.outputMessage="";
  $scope.checkDiet = function () {
    var numerOfItems = $scope.menuItems.split(',');
      if ($scope.menuItems.length<1){
        $scope.outputMessage="Please enter data first";
        return;
      }
      if (numerOfItems.length <= 3) {
        $scope.outputMessage="Enjoy!";
      } else {
        $scope.outputMessage="Too much!";
      }
      };
  }


})();
