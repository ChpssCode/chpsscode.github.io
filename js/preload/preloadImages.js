/**
 * @brief Preloads the used images in the game.
 * @param refer refers to the 'update' function context
 */

function preloadImages(refer) {
    refer.load.image("ship", "./assets/ship.gif"); 
    refer.load.image("background", "assets/background.png");
    refer.load.image("terra", "assets/Terra.png");
    refer.load.image("store", "assets/store.png");
    refer.load.image("cursor", "assets/Cursor.png");
    refer.load.image("factory", "assets/factory.png");
    refer.load.image("convert", "assets/convert.png")
}