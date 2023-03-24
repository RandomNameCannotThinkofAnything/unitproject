mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (sprite) {
    firstPlayer.y += -10
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (sprite) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, firstPlayer, 50, 50)
})
// hfshfd
function setUp () {
    firstPlayer = sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(firstPlayer, sprites.castle.tileDarkGrass1)
    scene.cameraFollowSprite(firstPlayer)
    info.setScore(0)
    info.setLife(3)
}
function follow (sprite: Sprite) {
    array = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of array) {
        if (value.x != sprite.x) {
            value.vx = (sprite.x - value.x) / Math.abs(sprite.x - value.x)
        }
        if (value.y != sprite.y) {
            value.vy = (sprite.y - value.y) / Math.abs(sprite.y - value.y)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeLifeBy(-1)
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (sprite) {
    firstPlayer.x += 10
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (sprite) {
    firstPlayer.x += -10
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (sprite) {
    firstPlayer.y += 10
})
let enemies: Sprite = null
let array: Sprite[] = []
let projectile: Sprite = null
let firstPlayer: Sprite = null
let ms = 0
let difficulty = game.askForNumber("What difficulty do you want to play on, 1 = easy, 2 = medium, 3 = hard.")
if (difficulty == 1) {
    ms = 2000
} else if (difficulty == 2) {
    ms = 1500
} else if (difficulty == 3) {
    ms = 1000
} else {
    game.splash("That is not a valid option")
}
tiles.setCurrentTilemap(tilemap`level2`)
setUp()
game.onUpdate(function () {
    follow(firstPlayer)
})
game.onUpdateInterval(ms, function () {
    enemies = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemies, sprites.castle.tileDarkGrass1)
})

