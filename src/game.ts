import { Parent } from './resource'
// import { Initlinks } from './link'
import { InitWarps } from './warp'
import { InitScreens } from './screen'

// Create a main house
const house = new Entity()
house.addComponent(new GLTFShape('models/2023.04.14.kamecchi_verse_haji_0034_2.glb'))
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


const kamech = new Entity()
kamech.addComponent(new GLTFShape('models/bar_kamecchi.glb'))
kamech.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    // position: new Vector3(15.48,11.54,7.85),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)
kamech.setParent(Parent)
engine.addEntity(kamech)

// Initlinks()
InitWarps()
InitScreens()
