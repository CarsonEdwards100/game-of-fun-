controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.magicWand.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bullet`, mySprite, 100, 0)
    projectile.follow(myEnemy)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    myEnemy.destroy()
    myEnemy = sprites.create(assets.image`ghost2`, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 25)
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.purpleOuterSouth1)
    projectile.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`level3`)
    pause(5000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`pathway2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`pathway2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Cute Ducky`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`pathway2`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 5))
myEnemy = sprites.create(assets.image`ghost2`, SpriteKind.Enemy)
myEnemy.follow(mySprite, 25)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.purpleOuterSouth1)
