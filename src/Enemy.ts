module Game {
    export class Enemy extends Kiwi.GameObjects.Sprite {
        physics: Kiwi.Components.ArcadePhysics;
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.enemy, x, y);
            this.components.add(new HealthComponent(this, 1));

            this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
            this.physics.velocity = new Kiwi.Geom.Point(0, 19);

            this.addTag('enemy');
        }

        update() {
            super.update();
            this.physics.update();
            if(this.y >= this.game.stage.height) {
                this.exists = false;
            }
        }
    }
}