import { AnimationKeys, SceneKeys, TextureKeys } from '~/consts/index'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.PRELOAD)
  }
  preload() {
    this.load.image(TextureKeys.BACKGROUND, 'assets/house/bg_repeat_340x640.png')
    this.load.image(TextureKeys.MOUSE_HOLE, 'assets/house/object_mousehole.png')
    this.load.image(TextureKeys.WINDOW1, 'assets/house/object_window1.png')
    this.load.image(TextureKeys.WINDOW2, 'assets/house/object_window2.png')
    this.load.image(TextureKeys.BOOKCASE1, 'assets/house/object_bookcase1.png')
    this.load.image(TextureKeys.BOOKCASE2, 'assets/house/object_bookcase2.png')
    this.load.image(TextureKeys.LASER_END, 'assets/house/object_laser_end.png')
    this.load.image(TextureKeys.LASER_MIDDLE, 'assets/house/object_laser.png')
    this.load.image(TextureKeys.COIN, 'assets/house/object_coin.png')

    this.load.atlas(TextureKeys.ROCKET_MOUSE, 'assets/characters/rocket-mouse.png', 'assets/characters/rocket-mouse.json')
  }

  create() {
    this.anims.create({
      key: AnimationKeys.ROCKET_MOUSE_RUN,
      frames: this.anims.generateFrameNames(TextureKeys.ROCKET_MOUSE, {
        start: 1,
        end: 4,
        prefix: 'rocketmouse_run',
        zeroPad: 2,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: AnimationKeys.ROCKET_FLAMES_ON,
      frames: this.anims.generateFrameNames(TextureKeys.ROCKET_MOUSE, {
        start: 1,
        end: 2,
        prefix: 'flame',
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: AnimationKeys.ROCKET_MOUSE_FALL,
      frames: [{
        key: TextureKeys.ROCKET_MOUSE,
        frame: 'rocketmouse_fall01.png'
      }],
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: AnimationKeys.ROCKET_MOUSE_FLY,
      frames: [{
        key: TextureKeys.ROCKET_MOUSE,
        frame: 'rocketmouse_fly01.png'
      }],
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: AnimationKeys.ROCKET_MOUSE_DEAD,
      frames: this.anims.generateFrameNames(TextureKeys.ROCKET_MOUSE, {
        start: 1,
        end: 2,
        prefix: 'rocketmouse_dead',
        zeroPad: 2,
        suffix: '.png'
      }),
      frameRate: 10
    })

    this.scene.start(SceneKeys.GAME)
  }
  update() { }
}
