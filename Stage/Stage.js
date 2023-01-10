/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("背景1", "./Stage/costumes/背景1.svg", { x: 240, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars._ = 0;
  }
}
