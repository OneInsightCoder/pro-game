enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Coins = SpriteKind.create()
}
info.onScore(4, function () {
    the_other_pro_gamer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f a a a a a a a a a a a a f . 
        . f a f f f f f f f f f f a f . 
        . f a f f 2 2 f f 2 2 f f a f . 
        . f a f f f 2 f f 2 f f f a f . 
        . f a f 2 f f f f f f 2 f a f . 
        . f a f 2 f 2 f f 2 f 2 f a f . 
        . f a f 2 f f f f f f 2 f a f . 
        . f a f 2 2 2 2 2 2 2 2 f a f . 
        . f a f f f f f f f f f f a f . 
        . f a f f f f f f f f f f a f . 
        . f a f f f f f f f f f f a f . 
        . f a a a a a a a a a a a a f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    the_other_pro_gamer.follow(mySprite, 400)
    tiles.placeOnRandomTile(the_other_pro_gamer, myTiles.transparency16)
})
info.onScore(10, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "U won good job :3")
})
info.onScore(2, function () {
    Deather_reborn = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
        . f 8 f f f f f f f f f f 8 f . 
        . f 8 f f 1 1 f f 1 1 f f 8 f . 
        . f 8 f f 2 1 f f 1 2 f f 8 f . 
        . f 8 f f f f f f f f f f 8 f . 
        . f 8 f f f f f f f f f f 8 f . 
        . f 8 f f 1 1 1 1 1 1 f f 8 f . 
        . f 8 f f 1 f f f f 1 f f 8 f . 
        . f 8 f f f f f f f f f f 8 f . 
        . f 8 f f f f f f f f f f 8 f . 
        . f 8 f f f f f f f f f f 8 f . 
        . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Deather_reborn.follow(mySprite, 325)
    tiles.placeOnRandomTile(Deather_reborn, myTiles.transparency16)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "your dead :3")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coins, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Coin, sprites.dungeon.floorLight2)
    tiles.placeOnRandomTile(Coin2, sprites.dungeon.floorLight2)
    tiles.placeOnRandomTile(Coin3, sprites.dungeon.floorLight2)
    info.changeScoreBy(1)
})
info.onScore(6, function () {
    Final_boess = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 a a a a a a a a a a 5 f . 
        . f 5 a 2 5 5 2 2 5 5 2 a 5 f . 
        . f 5 a 2 2 5 2 2 5 2 2 a 5 f . 
        . f 5 a 5 2 2 2 2 2 2 5 a 5 f . 
        . f 5 a 5 2 5 2 2 5 2 5 a 5 f . 
        . f 5 a 5 2 2 2 2 2 2 5 a 5 f . 
        . f 5 a 5 5 5 5 5 5 5 5 a 5 f . 
        . f 5 a 2 2 2 2 2 2 2 2 a 5 f . 
        . f 5 a c c c c c c c c a 5 f . 
        . f 5 a a a a a a a a a a 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Final_boess.follow(mySprite, 550)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Deahter, sprites.dungeon.floorLight2)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight1)
    info.changeLifeBy(-1)
})
let Final_boess: Sprite = null
let Deather_reborn: Sprite = null
let the_other_pro_gamer: Sprite = null
let Deahter: Sprite = null
let Coin3: Sprite = null
let Coin2: Sprite = null
let Coin: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 f f 1 f f f 1 f f f 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 f f 1 f f f 1 f f f 1 f . 
    . f 1 f f 1 1 1 1 1 f f f 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 f f f f f f f f f f 1 f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Coin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b 5 5 b . . . . . . 
    . . . b b b 5 5 1 1 b b b . . . 
    . . . b 5 5 5 5 1 1 5 5 b . . . 
    . . . . b d 5 5 5 5 d b . . . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . c 5 d d d d 5 c . . . . 
    . . . . c 5 d c c d 5 c . . . . 
    . . . . c c c . . c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Coins)
Coin2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Coins)
Coin3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......99999999......
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    ......77777777......
    ....................
    ....................
    `, SpriteKind.Coins)
controller.moveSprite(mySprite, 125, 125)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`letvel8 -`)
Deahter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 f f f f f f f f f f 2 f . 
    . f 2 f f f f f f f f f f 2 f . 
    . f 2 f f f f f f 1 f f f 2 f . 
    . f 2 f f f 1 f f f f f f 2 f . 
    . f 2 f f f f f f f f f f 2 f . 
    . f 2 f f 1 1 1 1 1 1 f f 2 f . 
    . f 2 f f 1 f f f f 1 f f 2 f . 
    . f 2 f f f f f f f f f f 2 f . 
    . f 2 f f f f f f f f f f 2 f . 
    . f 2 f f f f f f f f f f 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Deahter.follow(mySprite)
tiles.placeOnRandomTile(Deahter, sprites.dungeon.floorLight2)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight1)
info.setLife(15)
tiles.placeOnRandomTile(Coin, sprites.dungeon.floorLight2)
tiles.placeOnRandomTile(Coin2, sprites.dungeon.floorLight2)
tiles.placeOnRandomTile(Coin3, sprites.dungeon.floorLight2)
