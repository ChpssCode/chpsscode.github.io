/**
 * @brief converts Hydrogen to Fuel
 * @param refer refers to the 'create' function context
 */

function convertHydrogenToFuel(refer) {
     refer.convertHydrogenToFuel.setVisible(false);
     refer.convertHydrogenToFuelButton = refer.add.image(600, 80, "convert").setScrollFactor(0).setScale(0.3);
     refer.convertHydrogenToFuelButton.setVisible(false)
     refer.convertHydrogenToFuelButton.setInteractive();
     refer.convertHydrogenToFuelButton.on("pointerdown", () => {
          if(refer.hydrogen === 0) {
             console.log("You can no longer convert any more material");
          }
          else if(refer.hydrogen >= 1) {
               refer.hydrogen-=1;
               refer.fuel+=1;
          }
     })
}