import { SceneKeys } from '~/consts/index'

export default class GameOver extends Phaser.Scene {
  constructor() {
    super(SceneKeys.GAME_OVER)
  }

  create() {
    const { width, height } = this.scale

    this.add.text(width * 0.5, height * 0.5, 'Press SPACE to Play Again', {
      fontSize: 32,
      color: '#ffffff',
      backgroundColor: '#000000',
      shadow: {
        fill: true,
        blur: 0,
        offsetY: 0
      },
      padding: 15
    }).setOrigin(0.5)

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.stop(SceneKeys.GAME_OVER)
      this.scene.stop(SceneKeys.GAME)
      this.scene.start(SceneKeys.GAME)
    })
  }
}

