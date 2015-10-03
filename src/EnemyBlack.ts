module Game {
    export class EnemyBlack extends Enemy{
        static HEALTH: number = 1;
        static VEL_Y: number = 19;
        constructor(state: Kiwi.State, x: number, y: number) {
            super(state, state.textures.enemyBlack, EnemyBlack.HEALTH, new Kiwi.Geom.Point(x, y), new Kiwi.Geom.Point(0, EnemyBlack.VEL_Y));
        }
    }
}
