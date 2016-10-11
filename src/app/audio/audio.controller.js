(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .controller('AudioController', AudioController);

        AudioController.$injector = ['ngAudio'];

        function AudioController(ngAudio) {
            var vm = this;
            var currentTrack;

            vm.playPause = function() {
                currentTrack = ngAudio.load("https://ia600406.us.archive.org/23/items/PeterHernandezPodcastAudioPlaceholder/AudioPlaceholder.mp3");
                currentTrack.play();
            }

            return vm;
        }

})();