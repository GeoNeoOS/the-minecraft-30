def on_block_placed_grass():
    mobs.spawn(CHICKEN, pos(0, 0, 0))
blocks.on_block_placed(GRASS, on_block_placed_grass)

def on_end_of_day():
    player.say("Night!")
events.on_end_of_day(on_end_of_day)

def on_on_chat():
    gameplay.time_set(gameplay.time(DAY))
player.on_chat("run", on_on_chat)

mobs.spawn(HAPPY_GHAST, pos(0, 0, 0))