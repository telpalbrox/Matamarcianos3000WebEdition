module Game {
    export class Enemy extends Kiwi.GameObjects.Sprite {
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.enemy, x, y);
        }

        update() {
            this.y += 5;
            if(this.y >= this.game.stage.height) {
                this.exists = false;
            }
        }
    }
}