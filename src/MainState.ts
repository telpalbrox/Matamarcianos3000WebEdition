module Game {
    export class MainState extends Kiwi.State {
        player: Player;

        constructor() {
            super('mainState');
        }

        preload() {
            this.addImage('player', 'assets/images/ship.png');
        }

        create() {
            this.player = new Player(this, this.game.stage.width / 2 - this.textures.player.width /2, this.game.stage.height - 100);

            this.addChild(this.player);
        }

        update() {
            super.update();
            this.game.stage.setRGBColor(0, 0, 0);
        }
    }
}