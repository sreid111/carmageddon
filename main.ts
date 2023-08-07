scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    level += 1
    levelUp()
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(ghost, effects.disintegrate, 500)
    ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost.follow(mySprite, 90)
})
function levelUp () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite.setPosition(7, 8)
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile9`)
        game.showLongText("Avoid the other cars until the time runs out!", DialogLayout.Bottom)
        level2enemies()
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
        info.startCountdown(60)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
        ghost = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
        ghost.follow(mySprite, 80)
    }
}
info.onCountdownEnd(function () {
    level += 1
    levelUp()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    slowTime = gameTime
    slow = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
function level2enemies () {
    info.startCountdown(60)
    enemySpeed = 70
    lvl2Difficulty = 0
    blueCar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 6 6 . . 
        . . . . . 6 c 6 6 6 6 6 6 9 6 . 
        . . . . 6 c c 6 6 6 6 6 6 9 c 6 
        . . d 6 9 c c 6 9 9 9 9 9 9 c c 
        . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
        . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
        . 6 6 6 6 6 8 b b b b 8 b b b 8 
        . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
        . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
        . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
        . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
        . 8 8 8 8 f f f 8 8 8 8 f f f f 
        . . . 8 f f f f f 8 8 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(blueCar, assets.tile`myTile5`)
    blueCar.follow(mySprite, enemySpeed)
    purpleCar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b a a a a a a a 3 c 
        . 3 3 3 d b a a b b b a b b a 3 
        . 3 3 3 3 3 a b b b b a b b b a 
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
        . 3 d d 3 a f a a a f a a a a a 
        . d d 3 a a a f a a f a a a a a 
        . a a a a a a a f f f a a a a a 
        . a a a a f f f a a a a f f f f 
        . . . a f f f f f a a f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(purpleCar, assets.tile`myTile5`)
    purpleCar.follow(mySprite, enemySpeed)
    greenCar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b 7 7 7 7 7 7 7 3 c 
        . 3 3 3 d b 7 7 b b b 7 b b 7 3 
        . 3 3 3 3 3 7 b b b b 7 b b b 7 
        . 3 3 3 3 7 3 3 3 3 3 7 3 3 3 7 
        . 3 d d 3 7 f 7 7 7 f 7 7 7 7 7 
        . d d 3 7 7 7 f 7 7 f 7 7 7 7 7 
        . 7 7 7 7 7 7 7 f f f 7 7 7 7 7 
        . 7 7 7 7 f f f 7 7 7 7 f f f f 
        . . . 7 f f f f f 7 7 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(greenCar, assets.tile`myTile5`)
    greenCar.follow(mySprite, enemySpeed)
}
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile4, function (sprite, location) {
    slowTime = gameTime
    slow = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let greenCar: Sprite = null
let purpleCar: Sprite = null
let blueCar: Sprite = null
let lvl2Difficulty = 0
let enemySpeed = 0
let slow = 0
let gameTime = 0
let slowTime = 0
let ghost: Sprite = null
let mySprite: Sprite = null
let level = 0
level = 0
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
level = 1
levelUp()
game.onUpdate(function () {
    if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (mySprite.vx > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . e e c c e e . . . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            . . . . 2 c 2 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 2 4 2 2 2 2 2 c 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 c 2 4 4 2 2 2 c 2 f . 
            . . . e 2 c e c c c c e c 2 e . 
            . . . e 2 e c b b b b c e 2 e . 
            . . . e 2 e b b b b b b e 2 e . 
            . . . e e e e e e e e e e e e . 
            . . . f e d e e e e e e d e f . 
            . . . f e 2 d e e e e d 2 e f . 
            . . . f f e e e e e e e e f f . 
            . . . . f f . . . . . . f f . . 
            `)
    }
    if (mySprite.vy > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 4 4 2 2 2 2 . . . 
            . . . . . c 4 2 2 2 2 2 c . . . 
            . . . . 2 c 4 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 c 4 2 2 2 2 2 c 2 f . 
            . . . f e c 2 2 2 2 2 2 c e f . 
            . . . f 2 c 2 b b b b 2 c 2 f . 
            . . . e 2 2 b c c c c b 2 2 e . 
            . . . e e b c c c c c c b e e . 
            . . . f e 4 4 4 4 4 4 4 4 e f . 
            . . . f e d 2 2 2 2 2 2 d e f . 
            . . . . 2 d d 2 2 2 2 d d 2 f . 
            . . . . f 2 d 2 2 2 2 d 2 f . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            `)
    }
})
game.onUpdate(function () {
    if (level == 2) {
        if (blueCar.vx < 0) {
            blueCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 6 6 . . 
                . . . . . 6 c 6 6 6 6 6 6 9 6 . 
                . . . . 6 c c 6 6 6 6 6 6 9 c 6 
                . . d 6 9 c c 6 9 9 9 9 9 9 c c 
                . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
                . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
                . 6 6 6 6 6 8 b b b b 8 b b b 8 
                . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
                . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
                . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
                . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
                . 8 8 8 8 f f f 8 8 8 8 f f f f 
                . . . 8 f f f f f 8 8 f f f f f 
                . . . . f f f f . . . . f f f . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (blueCar.vx > 0) {
            blueCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 6 6 6 6 6 6 6 . . . . 
                . . . 6 9 6 6 6 6 6 6 c 6 . . . 
                . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
                . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
                . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
                . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
                . 6 8 b b b 8 b b b b 8 6 6 6 6 
                . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
                . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
                . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
                . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
                . 8 f f f f 8 8 8 8 f f f 8 8 8 
                . . f f f f f 8 8 f f f f f 8 . 
                . . . f f f . . . . f f f f . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (blueCar.vy > 0) {
            blueCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 . . . . 
                . . . . . 6 6 9 9 6 6 6 6 . . . 
                . . . . . c 9 6 6 6 6 6 c . . . 
                . . . . 6 c 9 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 c 9 6 6 6 6 6 c 6 f . 
                . . . f 8 c 6 6 6 6 6 6 c 8 f . 
                . . . f 6 c 6 b b b b 6 c 6 f . 
                . . . 8 6 6 b c c c c b 6 6 8 . 
                . . . 8 8 b c c c c c c b 8 8 . 
                . . . f 8 9 9 9 9 9 9 9 9 8 f . 
                . . . f 8 d 6 6 6 6 6 6 d 8 f . 
                . . . . 6 d d 6 6 6 6 d d 6 f . 
                . . . . f 6 d 6 6 6 6 d 6 f . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                `)
        }
        if (blueCar.vy < 0) {
            blueCar.setImage(img`
                . . . . . . 8 8 c c 8 8 . . . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                . . . . 6 c 6 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 6 9 6 6 6 6 6 c 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 c 6 9 9 6 6 6 c 6 f . 
                . . . 8 6 c 8 c c c c 8 c 6 8 . 
                . . . 8 6 8 c b b b b c 8 6 8 . 
                . . . 8 6 8 b b b b b b 8 6 8 . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . . f 8 d 8 8 8 8 8 8 d 8 f . 
                . . . f 8 6 d 8 8 8 8 d 6 8 f . 
                . . . f f 8 8 8 8 8 8 8 8 f f . 
                . . . . f f . . . . . . f f . . 
                `)
        }
    }
})
game.onUpdate(function () {
    if (level == 2) {
        if (purpleCar.vx < 0) {
            purpleCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 3 3 3 3 3 3 3 . . 
                . . . . . 3 c 3 3 3 3 3 3 d 3 . 
                . . . . 3 c c 3 3 3 3 3 3 d c 3 
                . . d 3 d c c 3 d d d d d d c c 
                . d 3 3 d c b a a a a a a a 3 c 
                . 3 3 3 d b a a b b b a b b a 3 
                . 3 3 3 3 3 a b b b b a b b b a 
                . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
                . 3 d d 3 a f a a a f a a a a a 
                . d d 3 a a a f a a f a a a a a 
                . a a a a a a a f f f a a a a a 
                . a a a a f f f a a a a f f f f 
                . . . a f f f f f a a f f f f f 
                . . . . f f f f . . . . f f f . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (purpleCar.vx > 0) {
            purpleCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 3 3 3 3 3 3 3 3 . . . . 
                . . . 3 d 3 3 3 3 3 3 c 3 . . . 
                . . 3 c d 3 3 3 3 3 3 c c 3 . . 
                . 3 c c d d d d d d 3 c c d 3 d 
                . 3 c 3 a a a a a a a b c d 3 3 
                . 3 3 a b b a b b b a a b d 3 3 
                . 3 a b b b a b b b b a 3 3 3 3 
                . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
                . a a a a a a f a a a f a 3 d d 
                . a a a a a a f a a f a a a 3 d 
                . a a a a a a f f f a a a a a a 
                . a f f f f a a a a f f f a a a 
                . . f f f f f a a f f f f f a . 
                . . . f f f . . . . f f f f . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (purpleCar.vy > 0) {
            purpleCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 3 3 3 3 3 . . . . 
                . . . . . 3 3 d d 3 3 3 3 . . . 
                . . . . . c d 3 3 3 3 3 c . . . 
                . . . . 3 c d 3 3 3 3 3 c 3 . . 
                . . . a 3 c d 3 3 3 3 3 c 3 a . 
                . . . f 3 c d 3 3 3 3 3 c 3 f . 
                . . . f a c 3 3 3 3 3 3 c a f . 
                . . . f 3 c 3 b b b b 3 c 3 f . 
                . . . a 3 3 b c c c c b 3 3 a . 
                . . . a a b c c c c c c b a a . 
                . . . f a d d d d d d d d a f . 
                . . . f a d 3 3 3 3 3 3 d a f . 
                . . . . 3 d d 3 3 3 3 d d 3 f . 
                . . . . f 3 d 3 3 3 3 d 3 f . . 
                . . . . . a 3 3 3 3 3 3 a . . . 
                `)
        }
        if (purpleCar.vy < 0) {
            purpleCar.setImage(img`
                . . . . . . a a c c a a . . . . 
                . . . . . a 3 3 3 3 3 3 a . . . 
                . . . . 3 c 3 3 3 3 3 3 c 3 . . 
                . . . a 3 c d 3 3 3 3 3 c 3 a . 
                . . . f 3 3 d 3 3 3 3 3 c 3 f . 
                . . . f 3 3 d 3 3 3 3 3 3 3 f . 
                . . . f 3 3 d 3 3 3 3 3 3 3 f . 
                . . . f 3 c 3 d d 3 3 3 c 3 f . 
                . . . a 3 c a c c c c a c 3 a . 
                . . . a 3 a c b b b b c a 3 a . 
                . . . a 3 a b b b b b b a 3 a . 
                . . . a a a a a a a a a a a a . 
                . . . f a d a a a a a a d a f . 
                . . . f a 3 d a a a a d 3 a f . 
                . . . f f a a a a a a a a f f . 
                . . . . f f . . . . . . f f . . 
                `)
        }
    }
})
game.onUpdate(function () {
    if (level == 2) {
        if (greenCar.vx < 0) {
            greenCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 3 3 3 3 3 3 3 . . 
                . . . . . 3 c 3 3 3 3 3 3 d 3 . 
                . . . . 3 c c 3 3 3 3 3 3 d c 3 
                . . d 3 d c c 3 d d d d d d c c 
                . d 3 3 d c b 7 7 7 7 7 7 7 3 c 
                . 3 3 3 d b 7 7 b b b 7 b b 7 3 
                . 3 3 3 3 3 7 b b b b 7 b b b 7 
                . 3 3 3 3 7 3 3 3 3 3 7 3 3 3 7 
                . 3 d d 3 7 f 7 7 7 f 7 7 7 7 7 
                . d d 3 7 7 7 f 7 7 f 7 7 7 7 7 
                . 7 7 7 7 7 7 7 f f f 7 7 7 7 7 
                . 7 7 7 7 f f f 7 7 7 7 f f f f 
                . . . 7 f f f f f 7 7 f f f f f 
                . . . . f f f f . . . . f f f . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (greenCar.vx > 0) {
            greenCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 3 3 3 3 3 3 3 3 . . . . 
                . . . 3 d 3 3 3 3 3 3 c 3 . . . 
                . . 3 c d 3 3 3 3 3 3 c c 3 . . 
                . 3 c c d d d d d d 3 c c d 3 d 
                . 3 c 3 7 7 7 7 7 7 7 b c d 3 3 
                . 3 3 7 b b 7 b b b 7 7 b d 3 3 
                . 3 7 b b b 7 b b b b 7 3 3 3 3 
                . 7 7 3 3 3 7 3 3 3 3 3 7 3 3 3 
                . 7 7 7 7 7 7 f 7 7 7 f 7 3 d d 
                . 7 7 7 7 7 7 f 7 7 f 7 7 7 3 d 
                . 7 7 7 7 7 7 f f f 7 7 7 7 7 7 
                . 7 f f f f 7 7 7 7 f f f 7 7 7 
                . . f f f f f 7 7 f f f f f 7 . 
                . . . f f f . . . . f f f f . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (greenCar.vy > 0) {
            greenCar.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 3 3 3 3 3 . . . . 
                . . . . . 3 3 d d 3 3 3 3 . . . 
                . . . . . c d 3 3 3 3 3 c . . . 
                . . . . 3 c d 3 3 3 3 3 c 3 . . 
                . . . 7 3 c d 3 3 3 3 3 c 3 7 . 
                . . . f 3 c d 3 3 3 3 3 c 3 f . 
                . . . f 7 c 3 3 3 3 3 3 c 7 f . 
                . . . f 3 c 3 b b b b 3 c 3 f . 
                . . . 7 3 3 b c c c c b 3 3 7 . 
                . . . 7 7 b c c c c c c b 7 7 . 
                . . . f 7 d d d d d d d d 7 f . 
                . . . f 7 d 3 3 3 3 3 3 d 7 f . 
                . . . . 3 d d 3 3 3 3 d d 3 f . 
                . . . . f 3 d 3 3 3 3 d 3 f . . 
                . . . . . 7 3 3 3 3 3 3 7 . . . 
                `)
        }
        if (greenCar.vy < 0) {
            greenCar.setImage(img`
                . . . . . . 7 7 c c 7 7 . . . . 
                . . . . . 7 3 3 3 3 3 3 7 . . . 
                . . . . 3 c 3 3 3 3 3 3 c 3 . . 
                . . . 7 3 c d 3 3 3 3 3 c 3 7 . 
                . . . f 3 3 d 3 3 3 3 3 c 3 f . 
                . . . f 3 3 d 3 3 3 3 3 3 3 f . 
                . . . f 3 3 d 3 3 3 3 3 3 3 f . 
                . . . f 3 c 3 d d 3 3 3 c 3 f . 
                . . . 7 3 c 7 c c c c 7 c 3 7 . 
                . . . 7 3 7 c b b b b c 7 3 7 . 
                . . . 7 3 7 b b b b b b 7 3 7 . 
                . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . . . f 7 d 7 7 7 7 7 7 d 7 f . 
                . . . f 7 3 d 7 7 7 7 d 3 7 f . 
                . . . f f 7 7 7 7 7 7 7 7 f f . 
                . . . . f f . . . . . . f f . . 
                `)
        }
    }
})
game.onUpdate(function () {
    gameTime = game.runtime()
    if (slow == 1) {
        controller.moveSprite(mySprite, 50, 50)
    } else {
        controller.moveSprite(mySprite, 100, 100)
    }
    if (gameTime > slowTime + 2000) {
        slow = 0
    }
})
