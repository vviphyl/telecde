joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    son = 1
    basic.showLeds(`
        # # # . .
        . . . # .
        # # . . #
        . . # . #
        # . # . #
        `)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    AvArr = -1
    basic.showLeds(`
        . . . . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    AvArr = 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . . . .
        `)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    Led += 1
    basic.showString("LED")
})
let direction = 0
let vitesse = 0
let Led = 0
let AvArr = 0
let son = 0
radio.setGroup(1)
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
basic.forever(function () {
    while (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 600) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
            vitesse = 10
        } else {
            vitesse = 5
        }
    }
    vitesse = 0
    while (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 400) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
            vitesse = -10
        } else {
            vitesse = -5
        }
    }
})
basic.forever(function () {
    while (joystickbit.getRockerValue(joystickbit.rockerType.X) > 600) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
            direction = -10
        } else {
            direction = -5
        }
    }
    direction = 0
    while (joystickbit.getRockerValue(joystickbit.rockerType.X) < 400) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 200) {
            direction = 10
        } else {
            direction = 5
        }
    }
})
basic.forever(function () {
    radio.sendValue("vit", vitesse)
    basic.pause(100)
    radio.sendValue("virage", direction)
    basic.pause(100)
    radio.sendValue("AvAr", AvArr)
    basic.pause(100)
    radio.sendValue("son", son)
    basic.pause(100)
    radio.sendValue("led", Led)
    basic.pause(100)
})
