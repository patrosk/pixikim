// const app = new PIXI.Application({
//     width: 350,
//     height: 600,
//     backgroundColor: 0xFFFCF2,
// });

// document.body.appendChild(app.view);

// const h1Style = new PIXI.TextStyle({
//     fontSize: 36,
//     fontFamily: 'Comfortaa',
//     fill: 0xff8642,
// });
// const h1 = new PIXI.Text('Rim med Kim', h1Style);


// const kim = PIXI.Sprite.from("./images/kim1.svg");
// kim.anchor.set(0.5);
// kim.height = 210;
// kim.width = 170;
// kim.x = app.view.width / 2;
// kim.y = app.view.height / 1.4;

// const startButton = PIXI.Sprite.from("./images/startButton.svg");
// startButton.anchor.set(0.5);
// startButton.height = 50;
// startButton.width = 100;
// startButton.x = app.view.width / 2;
// startButton.y = app.view.height / 5;

var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();
PIXI.loader
    .add("spritesheet", "./images/sprite_sheet.png")
    .load(setup);

var sprite;
function setup() {
    stage.interactive = true;

    var rect = new PIXI.Rectangle(0, 0, 597, 708);
    var texture = PIXI.loader.resources['spritesheet'].texture;
    texture.frame = rect;

    sprite = new PIXI.Sprite(texture);

    stage.addChild(sprite);
    renderer.render(stage);
    animationLoop();
}

// app.stage.addChild(startButton);
// app.stage.addChild(h1);
// app.stage.addChild(kim);