(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .controller('AudioController', AudioController);

        AudioController.$injector = [];

        function AudioController() {
            var vm = this;
            var currentTrack;
            var isPlaying = false;

            vm.tracks = [{
                id: '1',
                artist: 'NoOne',
                title: 'Track 1',
                url: 'https://ia600406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3'
            },
            {
                title: 'Track 2',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
            }];

            // vm.playPause = function() {
            //     if (angular.isDefined(currentTrack)) {
            //         isPlaying ? pauseTrack() : playTrack();
            //     } else {
            //         loadTrack();
            //     }
            // }

            // vm.loadTrack = function(track) {
            //     console.log('loading ' + track);
            //     loadTrack(track);
            // }

            // function loadTrack(track) {
            //     stopCurrentTrack();
            //     // currentTrack = ngAudio.load(track);
            //     playTrack();
            //     isPlaying = true;
            // }

            // function playTrack() {
            //     currentTrack.play();
            //     isPlaying = true;
            // }

            // function pauseTrack() {
            //     currentTrack.pause();
            //     isPlaying = false;
            // }

            // function stopCurrentTrack() {
            //     if (angular.isDefined(currentTrack)) {
            //         currentTrack.stop();
            //     }
            // }

            return vm;
        }

})();