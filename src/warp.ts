import { movePlayerTo } from '@decentraland/RestrictedActions'
// import * as utils from '@dcl/ecs-scene-utils'
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
    shape.isPointerBlocker = false
    this.addComponent(shape)

    this.addComponent(new Material())
    this.getComponent(Material).albedoColor = Color3.Blue()

    this.addComponent(
      new OnPointerDown(
        () => {
          void movePlayerTo(moveTo)
        },
        { hoverText: 'warp to ' + toLoc }
      )
    )
  }
}

class Warp extends Entity {
  constructor(transform: Transform, buttonRot: Quaternion) {
    super()

    engine.addEntity(this)
    this.setParent(Parent)
    this.addComponent(transform)

    // F1 Button
    new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.15, 1),
        scale: new Vector3(0.2, 0.2, 1),
        rotation: buttonRot
      }),
      F1WarpLoc,
      'First Floor'
    )

    // F2 Button
    new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.42, 1),
        scale: new Vector3(0.2, 0.2, 1),
        rotation: buttonRot
      }),
      F2WarpLoc,
      'Second Floor'
    )

    // F3 Button
    new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.69, 1),
        scale: new Vector3(0.2, 0.2, 1),
        rotation: buttonRot
      }),
      F3WarpLoc,
      'Third Floor'
    )

    // F4 Button
    new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 0.96, 1),
        scale: new Vector3(0.2, 0.2, 1),
        rotation: buttonRot
      }),
      F4WarpLoc,
      'Fourth Floor'
    )

    // FR Button
    new WarpButton(
      this,
      new Transform({
        position: new Vector3(1, 1.23, 1),
        scale: new Vector3(0.2, 0.2, 1),
        rotation: buttonRot
      }),
      FRWarpLoc,
      'Roof'
    )
  }
}

// F1 Warp
new Warp(
  new Transform({
    position: new Vector3(11.1, 0.5, 3.805)
  }),
  Quaternion.Euler(0, 90, 0)
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
