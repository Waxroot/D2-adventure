let x = true;
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(700,300, "Click to start", {fontSize: 65, fontStyle: 'italic'});
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Main'));
        });
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
        this.load.image('Dog', 'Dog.png');
        this.load.image('Drawer', 'Drawer.png');
        this.load.image('Fish', 'Fish.png');
        this.load.image('Bowl', 'fishBowl.png');
        this.load.image('Radio', 'Radio.PNG');
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

        //dog
        let dog = this.imageObject = this.add.image(
            490,
            695,
            'Dog',
        )
        this.imageObject.setScale(.35);
        this.emphasize(dog, .35)

        //drawer
        let Drawer = this.imageObject = this.add.image(
            810,
            600,
            'Drawer',
        )
        this.imageObject.setScale(.37);
        this.emphasize(Drawer, .37)

        //bowl
        let bowl = this.imageObject = this.add.image(
            1155,
            458,
            'Bowl'
        )
        this.imageObject.setScale(.37);
        this.emphasize(bowl, .37);

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


        
    }
   
}
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 2400,
        height: 900
    },
    scene: [Main, Intro],
    title: "Adventure Game",
});