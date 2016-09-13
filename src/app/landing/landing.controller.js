(function() {

    'use strict';

    angular
        .module('jonWardApp')
        .controller('LandingController', LandingController);

        LandingController.$inject = ['$timeout'];

        function LandingController($timeout) {
            console.log('i am landing ctrl');

            // var timeline = new TimelineMax();

            // timeline.stop();

            // timeline.to('#red', 1, {
            //     left: '0',
            //     ease: Power3.easeOut
            // }, 0);

            // timeline.to('#blue', 1, {
            //     left: '0',
            //     ease: Power3.easeOut
            // }, 0);

            // timeline.to('#top-div', 0.8, {
            //     height: '150px',
            //     ease: Power2.easeInOut
            // }, 1);

            // timeline.to('#bottom-div', 0.8, {
            //     height: '150px',
            //     ease: Power2.easeInOut
            // }, 1);

            // timeline.from('#mid-div', 0.8, {
            //     height: '2px',
            //     ease: Power2.easeInOut
            // }, 1);

            // timeline.from('#red', 0.8, {
            //     height: '2px',
            //     ease: Power2.easeInOut
            // }, 1);

            // timeline.from('#blue', 0.8, {
            //     height: '2px',
            //     ease: Power2.easeInOut
            // }, 1);

            // timeline.to('#enter-button', 0.3, {
            //     opacity: 1
            // }, 1.3);

            // timeline.from('#jon-name', 0.6, {
            //     ease: Power2.easeOut,
            //     opacity: 0,
            //     y: -460
            // }, 1.25);

            // timeline.add('stagger', 1.2);

            // timeline.staggerFrom(".nav-button", 0.8, {
            //     opacity:0,
            //     y:20,
            //     ease:Back.easeIn
            // }, 0.2, 'stagger');


            // $timeout(function() {
            //     timeline.play();
            // }, 1000);

        }

})();