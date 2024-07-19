controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LOL.vy == 0) {
        LOL.vy = -200
    }
})
let LOL: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
LOL = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . . c 9 9 c . . . . . . . 
    . . . . c 9 a a 9 c . . . . . . 
    . . . c 9 f a a f 9 c . . . . . 
    . . c 9 a a a a a a 9 c . . . . 
    . . . c 9 9 9 9 9 9 c . . . . . 
    . . . . c c c c c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(LOL, 100, 0)
LOL.setPosition(5, 60)
LOL.ay = 200
forever(function () {
    scene.cameraFollowSprite(LOL)
    LOL.ay += 1
})
