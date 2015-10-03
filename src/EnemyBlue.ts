module Game {
    export class EnemyBlue extends Enemy{
        static HEALTH: number = 3;
        static VEL_Y: number = 19;
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.enemyBlue, EnemyBlue.HEALTH, new Kiwi.Geom.Point(x, y), new Kiwi.Geom.Point(0, EnemyBlue.VEL_Y));
        }
    }
}
