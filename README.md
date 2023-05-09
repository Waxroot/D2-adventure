A simple adventure game by Collette Harrison based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Scene Main, SingFish, Tank, Drawer, End are all adventure scenes
- **2+ scenes *not* based on `AdventureScene`**: Intro and Outside are not adventure scenes
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: this.emphasize(item, num1) is used in order to make objects images grow in size when your mouse hovers over them, and then decrease back to normal size after the mouse is moved
    - Enhancement 2: this.longMessage(message) has similar functionality to showMesage but includes a time call which allows for the message to stay visisble for a longer amount of time

Experience requirements:
- **4+ locations in the game world**: Front Door, Main room, Fish tank, Mounted fish, Outside, Drawer
- **2+ interactive objects in most scenes**: one example is that the fish food within the drawer is able to be picked up and added to your inventory, and another example is that you are able to use it in the fish tank scene to feed the fish
- **Many objects have `pointerover` messages**: One example is that the fish food has a message that displays when your pointer is over it, and another example is the fish in the fishtank having a message aobut it being sluggish
- **Many objects have `pointerdown` effects**: One example is that the fish food is able to be picked up with the pointerdown effect. Another example is that the singing fish will sing when its button is pressed
- **Some objects are themselves animated**: One example is that all interactible objects are animated using this.emphasize which cahnged their scale. Another example is the opacity change that is used to create the singing fishes perspective change.

Asset sources:
-all png images except Ocean.png was created by me using the app procreate
-Ocean.png is a combination of a wooden dock I created in procreate and an edited ocean background that I desaturized from [KnoblePersona](https://opengameart.org/content/ocean-background) on OpenGameArt.com


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.