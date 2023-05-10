
var x2 = 8000; //4000
var y2 = 20000; //8000
var muisic = false;
var foodgone = false;
var secret = true;
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Door', 'Door.png');
        this.load.image('Wall', 'DoorScene.png');
    }
    create() {
        this.imageObject = this.add.image(
            900,
            450,
            'Wall',
        )
        this.imageObject.setScale(1.16);

        let door = this.imageObject = this.add.sprite(
            920,
            420,
            'Door',
        )
        this.imageObject.setScale(1.35);
        door.setInteractive()
        let message = this.add.text(1850, 200, 'Click on the door to start', {fontSize: 30, color: '#eea' })
        this.tweens.add({
            targets: message,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * 1000
        });
        door.on('pointerover', () => {
            this.add.tween({
                targets: door,
                scale: {from: 1.35, to: 1.35 + .06},
                duration: 100
            })
            this.tweens.add({
                targets: message,
                alpha: { from: 1, to: 0 },
                easing: 'Quintic.in',
                duration: 4 * 1000})
        })
        door.on('pointerout', () => {
            this.add.tween({
                targets: door,
                scale: {from: 1.35 + .06, to: 1.35},
                duration: 1
                })
        })
        door.on('pointerdown', () => {
            this.scene.start('Main')
        })
    }
}


class Main extends AdventureScene {
    constructor(){
        super('Main', 'Main room')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Background', 'Main.png');
        this.load.image('Trout', 'mountedFish.PNG');
        this.load.image('Drawer', 'Drawer.png');
        this.load.image('Fish', 'Fish.png');
        this.load.image('Bowl', 'fishBowl.png');
        this.load.image('Radio', 'Radio.PNG');
        this.load.image('Dog', 'Dog.png');
        this.load.audio('ruff', 'Ruff.mp3');
        this.load.audio('Music', 'Radiomuisic.mp3');
    }
    onEnter(){
        this.longMessage('Grandmothers old fishing shed. Maybe I should look around')
        this.imageObject = this.add.image(
            905,
            450,
            'Background',
        )
        this.imageObject.setScale(.75);

        //trout
        let trout = this.imageObject = this.add.sprite(
            1160,
            78,
            'Trout',
            
        )
        this.imageObject.setScale(.17);
        this.emphasize(trout,  0.17);
        trout.on('pointerdown', () => {
            this.gotoScene('SingingFish');
            radioMusic.stop();
        })


        //drawer
        let Drawer = this.imageObject = this.add.image(
            810,
            600,
            'Drawer',
        )
        this.imageObject.setScale(.37);
        this.emphasize(Drawer, .37)
        Drawer.on('pointerdown', () => {
            this.gotoScene('DrawerScene');
        })


        //bowl
        let bowl = this.imageObject = this.add.image(
            1155,
            458,
            'Bowl'
        )
        this.imageObject.setScale(.37);
        this.emphasize(bowl, .37);
        bowl.on('pointerdown', () => {
            this.gotoScene('TankScene');
        })

        //fish
        let fish = this.imageObject = this.add.image(
            1140,
            465,
            'Fish',
        )
        this.imageObject.setScale(.25);

        //radio
        let radio = this.imageObject = this.add.image(
            447,
            460,
            'Radio'
        )
        this.imageObject.setScale(.32);
        this.emphasize(radio, .32);
        let radioMusic = this.sound.add('Music');
        radio.on('pointerover', () => {
            if(muisic == false){
                this.showMessage('press to play');
            }else{
                this.showMessage('press to stop');
            }})
        radio.on('pointerdown', () => {
            if (muisic == false){
            radioMusic.loop = true;
            radioMusic.play();
            muisic = true
        }else{
            radioMusic.stop();
            muisic = false

        }

        })

        //dog
        let dog = this.imageObject = this.add.image(
            490,
            695,
            'Dog',
        )
        this.imageObject.setScale(.35);
        this.emphasize(dog, .35)
        dog.on('pointerdown', () => {
            this.sound.add('ruff').play();
            radioMusic.stop();

        })

        let back = this.add.text(30, 730, "↶", {fontSize: 200} )
        back.setInteractive()
        back.on('pointerover', () => {
            this.showMessage("click to go back")
        })
        back.on('pointerdown', () => {
            //change
            this.gotoScene('End');
        })
    }
   
}

class Drawer extends AdventureScene{
    constructor(){
        super('DrawerScene', 'Old Drawer');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('drawerScene', 'DrawerScene.png');
        this.load.image('fishFood', 'fishFood.png')
    }
    onEnter(){
        this.imageObject = this.add.image(
            900,
            450,
            'drawerScene',
        )
        this.imageObject.setScale(.90);
        if(this.hasItem('Fish Food')){
        }else if (foodgone == false){{

        let food = this.imageObject = this.add.image(
            1100,
            400,
            'fishFood',
        )
        this.imageObject.setScale(.4);
        this.emphasize(food, .4)
        food.on('pointerover', () => {
            this.showMessage('look, some old fish food')})
        food.on('pointerdown', () => {
            this.showMessage('maybe I can use it somewhere')
            foodgone = true,
            this.add.tween({
                targets: food,
                alpha: {from:1, to: 0},
                duration: 10,
                onComplete: () => food.destroy(),
            })
            this.gainItem('Fish Food');
        })}}
        let back = this.add.text(30, 730, "↶", {fontSize: 200} )
        back.setInteractive()
        back.on('pointerover', () => {
            this.showMessage("click to go back")
        })
        back.on('pointerdown', () => {
            this.gotoScene('Main');
        })

    }
}

