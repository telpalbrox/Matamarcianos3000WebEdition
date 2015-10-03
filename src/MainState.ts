module Game {
    export class MainState extends Kiwi.State {
        player: Player;
        randomData: Kiwi.Utils.RandomDataGenerator;

        constructor() {
            super('mainState');
        }

        preload() {
            this.addImage('player', 'assets/images/ship.png');
            this.addImage('enemyBlack', 'assets/images/enemyBlack1.png');
            this.addImage('bullet', 'assets/images/laser.png');
            this.addImage('enemyBlue', 'assets/images/enemyBlue2.png');
        }

        create() {
            this.randomData = new Kiwi.Utils.RandomDataGenerator();
            this.player = new Player(this, this.game.stage.width / 2 - this.textures.player.width / 2, this.game.stage.height - 100);

            this.addChild(this.player);
            this.addChild(new EnemyBlack(this, 0, 150));
        }

        update() {
            super.update();
            this.game.stage.setRGBColor(0, 0, 0);
            this.randomSpawn();
            this.collisions();
        }

        collisions() {
            this.playerBulletsEnemiesCollisions();
        }

        playerBulletsEnemiesCollisions() {
            let enemies = <Enemy[]>this.getChildrenByTag('enemy');
            let bullets = <Bullet[]>this.getChildrenByTag('bullet');
            for(let enemy of enemies) {
                for(let bullet of bullets) {
                    if(enemy.physics.overlaps(bullet)) {
                        let healthComponent = <HealthComponent>enemy.components.getComponent('health');
                        healthComponent.health -= bullet.damage;
                    }
                }
            }
        }

        randomSpawn() {
            let number = this.randomData.integerInRange(0, 100);
            if(number === 0) {
                this.spawnEnemy();
            }
        }

        spawnEnemy() {
            let newEnemy: Enemy;
            let number = this.randomData.integerInRange(0, 2);
            if(number === 0) {
                let x = this.randomData.integerInRange(0 + this.textures.enemyBlack.width, this.game.stage.width - this.textures.enemyBlack.width);
                newEnemy = new EnemyBlack(this, x, -100);
            } else {
                let x = this.randomData.integerInRange(0 + this.textures.enemyBlue.width, this.game.stage.width - this.textures.enemyBlue.width);
                newEnemy = new EnemyBlue(this, x, -100);
            }
            let enemies = <Enemy[]>this.getChildrenByTag('enemy');
            for(let enemy of enemies) {
                if(newEnemy.physics.overlaps(enemy)) {
                    return;
                }
            }
            this.addChild(newEnemy);
        }
    }
}