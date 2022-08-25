// Create a main house
const house = new Entity()

house.addComponent(new GLTFShape('models/modify_ryugujo_Open0824.glb'))
house.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)
engine.addEntity(house)

// Create a wall
const wall = new Entity()

wall.addComponent(new GLTFShape('models/外壁3_small0823.glb'))
wall.addComponent(
  new Transform({
    position: new Vector3(-3, 0, -2),
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
