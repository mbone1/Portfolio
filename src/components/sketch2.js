import PictureFrame from "../assets/pictureframe2.obj";


export default function sketch2(p) {
    // const [count, setCount] = useState(0)
    let pic;
    let texture
    p.preload = function () {
        pic = p.loadModel(PictureFrame);

    };
  p.setup = function () {
    p.createCanvas(500, 500, p.WEBGL);
  };
  p.draw = function () {
      p.background(200);
      p.normalMaterial()
      p.rotateX(p.frameCount * 0.00);
      p.rotateY(p.frameCount * 0.03);
      p.scale(50)
      p.model(pic)
      
    // p.rotateY(p.millis() / 8000);
    // p.ambientLight(90, 70, 90);
    // let dirX = (p.mouseX / p.width - 0.5) * 2;
    // let dirY = (p.mouseY / p.height - 0.5) * 2;
    // p.directionalLight(400, 400, 250, -dirX, -dirY, -1);
    //   p.shininess(10);
    //   p.scale(29)
  };
}
