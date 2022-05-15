/**
 * @brief converts Water to Fuel
 * @param refer refers to the 'create' function context
 */

function convertWaterToFuel(refer) {
     refer.convertWaterToFuel.setVisible(false);
     refer.convertWaterToFuelButton = refer.add.image(600, 32, "convert").setScrollFactor(0).setScale(0.3);
     refer.convertWaterToFuelButton.setVisible(false)
     refer.convertWaterToFuelButton.setInteractive();
     refer.convertWaterToFuelButton.on("pointerdown", () => {
          if(refer.water === 0) {
             console.log("You can no longer convert any more material");
          }
          else if(refer.water >= 1) {
               refer.water-=1;
               refer.oxygen++;
               refer.hydrogen+=2;
          }
     })
}