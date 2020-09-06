import { Scene } from 'phaser'
import { AnimationKeys, SceneKeys, TextureKeys } from '~/consts/index'

enum MouseState {
  Running,
  Killed,
  Dead
}

export default class RocketMouse extends Phaser.GameObjects.Container {
  private flames: Phaser.GameObjects.Sprite
  private mouse: Phaser.GameObjects.Sprite
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys
  private mouseState = MouseState.Running

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y)


    this.mouse = scene.add.sprite(0, 0, TextureKeys.ROCKET_MOUSE, 'rocketmouse_fly01.png')
      .setOrigin(0.5, 1)
    this.mouse.anims.play(AnimationKeys.ROCKET_MOUSE_RUN)

    scene.physics.add.existing(this)

    const body = this.body as Phaser.Physics.Arcade.Body
    body.setSize(this.mouse.width * 0.5, this.mouse.height * 0.7)
    body.setCollideWorldBounds(true)
    body.setOffset(this.mouse.width * -0.3, -this.mouse.height + 15)
    body.setVelocityX(200)

    this.flames = scene.add.sprite(-63, -15, TextureKeys.ROCKET_MOUSE)
      .play(AnimationKeys.ROCKET_FLAMES_ON)


    this.add(this.flames)
    this.add(this.mouse)

    this.cursors = scene.input.keyboard.createCursorKeys()
  }

  preUpdate() {
    const body = this.body as Phaser.Physics.Arcade.Body
    switch (this.mouseState) {
      case MouseState.Running:
        {
          if (this.cursors.space?.isDown) {
            body.setAccelerationY(-600)
            this.enableJetpack(true)
            this.mouse.play(AnimationKeys.ROCKET_MOUSE_FLY, true)
          } else {
            body.setAccelerationY(0)
            this.enableJetpack(false)
          }

          // 接触地面
          if (body.blocked.down) {
            this.mouse.play(AnimationKeys.ROCKET_MOUSE_RUN, true)
          } else if (body.velocity.y > 0) {
            // 下降时
            this.mouse.play(AnimationKeys.ROCKET_MOUSE_FALL, true)
          }
          break;
        }
      case MouseState.Killed:
        {
          body.velocity.x *= 0.99
          if (body.velocity.x <= 5) {
            this.mouseState = MouseState.Dead
          }
          break;
        }
      case MouseState.Dead:
        {
          body.setVelocity(0, 0)
          this.emit('dead')
          break;
        }
    }

  }

  enableJetpack(enabled: boolean) {
    this.flames.setVisible(enabled)
  }

  kill() {
    if (this.mouseState !== MouseState.Running) return
    this.mouseState = MouseState.Killed
    this.mouse.play(AnimationKeys.ROCKET_MOUSE_DEAD)
    const body = this.body as Phaser.Physics.Arcade.Body
    body.setAccelerationY(0)
    body.setVelocity(1000, 0)
    this.enableJetpack(false)
  }
}
