module Game {
    export class Enemy extends Kiwi.GameObjects.Sprite {
        physics: Kiwi.Components.ArcadePhysics;
        constructor(state: Kiwi.State, texture: Kiwi.Textures.TextureAtlas, health: number, coords: Kiwi.Geom.Point, velocity: Kiwi.Geom.Point) {
            super(state, texture, coords.x, coords.y);
            this.components.add(new HealthComponent(this, health));

            this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
            this.physics.velocity = velocity;

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