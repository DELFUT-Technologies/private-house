import { Parent } from './resource'
import { Initlinks } from './link'
import { InitWarps } from './warp'
import { InitScreens } from './Screens'

// Create a main house
const house = new Entity()
house.addComponent(new GLTFShape('models/2023.04.10.kamecchi_verse_haji_1538.glb'))
house.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)
house.setParent(Parent)
engine.addEntity(house)

const houseAnimator = new Animator()
house.addComponent(houseAnimator)
const confettiRain = new AnimationState('[保留アクション]', {
  looping: true,
  layer: 0
})
houseAnimator.addClip(confettiRain)
confettiRain.play()

// Initlinks()
InitWarps()
InitScreens()