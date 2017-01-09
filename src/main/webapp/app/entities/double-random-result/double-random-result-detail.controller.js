(function() {
    'use strict';

    angular
        .module('journeyToTheWestApp')
        .controller('DoubleRandomResultDetailController', DoubleRandomResultDetailController);

    DoubleRandomResultDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'DoubleRandomResult', 'Company', 'Task', 'Manager', 'DoubleRandom'];

    function DoubleRandomResultDetailController($scope, $rootScope, $stateParams, previousState, entity, DoubleRandomResult, Company, Task, Manager, DoubleRandom) {
        var vm = this;

        vm.doubleRandomResult = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('journeyToTheWestApp:doubleRandomResultUpdate', function(event, result) {
            vm.doubleRandomResult = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
