import { Parent } from './resource'
import { Initlink } from './link'

// Create a main house
const house = new Entity()

house.addComponent(new GLTFShape('models/2023.02.10_kamecchi_verse_haji_1645.glb'))
house.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)
house.setParent(Parent)
engine.addEntity(house)

// Create a wall
const wall = new Entity()

wall.addComponent(new GLTFShape('models/2022.10.17_1723_haji_outer wall.glb'))
wall.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0)
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
