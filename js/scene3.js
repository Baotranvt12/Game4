/** @type {Phaser.Physics.Arcade.StaticGroup} */
// var music;
var sound;
var sound_off;
// var player;
// var ball1;
// var bg2;
var tool;

var loop = 0;
var animal = [];
class scene3 extends Phaser.Scene{
	constructor(){
		super('nextGame');
	}

	preload(){

        this.load.image('bgg','assets/bgg.png');
		this.load.image('bg7','assets/bg7.png');
		
	//	this.load.image('beecute','assets/beecute.png', 35, 35);
		// this.load.image('gun','assets/cross-bow.png');
		// this.load.image('bullet', 'assets/ball.png');
     //   this.load.audio('bgmusic', 'assets/game.mp3');
		//this.load.audio('pop', 'assets/pop.mp3');
		this.load.image('a1','assets/a1.png');
		this.load.image('a2','assets/a2.png');
		this.load.image('a3','assets/a3.png');
		this.load.image('a4','assets/a4.png');
		this.load.image('a5','assets/a5.png');
		this.load.image('a6','assets/a6.png');
		this.load.image('machine', 'assets/machine.png');

		this.load.image('pause', 'assets/pause.png');
		// this.load.image('resume', 'assets/resume.png');
		this.load.image('sound', 'assets/sound.png');
        this.load.image('sound-off', 'assets/sound-off.png')

		// for (var i = 0; i < 26; i++) {
		// 	this.load.image('ball-' + keys[i],'assets/ball' + keys[i] + '.png');
		// }
		
	}

	create(){
	//	this.add.image(600, 350, "bg7");
       this.add.image(600, 350, "bgg");


		var pause = this.add.sprite( 1000, 50, 'pause').setInteractive().on('pointerdown', () => {this.scene.start('playGame');
	});

		this.add.image(700, 300, "machine");
		tool = this.add.sprite(700, 100, "tool");


		for (var i = 0; i <= animal.length; i++) {
			animal[i] = words[index];
			animal.push(this.add.image(700, 500, animal[i])); 
			animal[i].visible = false;

			index += 1;
		}
		// teddy1 = this.add.sprite(700, 500, "frog");
		// teddy1.visible = false;

		

		

		// for(int i =0; i = length())
   		// 		animal.push(thêm hình ‘animal-words[index]’)
   		// 			animal[i].visible = false
		// if (index > 5)
		// 	this.scene.start('gameOver')
		// else
		// 	this.scene.start('playGame')
		
		// var t1 = this.add.sprite(230, 190, 'teddy1').setInteractive(); 
		// var t2 = this.add.sprite(280, 190, 'teddy2').setInteractive(); 
		// var t3 = this.add.sprite(330, 190, 'teddy3').setInteractive(); 
		// var t4 = this.add.sprite(330, 190, 'teddy4').setInteractive(); 
		// var t5 = this.add.sprite(330, 190, 'teddy5').setInteractive(); 
		// var pause = this.add.sprite(1020,50, 'pause').setInteractive();
		// // var resume = this.add.sprite(1130,50, 'resume').setInteractive();
		// resume.visible = false;
        // gun = this.add.image(600, 600, 'gun').setDepth(1000);


		// pause.on('pointerdown', function(){
		// 	this.scene.pause();
		// 	resume.visible = true;

		// }, this);
		
		// resume.on('pointerdown', function(){
		// 	//game.scene.pause(scene2);
		// 	//this.balloons.body.moves = false;
		// 	this.scene.resume();
		// }, this);

		// music = this.sound.add('bgmusic');
		// music.setLoop(true);
		// music.play();

		// sound = this.add.sprite(900, 50, 'sound').setInteractive();
        // sound_off = this.add.sprite(900, 50, 'sound-off').setInteractive();
        // sound_off.visible = false

        // sound.on('pointerdown', function() {soundOff(sound, sound_off, music, this) }, this);
        // sound_off.on('pointerdown', function() {soundOn(sound, sound_off, music, this) }, this);
		
		// this.popSound = this.sound.add('pop');
		
		// this.score = 0;
		// this.scoreText = this.add.text(340,80, this.score, {fontFamily:'Arial Black', fontSize:74, color:'#c51b7d'});
		// this.scoreText.setStroke('#de77ae', 5);
		// this.scoreText.setShadow(2, 2, '#333333', 2, true, false);

		// this.life = 3;
		// this.lifeText = this.add.text(50,300, this.life, {fontFamily:'Arial Black', fontSize:74, color:'#c51b7d'});
		// this.lifeText.setStroke('#de77ae', 5);
		// this.lifeText.setShadow(2, 2, '#333333', 2, true, false);

        // // 120 seconds
		// this.initialTime = 220;

		// var text = this.add.text(20, 32, formatTime(this.initialTime), { font: '80px Arial Black',  color: '#ff0000' });

		// // Each 1000 ms call onEvent
		// var timedEvent = this.time.addEvent({ delay: 10, callback: onEvent, callbackScope: this, loop: true });

		// function formatTime(seconds){
		// 	// Minutes
		// 	var minutes = Math.floor(seconds/60);
		// 	// Seconds
		// 	var partInSeconds = seconds%60;
		// 	// Adds left zeros to seconds
		// 	partInSeconds = partInSeconds.toString().padStart(2,'0');
		// 	// Returns formated time
		// 	return `${minutes}:${partInSeconds}`;
		// }		
		
		// function onEvent ()
		// {
		// 	if (this.initialTime > 0) {
		// 		this.initialTime -= 1; // One second
		// 		text.setText(formatTime(this.initialTime));
		// 	}
		// 	else {
		// 		if (index > 5)
		// 			this.scene.start('gameOver')
		// 		else
		// 			this.scene.start('playGame')
		// 	}
		// }	
		
		// pause.on('pointerdown', function () {			
		// 	timedEvent.paused = !timedEvent.paused;
		// });
		// this.input.on('pointerup', function (pointer) {console.log(pointer.x, pointer.y)})
	}

	update(){
		tool.y += 2;
		if (tool.y > 350 && loop == 0)
		{
			tool.y = 350;
			if (wrong == false) {
				teddy1.visible = true;
			}
		}
	}
}