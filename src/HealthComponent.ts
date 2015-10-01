module Game {
    export class HealthComponent extends Kiwi.Component {
        health: number;
        constructor(entity: Kiwi.Entity, health: number) {
            super(entity, 'health');
            this.health = health;
        }

        update() {
            if(this.health <= 0) {
                this.owner.destroy();
            }
        }
    }
}