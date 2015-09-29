/// <reference path="bower_components/Kiwi.js/build/kiwi.d.ts" />
/// <reference path="src/MainState.ts" />
/// <reference path="src/Player.ts" />
/// <reference path="src/Utils.ts" />

document.addEventListener('DOMContentLoaded', function onReady() {
    let game = new Kiwi.Game();
    let mainState = new Game.MainState();
    game.states.addState(mainState);
    game.states.switchState('mainState');

    // Mobile browser hacks
    if (Game.Utils.checkMobile()) {
        // Prevent the webview from moving on a swipe
        window.document.addEventListener("touchmove", function (e) {
            e.preventDefault();
            window.scroll(0, 0);
            return false;
        }, false);
    }
}, false);