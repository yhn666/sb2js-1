/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("造型1", "./_1/costumes/造型1.svg", { x: 44, y: 44 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars._ == 1) {
      this.stage.vars._ = 0;
      while (true) {
        this.direction -= 15;
        yield* this.wait(1);
        yield;
      }
    } else {
      this.stage.vars._ = 1;
      while (true) {
        this.direction += 15;
        yield* this.wait(1);
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars._ = 0;
  }
}
