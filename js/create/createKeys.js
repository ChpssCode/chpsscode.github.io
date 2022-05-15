/**
 * @brief Creates the keyboard keys + Physics
 * @param refer refers to the 'create' function context
 */

function createKeys(refer) {
    refer.keys = {
       "W": refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
       "A": refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
       "S": refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
       "D": refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
       "C": refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
   };
}