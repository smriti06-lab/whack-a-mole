let StartTime = 0
let buttonPressed = false
let moleposition = 0
basic.showString("3-2-1")
let gamerunning = true
while (gamerunning) {
    moleposition = randint(0, 1)
    buttonPressed = false
    basic.pause(300)
    if (moleposition == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    StartTime = input.runningTime()
    while (buttonPressed == false) {
        if (input.runningTime() - StartTime > 1000) {
            game.gameOver()
        }
        if (moleposition == 0 && input.buttonIsPressed(Button.A)) {
            buttonPressed = true
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            game.addScore(1)
        } else if (moleposition == 0 && input.buttonIsPressed(Button.B)) {
            buttonPressed = true
            game.gameOver()
        }
        if (moleposition == 1 && input.buttonIsPressed(Button.B)) {
            buttonPressed = true
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            game.addScore(1)
        } else if (moleposition == 1 && input.buttonIsPressed(Button.A)) {
            buttonPressed = true
            game.gameOver()
        }
    }
}
