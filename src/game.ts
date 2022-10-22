// Create a main house
const house = new Entity()

house.addComponent(new GLTFShape('models/10.10_modify_ryugujo_Open.glb'))
house.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)
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

// entity link url
const link_entity = new Entity()
link_entity.addComponent(new BoxShape())
//entity.addComponent(new GLTFShape("models/Wheel_01.glb"))
const transform = new Transform({ position: new Vector3(9.5, 20.5, 16) })
link_entity.addComponent(transform)
link_entity.addComponent(
  new OnPointerDown(() => {
    openExternalURL('https://docs.decentraland.org')
  })
)
engine.addEntity(link_entity)
