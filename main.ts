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
function titleScreen () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffff222fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffff222fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffff222fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffff
        ffffffffff555552552fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffff2222ffffffffffffffffffffffffffffffffffffffff
        ffffffff55222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffff2222ffffffffffffffffffffffffffffffffffffffff
        fffffff552222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffff2222ffffffffffffffffffffffffffffffffffffffff
        ffffff55522222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5552ffffffffff2222ffffffff2222fffffffffffffffffffff5222222ffffffffffff
        ffffff5222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff552fffff55522222ffff55522222ffff55522222fffff5555555222fffff55222222ffffffffffff
        fffff522222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555222ffff52222222ff5522222222fff5522222222fff552222222222ff55222222222fffffffffff
        fffff52222fffffffffffffffffffffffffffffffffffffffffff22222fffffffff555522ffff5222222fff522222222ff5222222222fff5222222222fff5222222222222f552222f2222fffffffffff
        fffff5222fffffffffffffff5555fffffffff22222fffff222222222222fffffff5522222ffff5222222fff522252222ff52222f22222ff5222ff22222ff52222ffff2222f52222fff222fffffffffff
        fffff5222fffffffffffff5552222ffffff2222222ff222222222222222ffffff55222222fff52222222fff52222222fff5222ff222222f5222ff22222ff5222ffffff222f52222fff2222ffffffffff
        ffff55222fffffffffff555222222ff22222222222f5222222222222222ffffff52222222fff5222f2222ff5222222ffff5222ff22222225222ff22222ff5222ffffff222f52222fff2222ffffffffff
        ffff5222ffffffffffff522222222f522222222fffff5222222222252222ffff5222ff222fff5222f2222ff52222ffffff5222ff222222252222f222222f55222ffff2222f52222ffff222ffffffffff
        fffff522fffffffffff522222f222f52222222ffffff5222552222f52222ffff5522ff2222ff5222f2222ff55222fff22252222f2222222522222222222ff522222222222f52222ffff2222fffffffff
        fffff522fffffffffff52222f2222ff522222fffffff5222f52222f55222fffff522f222222ff522222222ff5222222222552222222f222552222222222ff55222222222ff52222ffff222ffffffffff
        fffff5222ffffffffff5222f222222f52222ffffffff5522ff5222ff5222fffff5222222222ff522222222ff5222222222f52222222fffff5522552fffffff552222222fffffffffffffffffffffffff
        fffff5222fffffffff522222222222f55222fffffffff522ff5222ff55222ffff5222222222ff522222222fff522222222ff555555fffffff5555ffffffffff555522fffffffffffffffffffffffffff
        fffff52222ffffffff5222222222222f5222fffffffff522fff522fff5222ffff552222f222fff55555222fff555552fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffff522222ff2222f5222222222222f5222fffffffff522fff522fff5522fffff5fffffffffffffff5222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff52222222222f5522222ff2222ff522fffffffff522ffffffffff522fffffffffffffffffffff5222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff55222222222ff55555ff55222ff522ffffffffffffffffffffff522ffffffffffffffffffffff522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff5552222555fffffffffff522ffffffffffffffffffffffffffffffffffffffffffffffffffff522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fff522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222522ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffddddddfffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffff2ffffffffffffffffffffddfdddddddddddddffffffffffff
        ffffffffffffffffffffffffffffffdffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddffdffff222fffffdffffffffffff
        ffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffff2ffffffffdffffffffffff
        ffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff2ffffffffdfffffffffffff
        ffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff2fffffffffffffffffffffffff2ffffffffdfffffffffffff
        fffffffffffffffffffffffbbbbfffdfffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffbfffff
        ffffffffffffffffffffbbbbbbffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffff111ffffffffffffffff11ffffffdffffffbbbbbff
        ffffffffffffffffffffbbbbbbffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffff1fffffffffffffffff11ffffffffdffffffbbbbbff
        ffffffffffffffffffffbbbbbbfffffdfffffffffffffffffffffff11fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffff11ffffffffffdffffffbbbbfff
        ffffffffffffffffffffbbbbbbfffffdffffffffffffffffffffff1fffffffff11fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffffdffffffbbbbfff
        ffffffffffffffffffffbbbbbbfffffdfffffffffffffffffffff11fffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1fffffffffffffdffffffbbbbfff
        ffffffffffffffffffffbbbbbbbffffdffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffff11ffffffffffffffdfffbbbbbbbfff
        ffffffffffffffffffffbbbbbbbbbbbdfffffffffffffffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffff22fff1ffffffffffffffff111fffffffffffffffbbbbbbbbbbbbfff
        ffffffffffffffffffffbbbbbbbbbbbdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffdbbbbbbbbbbfff
        ffffffffffffffffffffbbbbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffff2ffdbbbbbbbbbbfff
        ffffffffffffffffffffbbbbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222bbbbbbbbbbfff
        ffffffffffffffffffffbbbbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffdfffffbbbbbfff
        ffffffffffffffffffffbbbbbbbffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffff2fffffffffffffffffffffddffffbbbbbfff
        fffffffffffffffffffffbbbbbbffffdfffffffffffffffffffffffeeeeeeeeffeeefffffffeeeeeeeeeeeeeeeeeeeeffffffffff222222fff2feeeeeee2eeeeeeeeeefffffffffffffdfffbbbbbbfff
        ffffffffffffffffffffffffbbbffffffffffeeeeeeeeeeeeeeeeeeffffffffeefffeeeeeeefffffffffffffffffffffffffff2fff22ff2ffff2fffff2f2ffffffffffeeeeeeeeeefffdffbbbbbbbfff
        fffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fff2222f22ffff2fffff2ffffffffffffffffffffffeeedfffffffbbfff
        fffffffffffffffffffffffffffffeeff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ff222222fffff2ffffff22fffffffffffffffffffffffddffffffffbfff
        fffffffffffffffffffffffffffeef2f2ff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffff22f22fffff2ffffff2f2ffffffffffffffffffffffffeeffffffffff
        fffffffffffffffffffffffffe222222fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fff2222222ffff2ffffff2f2fffffffffffffffffffffffffeefffffffff
        ffffffffffffffffffffffffee222f22fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fff2f222ff2fff2fffffffff2fff2fffffffffffffffffffffefffffffff
        ffffffffffffffffffffffffef222222fff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffff2222f2ffff22ffffffff22fffff222fff2ffff2fffffffefffffffff
        fffffffffffffffffffffffeff22f22fff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff22f22222fffff2fffffffff2fffff222ffffffffffffffffefffffffff
        fffffffffffffffffffffffeff22222fff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff2ff2f22f2fffff2fff2ffff2fffff222fffffffffffffffffeffffffff
        fffffffffffffffffffffffeff22ff2ffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff22f222fff2ffff2ffffffff22ffffffffffffffffffffffffeffffffff
        fffffffffffffffffffffffeff22fff22fff22fffffffffffffffffffffffffffffffffffffffffffffffddddddddddffff2ffff222ffff2ffff2ffffffffff2fffffffffffffffffffffffeffffffff
        fffffffffffffffffffffffeff22fff2fffff2ffffffffffffffffffffffffffffffdddddddddddddddddfffffdffffdddd2ffffff2ffff2fffff2ffffffffff22ffffffff2ffffffffffffeffffffff
        fffffffffffffffffffffffef2f2ff2ffffffffffffdddddffffffffffffffffffffddffffffffffffffffffffdffffffff2fffff2fffff2fffff2ffddddddddf22ffffffffffffffffffffeffffffff
        fffffffffffffffffffffffe2f22ff2fffffff2fddd11111ddddddffffffffffffffdffffdfffffffdffffffffdffffdfffdffff2ffffff22ffff2dd11111111dd2ffffffffffffffffffffeffffffff
        fffffffffffffffffffffff2fff2ff22fffffddd1111111111111dddffffffffffffdffffdfffffffdffffffffdffffdfffdffff22ffffff2fddd11111111111d1222ffffffffffffffffffeffffffff
        fffffffffffffffffffffffe2ff2fff2ffffdd11d111111d11111111dfffffffffffdffffdffffffffdfffffffdffffdfffdfffff2ffffff2d11111dd1111111d111dffffffffffffffffffeffffffff
        fffffffffffffffffffffffe2ff2fff2ffdd1211d1111111d11111111dffffffffffdffffdffffffffdfffffffdffffdffffdffff2fffffd21111111d1111111d1111dfffffffffffffffffeffffffff
        fffffffffffffffffffffffe2ffffff2ffd11211d1111111d1111dd11dffffffffffdffffdffffffffdfffffffdffffdffffdffff2ffffd111111111d1111112d1111dfffffffffffffffffeffffffff
        fffffffffffffffffffffff2effffff2fd111211d1111111ddddd11dd1dfffffffffdffffdffffffffdfffffffdffffdffffdffff2fffd1111111112d1111111d11ddddffffffffffffffffeffffffff
        ffffffffffffffffffffffffeffffff2d1111211ddddddddd111111111dfffffffffdddddddddddddddddddddddddddddddddfffff2ffd1111111111d111ddddddd111dfffffffff44444ffeffffffff
        ffffffffffffffffffffffffef444fffd1ddd2ddd1111111d111111111dfffffffffdfffffdfffffffdfffffffdffffdffffdfffffffd111111ddddddddd1111d11111dfffffffff44444ffeffffffff
        ffffffffffffffffffffffffe44444ffdd111211d1111111d111111111dfffffffffdfffffdfffffffdfffffffdffffdffffdfffffffddddddd1111d11111111d11111dffffffff444444ffeffffffff
        ffffffffffffffffffffffffee4444ffd1111211d1111111d111111111dffffffffdffffffdfffffffdfffffffdffffdffffdfffffffd1111111111d11111111d11111dffffffff444444ffeffffffff
        fffffffffffffffffffffffffe4444ffd11112111d1111111dddddddddfffffffffdffffffdfffffffdfffffffdffffdffffdffffffd11111111111d11111111d11111dffffffff444444ffeffffffff
        fffffffffffffffffffffffffeffffffd11112211d1ddddddd1111111dfffffffffdffffffdfffffffdfffffffdffffdffffdffffffd11111111111d11111111d111dddfffffffff4444fffeffffffff
        fffffffffffffffffffffffffeffffffd1111d2dddd111111d1111111dfffffffffdffffffdfffffffdfffffffdffffdffffdffffffd11111111111d1112dddddddd1dfffffffffffffffffeffffffff
        fffffffffffffffffffffffffefffffffdddd1211d1111111d111111dffffffffffddddddddddddddddddddddddddddddddddfffffffd1111111dddddddd1111d1211dfffffffffffffffffeffffffff
        ffffffffffffffffffffffffffefffffffd111211d1111111d11111dffffffffffffffffffffffffffffffffffffffffffffffffffffd1dddddd211d11111111d1111dfffffffffffffffffeffffffff
        ffffffffffffffffffffffffffefffffffd111111d1111111d1111dffffffffffffffffffffffffffffffffffffffffffffffffffffffd111111111d11111111d111dffffffffffffffffffeffffffff
        ffffffffffffffffffffffffffeffffffffd11111d1111111dddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffd111111111d11111111d11dfffffffffffffffffffeffffffff
        ffffffffffffffffffffffffffefffffffffdd111d1111111dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd111111d11111111111dfffffff222ffffffffffeffffffff
        fffffffffffffffffffffffffffeffffffffffdddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd1111d11111111dddffffffff222ffffffffffeffffffff
        fffffffffffffffffffffffffffefffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffff2fffffffffffffddd1d1111ddddffffffff2ff222ffffffffffeffffffff
        fffffffffffffffffffffffffffeffffffffff2ffffffffffffff2222f2fffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffddddddffffffffffffffffffffffffffffeffffffff
        fffffffffffffffffffffffffffefffffffffffffff2ffffff22222ff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff
        ffffffffffffffffffffffffffffeffffffffffffff22fffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffefffffffff
        ffffffffffffffffffffffffffffeffffffffffffffff22f222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffff
        ffffffffffffffffffffffffffffefffffffffffffffff2222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffff
        ffffffffffffffffffffffffffffeffffffffffffffffff222222222222f22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff
        ffffffffffffffffffffffffffffeffffffff2ffffffffff222f2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff
        ffffffffffffffffffffffffffffeffffffffffffff2ffffff222222fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff
        ffffffffffffffffffffffffffffeffffffffffffff2fffff22222222ffff2fffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddffffff
        fffffffffffffffffffffffffdffefffffffddddddddd222222222222222d2dddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffdffffff
        fffffffffffffffffffffffffdddddddddddffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffff
        fffffffffffffffffffffffffdfffffffffffffffffffffff2fffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffff
        fffffffffffffffffffffffffdfffffffffffffffff2fffff22fffff2ffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffff
        fffffffffffffffffffffffffdffffffffffffffffffffffff2ffffff2fffffffffffffddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffff
        fffffffffffffffffffffffffdffffffffffffffffffffffff2ffffff2fffffffffffffdffffffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffffffffffddffffff
        fffffffffffffffffffffffffdfffffffffffffffffffffff22ffffff22ffffffffffffdfffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffff
        fffffffffffffffffffffffffdfffffffffffffffff2fffff2ffffffff2ffffffffffffdfffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffff
        fffffffffffffffffffffffffdfffffffff2fffffffffffff22fffffff22ffffffffffddfffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffff
        fffffffffffffffffffffffffdfffffffffffffffff2ffffff2fffffffff2fffffffffdffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffff
        ffffffffffffffffffffffffdfffffffffffffffffffffffff2fffffffff2fffffffffdffffffffffdddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffdffffffff
        ffffffffffffffffffffffffdffffffffffffffffff2ffffff22ffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffff
        ffffffffffffffffffffffffdffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddfffdddffffffffffddddffffffff
        ffffffffffffffffffffffffdfffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddfffffffffffffffdddfffddddddddddffffffffffff
        fffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffddddddddddddfffffffffdddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff1fffffffffffff
        fffffffffffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff1fffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ffffff1fffff1fffffffffffff
        fffffffffffffffffffffffffffff1fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1ff1fffff1fffffffffffff
        fffffffffffffffffffffffffffff1fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1fffffffff1fffffffffffff
        fffffffffffffffffffffffffffff1fffff1ffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1fffffffff1fffffffffffff
        fffffffffffffffffffffffffffff1ffffffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1fffffffff1fffffffffffff
        fffffffffffffffffffffffffffff1ffffffffffffff1ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff1ffff1ffff1ffff1fffffffffffff
        fffffffffffffffffffffffffffff1ffff1ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffff1fffffffffffff
        ffffffffffffffffffffffffffffff1fffffffff1ffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffff11fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffff11fffffffffffff
        `)
    pause(2000)
    game.showLongText("Step on the gas and go for your life!", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(13)
}
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
titleScreen()
level = 0
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
