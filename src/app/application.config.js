(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .config(config);

        config.$inject = ['$stateProvider'];

        function config($stateProvider) {
            $stateProvider
                .state('landing', {
                    url: '/',
                    templateUrl: '/landing/landing.tpl.html',
                    controller: 'LandingController',
                    controllerAS: 'landingCtrl'
                });
        }

})();