/**
 * @brief Updates the text displayed on screen.
 * @param refer refers to the 'update' function context
 */

function updateText(refer) {
    refer.speedText.setText('Speed: ' + refer.ship.body.speed);
    refer.fuelText.setText('Fuel: ' + refer.fuel);
    refer.convertWaterToFuel.setText(refer.water + ' Water Molecule = ' + refer.water * 2 + ' Hydrogen and ' + refer.water + ' Oxygen');
    refer.convertHydrogenToFuel.setText(refer.hydrogen + ' Hydrogen = ' + refer.hydrogen + ' Fuel');
    refer.waterText.setText('Water: ' + refer.water);
}