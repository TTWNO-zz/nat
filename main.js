window.onload = function(){

    width = window.innerWidth;
    height = window.innerHeight;

    var text;
    var cont = 0;

    console.log("Ready for action!");
    document.getElementById('main').innerHTML = "Ready for action!";
    var game = new Phaser.Game(width, height, Phaser.CANVAS, '', {preload: preload, create: create, update: update});


    function preload() {
        console.log("Preload...");
    }

    function create() {
        console.log("Create enviroment...");

        centerX = game.world.centerX;
        centerY = game.world.centerY;
        style = {font: "65px Arial", fill: "#ff0044", align: "center"};

        text = game.add.text(centerX, centerY, "0 times!", style);
        text.anchor.setTo(0.5, 0.5);
    }

    function update() {
        game.input.onDown.addOnce(updateText, this);
    }

    function updateText(){
        cont++;
        console.log(cont);
        text.setText(cont+" time");
    }
};
