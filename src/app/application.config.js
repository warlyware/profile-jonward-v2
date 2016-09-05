(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .config(config)
        .run(run);

        run.$inject = ['$rootScope', '$state'];

        function run($rootScope, $state) {
            $rootScope.$state = $state;
        }

        config.$inject = ['$stateProvider'];

        function config($stateProvider) {

            $stateProvider
                .state('landing', {
                    url: '/',
                    templateUrl: '/landing/landing.tpl.html',
                    controller: 'LandingController',
                    controllerAS: 'landingCtrl'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: '/home/home.tpl.html',
                    controller: 'HomeController',
                    controllerAS: 'homeCtrl'
                })
                .state('bio', {
                    url: '/bio',
                    templateUrl: '/bio/bio.tpl.html',
                    controller: 'BioController',
                    controllerAS: 'bioCtrl'
                });
        }

})();