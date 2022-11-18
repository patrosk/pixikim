const app = new PIXI.Application({
    width: 350,
    height: 600,
    backgroundColor: 0xFFFCF2,
});

document.body.appendChild(app.view);

const h1Style = new PIXI.TextStyle({
    fontSize: 36,
    fontFamily: 'Comfortaa',
    fill: 0xff8642,
});
const h1 = new PIXI.Text('Rim med Kim', h1Style);


const kim = PIXI.Sprite.from("./images/kim1.svg");
kim.anchor.set(0.5);
kim.height = 210;
kim.width = 140;
kim.x = app.view.width / 2;
kim.y = app.view.height / 1.4;

const startButton = PIXI.Sprite.from("./images/startButton.svg");
startButton.anchor.set(0.5);
startButton.height = 50;
startButton.width = 100;
startButton.x = app.view.width / 2;
startButton.y = app.view.height / 5;

app.stage.addChild(startButton);
app.stage.addChild(h1);
app.stage.addChild(kim);