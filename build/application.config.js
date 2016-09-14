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
                .state('composition', {
                    url: '/composition',
                    templateUrl: '/composition/composition.tpl.html',
                    controller: 'CompositionController',
                    controllerAs: 'compositionCtrl'
                })
                .state('audio', {
                    url: '/audio',
                    templateUrl: '/audio/audio.tpl.html',
                    controller: 'AudioController',
                    controllerAs: 'audioCtrl'
                })
                .state('bands', {
                    url: '/bands',
                    templateUrl: '/bands/bands.tpl.html',
                    controller: 'BandsController',
                    controllerAs: 'bandsCtrl'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: '/contact/contact.tpl.html',
                    controller: 'ContactController',
                    controllerAs: 'contactCtrl'
                })
                .state('media', {
                    url: '/media',
                    templateUrl: '/media/media.tpl.html',
                    controller: 'MediaController',
                    controllerAs: 'mediaCtrl'
                });
        }

})();