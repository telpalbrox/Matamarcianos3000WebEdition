module Game {
    export class Bullet extends Kiwi.GameObjects.Sprite {
        damage: number;
        physics: Kiwi.Components.ArcadePhysics;
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.bullet, x, y);
            this.addTag('bullet');
            this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
            this.physics.velocity = new Kiwi.Geom.Point(0, -25);
            this.damage = 1;
        }

        update() {
            super.update();
            this.physics.update();
            if(this.y <= -20) {
                this.exists = false;
            }
        }
    }
}