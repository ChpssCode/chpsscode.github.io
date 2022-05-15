/**
 * @brief Creates the text displayed on screen
 * @param refer refers to the 'create' function context
 */

function createText(refer) {
     refer.speedText = refer.add.text(32, 32).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.keysText = refer.add.text(32, 64).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.waterText = refer.add.text(32, 56).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.fuelText = refer.add.text(32, 80).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.convertHydrogenToFuel = refer.add.text(32, 80).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
     refer.convertWaterToFuel = refer.add.text(32, 32).setScrollFactor(0).setFontSize(16).setColor('#ffffff');
}