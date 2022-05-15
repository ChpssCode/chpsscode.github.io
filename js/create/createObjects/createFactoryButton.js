/**
 * @brief Creates the shop button object + Physics
 * @param refer refers to the 'create' function context
 */

function createFactoryButton(refer) {
 refer.factoryButton = refer.add.image(1780, 45, "factory").setScrollFactor(0).setScale(0.4);
 let statsStatus = true;
 refer.factoryButton.setInteractive()
 refer.factoryButton.on("pointerdown", () => {
    if(statsStatus === true) {
       refer.speedText.setVisible(false)
       refer.waterText.setVisible(false)
       refer.fuelText.setVisible(false)
       refer.convertWaterToFuel.setVisible(true)
       refer.convertWaterToFuelButton.setVisible(true)
       statsStatus = false;
    }
    else if(statsStatus === false) {
       refer.speedText.setVisible(true)
       refer.waterText.setVisible(true)
       refer.fuelText.setVisible(true)
       refer.convertWaterToFuel.setVisible(false)
       refer.convertWaterToFuelButton.setVisible(false)
       statsStatus = true;
    }
   console.log("Hi")
 })
 refer.input.keyboard.on("keydown-F", () => {
    if(statsStatus === true) {
       refer.speedText.setVisible(false)
       refer.keysText.setVisible(false)
       refer.waterText.setVisible(false)
       refer.fuelText.setVisible(false)
       refer.convertWaterToFuel.setVisible(true)
       refer.convertWaterToFuelButton.setVisible(true)
       refer.convertHydrogenToFuel.setVisible(true)
       refer.convertHydrogenToFuelButton.setVisible(true)
       statsStatus = false;
    }
    else if(statsStatus === false) {
       refer.speedText.setVisible(true)
       refer.keysText.setVisible(true)
       refer.waterText.setVisible(true)
       refer.fuelText.setVisible(true)
        refer.convertWaterToFuel.setVisible(false)
        refer.convertWaterToFuelButton.setVisible(false)
        refer.convertHydrogenToFuel.setVisible(false)
        refer.convertHydrogenToFuelButton.setVisible(false)
       statsStatus = true;
    }
   console.log("Hi")
 })
}