// Code goes here

angular.module('flexApp', ['ngMaterial'])

    .run(function() {
        console.log('online');
    })

    .controller('MainCtrl', function($scope, $timeout) {
        console.log('MainCtrl');

        var timeline = new TimelineLite();

            timeline.stop();

            timeline.to('#red', 1, {
                left: '0',
                ease: Power3.easeOut
            }, 0);

            timeline.to('#blue', 1, {
                left: '0',
                ease: Power3.easeOut
            }, 0);


            timeline.to('#top-div', 0.8, {
                height: '100px',
                ease: Power2.easeInOut
            }, 1);

            timeline.to('#bottom-div', 0.8, {
                height: '100px',
                ease: Power2.easeInOut
            }, 1);

            timeline.from('#mid-div', 0.8, {
                height: '2px',
                ease: Power2.easeInOut
            }, 1);

            timeline.from('#red', 0.8, {
                height: '2px',
                ease: Power2.easeInOut
            }, 1);

            timeline.from('#blue', 0.8, {
                height: '2px',
                ease: Power2.easeInOut
            }, 1);



            $timeout(function() {
                timeline.play();
            }, 1000);

        $scope.toggleSlide = function() {
            console.log('attemting toggle');
            timeline.progress(0);
            timeline.stop();
            $timeout(function() {
                timeline.play();
            }, 1000);
        }

    });