class Tank extends AdventureScene{
    constructor(){
        super('TankScene', 'Fish Tank');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('tankScene', 'fishTank.png');
        this.load.image('Fish', 'Fish.png');
    }
    onEnter(){
        this.imageObject = this.add.image(
            905,
            430,
            'tankScene',
        )
        this.imageObject.setScale(1.02);

        let fish = this.imageObject = this.add.image(
            750,
            460,
            'Fish',
        )
        this.imageObject.setScale(1.3);
        this.tweens.add({
            targets: fish,
            props: {
                x: { value: 1000, duration: x2, flipX: true },
                y: { value: 500, duration: y2,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });
        fish.setInteractive()
        fish.on('pointerover', () => {
            console.log(x2);
            if(this.hasItem('Fish Food')){
                this.showMessage('Maybe I can feed it the food I found')
            }else if(x2==2000){
                this.showMessage('Look at it go')
            
        }else{
                this.showMessage("The fish seems sluggish. Maybe it hasn't been feed in a while")
            }

        })
        fish.on('pointerdown', () =>{
            if(this.hasItem('Fish Food')){
                this.showMessage('Looks like that helped')
                this.loseItem('Fish Food')
                x2 = 2000
                y2 = 6000
                this.tweens.add({
                    targets: fish,
                    props: {
                        x: { value: 1000, duration: x2, flipX: true },
                        y: { value: 500, duration: y2,  },
                    },
                    ease: 'Sine.easeInOut',
                    yoyo: true,
                    repeat: -1,
                });
            }else if(x2==2000){
                this.showMessage("I think it's full for now")
            
        }else{
                this.showMessage("I don't have any food")
            }

        })
        let back = this.add.text(30, 730, "↶", {fontSize: 200} )
        back.setInteractive()
        back.on('pointerover', () => {
            this.showMessage("click to go back")
        })
        back.on('pointerdown', () => {
            this.gotoScene('Main');
        })


    }
}
class SingFish extends AdventureScene{
    constructor(){
        super('SingingFish', 'Mounted fish');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('fishHead', 'FishHead.png');
        this.load.image('singFishScene', 'TalkingFishScene.png');
        this.load.image('button', 'button.png');
        this.load.audio('fishSong', 'fishSong.mp3');
    }
    onEnter(){
        this.imageObject = this.add.image(
            905,
            430,
            'singFishScene',
        )
        this.imageObject.setScale(.77);
        let button = this.imageObject = this.add.image(
            1300,
            600,
            'button',
        )
        this.imageObject.setScale(1.1);
        this.emphasize(button, 1.1);
        button.setInteractive()
        button.on('pointerover', () => {
            if(secret == true){
                this.showMessage('I Wonder what this button does')
            }else{
                this.showMessage("Looks like it's one of those singing fish")
            }
            
        })


        button.on('pointerdown', () => {
            let head = this.imageObject = this.add.sprite(
                630,
                475,
                'fishHead',
                
                
            )
            this.imageObject.setScale(.9);
            head.alpha = 0,
            this.time.delayedCall(1, () => this.sound.add('fishSong').play())
            this.time.delayedCall(6580, () => this.add.tween({
                targets: head,
                alpha: {from:0, to: 1},
                duration: 10,
            }))
            this.time.delayedCall(9000, () => this.add.tween({
                targets: head,
                alpha: {from:1, to: 0},
                duration: 10,
            }));
            this.time.delayedCall(9900, () => this.add.tween({
                targets: head,
                alpha: {from:0, to: 1},
                duration: 10,
            }))
            this.time.delayedCall(14000, () => this.add.tween({
                targets: head,
                alpha: {from:1, to: 0},
                duration: 10,
            }))
            this.time.delayedCall(16500, () => this.add.tween({
                targets: head,
                alpha: {from:0, to: 1},
                duration: 10,
            }))
            this.time.delayedCall(18000, () => this.add.tween({
                targets: head,
                alpha: {from:1, to: 0},
                duration: 10,
            }))
            secret = false;
        })

        let back = this.add.text(30, 730, "↶", {fontSize: 200} )
        back.setInteractive()
        back.on('pointerover', () => {
            this.showMessage("click to go back")
        })
        back.on('pointerdown', () => {
            this.gotoScene('Main');
        })


    }
}
class End extends AdventureScene{
    constructor(){
        super('End', 'Front door');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Door', 'Door.png');
        this.load.image('Wall', 'DoorScene.png');
    }
    onEnter(){
        this.imageObject = this.add.image(
            900,
            450,
            'Wall',
        )
        this.imageObject.setScale(1.16);

        let door = this.imageObject = this.add.sprite(
            920,
            420,
            'Door',
        )
        this.imageObject.setScale(1.35);
        door.setInteractive()
        this.emphasize(door, 1.35)

        door.on('pointerover', () => {
            this.showMessage("are you sure you want to leave?")
        })
        door.on('pointerdown', () => {
            this.gotoScene('outside');
        })
    }

}
class Outside extends Phaser.Scene {
    constructor() {
        super('outside')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('Ocean', 'Ocean.png');
    }
    create(){
        this.imageObject = this.add.image(
            1200,
            450,
            'Ocean',
        )
        this.imageObject.setScale(1.1);
        let message = this.add.text(750, 400, 'The End', {fontSize: 200, color: 'white', alpha: 0 })
        this.add.tween({
            targets: message,
            alpha: {from:1, to: 0},
            duration: 1,})
        this.time.delayedCall(1000, () => 
        this.add.tween({
            targets: message,
            alpha: {from:0, to: 1},
            duration: 1000,
        }));
        this.time.delayedCall(2500, () => 
        this.add.tween({
            targets: message,
            alpha: {from:1, to: 0},
            duration: 1000,
        }));

       


    }
}



const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 2400,
        height: 900
    },
    scene: [ Intro, Main, SingFish, Tank, Drawer, End, Outside],
    title: "Adventure Game",
});