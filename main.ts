input.onGesture(Gesture.Shake, function () {
    toss = randint(1, 2)
    if (toss == 1) {
        basic.showString("K")
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showString("M")
        basic.pause(3000)
        basic.clearScreen()
    }
})
let toss = 0
toss = 0
