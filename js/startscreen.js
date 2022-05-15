class Startscreen extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: "Startscreen"
        });
    }

    preload() {
    this.load.image("background", "assets/background.png")
    this.load.image("logo", "assets/logo.png");
    this.load.image("play", "assets/play.png")
    }

    create() {
    this.physics.add.image(955, 380, "logo").setScale(1.4).setDepth(3);
    this.play = this.physics.add.image(955, 575, "play").setScale(1);
    this.add.tileSprite(1000, 0, 2000, 2000, "background");

    this.play.setInteractive();
    this.play.on("pointerup", () => this.scene.start('Game') )
    }
    update() {

    }
}