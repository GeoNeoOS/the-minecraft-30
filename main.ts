blocks.onBlockPlaced(GRASS, function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
events.onEndOfDay(function () {
    player.say("Night!")
})
player.onChat("De end of the world", function (httpsturbowarporg576638460editor) {
    mobs.kill(
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("give me night minecraft", function () {
    gameplay.timeSet(gameplay.time(NIGHT))
})
player.onChat("give me day minecraft", function () {
    gameplay.timeSet(gameplay.time(DAY))
})
builder.paste()
