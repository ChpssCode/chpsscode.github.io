class Game extends Phaser.Scene
{   

    constructor ()
    {
        super({
            key: "Game"
        });
        this.last = Date.now()
    }

    preload() {
    preloadImages(this);
    }

    create() {
    this.oxygen = 0;
    this.hydrogen = 0;
    
    this.input.setDefaultCursor('url(assets/Cursor.png), pointer');
    //Set Physics
    createText(this);
    this.physics.world.setBounds(0,0, 2000, 2000, true, true, true, true)
    
    //Set Variables
    this.water = 0;

    //Add Objects(Sprites)
    createBackground(this);
    createShip(this);
    createFactoryButton(this);
    createTerra(this);
    
    createKeys(this);
    convertWaterToFuel(this);
    convertHydrogenToFuel(this);
    this.fuel = 2000;
    this.counter = 0;

    }
    update() {
    shipMovement(this);
    updateText(this);
    }
}