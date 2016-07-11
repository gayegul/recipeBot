angular.module("allRecipeCtrls", [])

.controller('RecipeAppController',['$scope', 'recipe', function RecipeAppController($scope, recipe) {
  $scope.recipes = [];
console.log(recipe)


}]);
