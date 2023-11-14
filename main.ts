input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    basic.pause(1000)
    datalogger.log(
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("bright", input.lightLevel())
    )
})
