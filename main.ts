/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: March 2026
 * This program light green, yellow and red RGB
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
basic.pause(2000)
neopixelStrip.show()
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
basic.pause(2000)
neopixelStrip.show()
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
basic.pause(2000)
neopixelStrip.show()
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
basic.pause(2000)
neopixelStrip.show()
basic.showIcon(IconNames.Happy)
