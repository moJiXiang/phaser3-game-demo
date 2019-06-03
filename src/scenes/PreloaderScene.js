import Phaser from "phaser";
import logoImg from "../assets/logo.png";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.image("logo", logoImg);
  }

  create() {
    this.game.start("Game");
  }
}
