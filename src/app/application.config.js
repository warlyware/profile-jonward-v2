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
                    controllerAs: 'landingCtrl'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: '/home/home.tpl.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl'
                })
                .state('bio', {
                    url: '/bio',
                    templateUrl: '/bio/bio.tpl.html',
                    controller: 'BioController',
                    controllerAs: 'bioCtrl'
                })
                .state('bands', {
                    url: '/bands',
                    templateUrl: '/bands/bands.tpl.html',
                    controller: 'BandsController',
                    controllerAs: 'bandsCtrl'
                });
        }

})();