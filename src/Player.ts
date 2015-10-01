module Game {
    export class Player extends Kiwi.GameObjects.Sprite {
        leftKey: Kiwi.Input.Key;
        rightKey: Kiwi.Input.Key;
        shootKey: Kiwi.Input.Key;
        finger: Kiwi.Input.Finger;
        speedX: number;
        lastShoot: number;
        shootDelay: number;
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.player, x, y);
            this.leftKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.A);
            this.rightKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.D);
            this.shootKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.SPACEBAR);
            this.finger = this.game.input.touch.latestFinger;

            this.lastShoot = Date.now();
            this.speedX = 70;
            this.shootDelay = 150;
        }

        update() {
            this.controls();
        }

        controls() {
            if((this.leftKey.isDown || (this.finger.point.x < this.x && this.finger.active))
                && this.x > 0 - this.state.textures.player.width / 2) {
                this.x -= this.speedX * this.game.time.delta() / 100;
            } else if((this.rightKey.isDown || (this.finger.point.x > this.x && this.finger.active)) &&
                this.x < this.game.stage.width - this.state.textures.player.width / 2) {
                this.x += this.speedX * this.game.time.delta() / 100;
            }

            if((this.shootKey.isDown || this.finger.active) && (Date.now() - this.lastShoot > this.shootDelay)) {
                this.lastShoot = Date.now();
                this.shootLaser();
            }
        }

        shootLaser() {
            this.state.addChild(new Bullet(this.state, this.x + this.width / 2, this.y));
        }
    }
}