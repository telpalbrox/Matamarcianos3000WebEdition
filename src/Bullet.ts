module Game {
    export class Bullet extends Kiwi.GameObjects.Sprite {
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.bullet, x, y);
        }

        update() {
            this.y -= 2;
            if(this.y <= -20) {
                this.exists = false;
            }
        }
    }
}