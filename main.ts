// this is a test to see if commits work
// yes they do!
let firstPlayer = sprites.create(img`
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
mp.setPlayerSprite(null, firstPlayer)
let secondPlayer = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
mp.setPlayerSprite(null, secondPlayer)

sprites.allOfKind(SpriteKind.Enemy)

tiles.setCurrentTilemap(tilemap`level2`)
