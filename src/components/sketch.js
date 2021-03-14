import Earth from "../assets/earth.jpg";

export default function sketch(p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };
  let earthTexture;
  p.preload = function () {
    earthTexture = p.loadImage(Earth);
  };
  p.draw = function () {
    p.background(3);
    p.rotateY(p.millis() / 8000);
    p.ambientLight(90, 70, 90);
    let dirX = (p.mouseX / p.width - 0.5) * 2;
    let dirY = (p.mouseY / p.height - 0.5) * 2;
    p.directionalLight(400, 400, 250, -dirX, -dirY, -1);
    p.shininess(10);
    p.texture(earthTexture);
    p.sphere(p.windowHeight/3.5, 30, 25);
    p.push();
};
}

