(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .controller('AudioController', AudioController);

        AudioController.$injector = ['ngAudio'];

        function AudioController(ngAudio) {
            var vm = this;
            var currentTrack;
            var isPlaying = false;

            vm.playPause = function() {
                if (angular.isDefined(currentTrack)) {
                    isPlaying ? pauseTrack() : playTrack();
                } else {
                    loadTrack();
                }
            }

            function loadTrack() {
                currentTrack = ngAudio.load("https://ia600406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3");
                playTrack();
                isPlaying = true;
            }

            function playTrack() {
                currentTrack.play();
                isPlaying = true;
            }

            function pauseTrack() {
                currentTrack.pause();
                isPlaying = false;
            }

            return vm;
        }

})();