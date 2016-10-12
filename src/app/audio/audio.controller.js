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

            vm.tracks = [{
                title: 'Track 1',
                fileName: 'https://ia600406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3'
            },
            {
                title: 'Track 2',
                fileName: 'https://ia600406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3'
            }];

            vm.playPause = function() {
                if (angular.isDefined(currentTrack)) {
                    isPlaying ? pauseTrack() : playTrack();
                } else {
                    loadTrack();
                }
            }

            vm.loadTrack = function(track) {
                console.log('loading ' + track);
                loadTrack(track);
            }

            function loadTrack(track) {
                stopCurrentTrack();
                currentTrack = ngAudio.load(track);
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

            function stopCurrentTrack() {
                if (angular.isDefined(currentTrack)) {
                    currentTrack.stop();
                }
            }

            return vm;
        }

})();