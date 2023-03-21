import { movePlayerTo } from '@decentraland/RestrictedActions'
import { Parent } from './resource'

const F1WarpLoc = new Vector3(17.92, 1.1, 4.69)
const F2WarpLoc = new Vector3(27.09, 7.23, 4.19)
const F3WarpLoc = new Vector3(16.8, 11.78, 9.63)
const F4WarpLoc = new Vector3(27.22, 14.26, 9.89)
const FRWarpLoc = new Vector3(26.8, 21.72, 8.82)

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
      position: new Vector3(10.22, 0.93, 17.91)
    }),
    Quaternion.Euler(0, 12, 0)
  )

  // F2 Warp
  new Warp(
    new Transform({
      position: new Vector3(11.54, 7.22, 26.82)
    }),
    Quaternion.Euler(0, 70, 0)
  )

  // F3 Warp
  new Warp(
    new Transform({
      position: new Vector3(4.42, 11.33, 16.43)
    }),
    Quaternion.Euler(0, 140, 0)
  )

  // F4 Warp
  new Warp(
    new Transform({
      position: new Vector3(4.12, 14.25, 26.69)
    }),
    Quaternion.Euler(0, 120, 0)
  )

  // FR Warp
  new Warp(
    new Transform({
      position: new Vector3(5.27, 21.71, 25.7)
    }),
    Quaternion.Euler(0, 108, 0)
  )
}
