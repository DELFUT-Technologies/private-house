import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as utils from '@dcl/ecs-scene-utils'
import { Parent } from './resource'

const F1WarpLoc = new Vector3(11.31, 0.88, 4.33)
const F2WarpLoc = new Vector3(11.31, 0.88, 4.33)
const F3WarpLoc = new Vector3(11.31, 0.88, 4.33)
const F4WarpLoc = new Vector3(11.31, 0.88, 4.33)
const FRWarpLoc = new Vector3(11.31, 0.88, 4.33)

class WarpButton extends Entity {
  constructor(parent: Warp, position: Transform, moveTo: Vector3, toLoc: string) {
    super()

    this.setParent(parent)
    this.addComponent(position)

    const shape = new PlaneShape()
    //shape.isPointerBlocker = false
    this.addComponent(shape)

    this.addComponent(new Material())
    this.getComponent(Material).albedoColor = Color3.Blue()

    this.addComponent(new OnPointerDown(() =>
      { void movePlayerTo(moveTo)},
      { hoverText: 'warp to ' + toLoc}
    ))
  }
}

class Warp extends Entity {
  constructor(transform: Transform) {
    super()

    engine.addEntity(this)
    this.setParent(Parent)
    this.addComponent(transform)

    const F1 = new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.1, 1),
        scale: new Vector3(0.2, 0.2, 1)
      }),
      F1WarpLoc,
      'First Floor'
    )

    const F2 = new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.4, 1),
        scale: new Vector3(0.2, 0.2, 1)
      }),
      F2WarpLoc,
      'Second Floor'
    )

    const F3 = new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.7, 1),
        scale: new Vector3(0.2, 0.2, 1)
      }),
      F3WarpLoc,
      'Third Floor'
    )

    const F4 = new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 1, 1),
        scale: new Vector3(0.2, 0.2, 1)
      }),
      F4WarpLoc,
      'Fourth Floor'
    )

    const FR = new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 1.3, 1),
        scale: new Vector3(0.2, 0.2, 1)
      }),
      FRWarpLoc,
      'Roof'
    )
  }
}

const F1Warp = new Warp(
  new Transform({
    position: new Vector3(11, 0.5, 5.5),
    rotation: Quaternion.Euler(0, 90, 0)
  })
)

/*const respawner = new Entity()
respawner.addComponent(new BoxShape())
respawner.addComponent(new Transform({ position: new Vector3(11, 1, 24.6) }))
respawner.addComponent(
  new OnPointerDown(
    () => {
      void movePlayerTo({ x: 10, y: 25, z: 10 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: 'Move player' }
  )
)

engine.addEntity(respawner)

const respawner2 = new Entity()
respawner2.addComponent(new BoxShape())
respawner2.getComponent(BoxShape).withCollisions = false
respawner2.getComponent(BoxShape).visible = false
respawner2.addComponent(new Transform({ position: new Vector3(10, 22, 12) }))
respawner2.addComponent(
  new utils.TriggerComponent(new utils.TriggerBoxShape, {
    onCameraEnter: () => {
      void movePlayerTo({ x: 2, y: 1, z: 1 }, { x: 8, y: 1, z: 8 })
    }
  })
)
engine.addEntity(respawner2)*/
