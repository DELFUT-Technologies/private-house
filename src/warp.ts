import { movePlayerTo } from '@decentraland/RestrictedActions'
import { Parent } from './resource'

const F1WarpLoc = new Vector3(11.31, 0.88, 4.33)
const F2WarpLoc = new Vector3(3.83, 7.0, 26.6)
const F3WarpLoc = new Vector3(11.96, 11.54, 16.75)
const F4WarpLoc = new Vector3(6.06, 14.05, 27.33)
const FRWarpLoc = new Vector3(7.26, 21.46, 26.79)

class WarpButton extends Entity {
  constructor(parent: Warp, position: Transform, moveTo: Vector3, toLoc: string) {
    super()

    this.setParent(parent)
    this.addComponent(position)

    const shape = new PlaneShape()
    // comment shape.isPointerBlocker for debug
    shape.isPointerBlocker = false
    this.addComponent(shape)

    // uncomment 2 lines below for debug
    // this.addComponent(new Material())
    // this.getComponent(Material).albedoColor = Color3.Blue()

    this.addComponent(
      new OnPointerDown(
        () => {
          void movePlayerTo(moveTo)
        },
        { hoverText: toLoc + 'にワープ' }
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
      'かめっち歴史館'
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
      'かめっちTVスラジオ'
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
      'かめっちバー'
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
      '会議室'
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
      'ＤJブース'
    )
  }
}

export function InitWarps() {
  // F1 Warp
  new Warp(
    new Transform({
      position: new Vector3(11.1, 0.5, 3.78)
    }),
    Quaternion.Euler(0, 90, 0)
  )

  // F2 Warp
  new Warp(
    new Transform({
      position: new Vector3(1.91, 6.62, 25.65)
    }),
    Quaternion.Euler(0, 120, 0)
  )

  // F3 Warp
  new Warp(
    new Transform({
      position: new Vector3(11.42, 11.18, 17.04)
    }),
    Quaternion.Euler(0, 30, 0)
  )

  // F4 Warp
  new Warp(
    new Transform({
      position: new Vector3(4.06, 13.65, 26.85)
    }),
    Quaternion.Euler(0, 140, 0)
  )

  // FR Warp
  new Warp(
    new Transform({
      position: new Vector3(5.2, 21.12, 25.83)
    }),
    Quaternion.Euler(0, 118, 0)
  )
}