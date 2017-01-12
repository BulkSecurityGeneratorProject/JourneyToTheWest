(function() {
    'use strict';

    angular
        .module('journeyToTheWestApp')
        .controller('SignDetailController', SignDetailController);

    SignDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Sign'];

    function SignDetailController($scope, $rootScope, $stateParams, previousState, entity, Sign) {
        var vm = this;

        vm.sign = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('journeyToTheWestApp:signUpdate', function(event, result) {
            vm.sign = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
