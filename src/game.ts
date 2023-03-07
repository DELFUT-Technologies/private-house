import { Parent } from './resource'
import { Initlink } from './link'
// import { InitWarps } from './warp'

// Create a main house
const house = new Entity()
house.addComponent(new GLTFShape('models/2023.03.06_kamecchi_verse_haji_1235.glb'))
house.addComponent(
  new Transform({
    position: new Vector3(32, 0, 0),
    rotation: Quaternion.Euler(0, 90, 0)
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

// Create a wall
const wall = new Entity()
wall.addComponent(new GLTFShape('models/2022.10.17_1723_haji_outer wall.glb'))
wall.addComponent(
  new Transform({
    position: new Vector3(32, 0, 0),
    rotation: Quaternion.Euler(0, 90, 0)
  })
)
wall.setParent(Parent)
engine.addEntity(wall)

// animation
const WallAnimator = new Animator()
wall.addComponent(WallAnimator)
const illumination = new AnimationState('[保留アクション]', {
  looping: true,
  layer: 0
})
WallAnimator.addClip(illumination)
illumination.play()

Initlink()
// InitWarps()
