import { Parent } from "./resource"
// entity link url
const button_shape = new PlaneShape()
button_shape.isPointerBlocker = false
button_shape.withCollisions = false

const link_entity2 = new Entity()
link_entity2.addComponent(button_shape)
//entity.addComponent(new GLTFShape("models/Wheel_01.glb"))
const transform2 = new Transform({
  position: new Vector3(0, 1, 0),
  scale: new Vector3(1, 1, 1),
  rotation: Quaternion.Euler(0, 30, 0)
})
link_entity2.addComponent(transform2)
link_entity2.addComponent(
  new OnPointerDown(() => {
    openExternalURL('https://docs.decentraland.org')
  })
)
// color
const color = new Material()
color.albedoColor = new Color4(0, 0, 0, 0)
link_entity2.addComponent(color)
//engine.addEntity(link_entity2)

export class links extends Entity {
  constructor(transform: Transform) {
    super()

    this.setParent(Parent)
    this.addComponent(transform)
    const button_shape = new PlaneShape()
    button_shape.isPointerBlocker = false
    button_shape.withCollisions = false
    //button_shape.visible = false

    const link_entity = new Entity()
    link_entity.addComponent(button_shape)
    link_entity.addComponent(
      new OnPointerDown(() => {
        openExternalURL('https://docs.decentraland.org')
      })
    )
    const color = new Material()
    color.albedoColor = new Color4(0, 0, 0, 0)
    link_entity.addComponent(color)
    link_entity.setParent(this)
  }
}

export function Initlink() {
  //floor_2
  new links(
    new Transform({
      position: new Vector3(11.2, 4.7, 18.5),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 30, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(9.8, 4.7, 18.7),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(6.7, 4.7, 18.7),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(11.8, 4.7, 17.4),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    })
  )
  // kk
  new links(
    new Transform({
      position: new Vector3(1.5, 4.7, 17.9),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(1.5, 4.7, 16.2),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    })
  )
  //llll
  new links(
    new Transform({
      position: new Vector3(12.8, 4.7, 11.8),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(11.8, 4.7, 11),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(10.3, 4.7, 11),
      scale: new Vector3(1, 1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    })
  )
  new links(
    new Transform({
      position: new Vector3(7.3, 4.7, 11.6),
      scale: new Vector3(3, 2, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    })
  )
  //floor_3
  new links(
    new Transform({
      position: new Vector3(7.8, 7.8, 15.1),
      scale: new Vector3(3.5, 2, 1),
      rotation: Quaternion.Euler(0, 47, 0)
    })
  )
}
