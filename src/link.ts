import { Parent } from './resource'
// use movePlayerTo for easy debugging. be immediately transported
// to desired location upon reload
/* import { movePlayerTo } from '@decentraland/RestrictedActions'
movePlayerTo(new Vector3(6.61, 14.05, 25.84)) */

const kameYoutubeLink = 'https://www.youtube.com/@kametchTV'
const DJ社長 = 'https://www.youtube.com/watch?v=ny7PE7lCzgk'
const 中野信子 = 'https://www.youtube.com/watch?v=3dKt2MfAsy8'
const bunjiro = 'https://www.youtube.com/watch?v=-dxGltHNjUY&t=130s'
const 田原総一朗 = 'https://www.youtube.com/watch?v=lm0wcOqRD4g'
const 家入一真 = 'https://www.youtube.com/watch?v=r8vLDWoI3Cg'
const 脳科学者 = 'https://www.youtube.com/watch?v=XUTGYvCPBQU'
const メタップスCEO = 'https://www.youtube.com/watch?v=NbGk7Bb3TgI'
// const ホームレス小谷 = 'https://www.youtube.com/watch?v=S-VNN2-FO3E'
// const 外国人 = 'https://www.youtube.com/watch?v=0HD7pFzjvSY'

class links extends Entity {
  constructor(transform: Transform, link: string) {
    super()

    this.setParent(Parent)
    this.addComponent(transform)
    const button_shape = new PlaneShape()
    button_shape.isPointerBlocker = false
    button_shape.withCollisions = false
    // button_shape.visible = false

    const link_entity = new Entity()
    link_entity.addComponent(button_shape)
    link_entity.addComponent(
      new OnPointerDown(() => {
        openExternalURL(link)
      })
    )
    const color = new Material()
    color.albedoColor = new Color4(0, 0, 0, 0)
    // color.albedoColor = Color3.Green()
    link_entity.addComponent(color)
    link_entity.setParent(this)
  }
}

export function Initlinks() {
  //========================================//
  //                   2階                  //
  //========================================//

  // ----------- Front wall ----------//
  // Main screen
  new links(
    new Transform({
      position: new Vector3(7.64, 6.25, 10.9),
      scale: new Vector3(7.6, 4.5, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    }),
    kameYoutubeLink
  )

  // ----------- Back wall ----------//
  // Left
  new links(
    new Transform({
      position: new Vector3(5.05, 4.8, 18.81),
      scale: new Vector3(1.3, 1.3, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    }),
    中野信子
  )
  // Right
  new links(
    new Transform({
      position: new Vector3(6.7, 4.8, 18.81),
      scale: new Vector3(1.3, 1.3, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    }),
    メタップスCEO
  )

  // ----------- Left wall ----------//
  // Left
  new links(
    new Transform({
      position: new Vector3(12.82, 4.82, 16.15),
      scale: new Vector3(1.3, 1.3, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    }),
    DJ社長
  )
  // Middle
  new links(
    new Transform({
      position: new Vector3(12.87, 4.84, 13.8),
      scale: new Vector3(1.2, 1.2, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    }),
    bunjiro
  )
  // Right
  new links(
    new Transform({
      position: new Vector3(12.96, 4.75, 11.9),
      scale: new Vector3(1.3, 1.3, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    }),
    田原総一朗
  )

  // ----------- Right wall ----------//
  // Left
  new links(
    new Transform({
      position: new Vector3(1.5, 4.68, 16.3),
      scale: new Vector3(1.35, 1.3, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    }),
    脳科学者
  )
  // Right
  new links(
    new Transform({
      position: new Vector3(1.5, 4.68, 18),
      scale: new Vector3(1.35, 1.3, 1),
      rotation: Quaternion.Euler(0, 90, 0)
    }),
    家入一真
  )

  //========================================//
  //                   4階                  //
  //========================================//
  new links(
    new Transform({
      position: new Vector3(6.38, 14.66, 19.4),
      scale: new Vector3(2.6, 1.1, 1),
      rotation: Quaternion.Euler(0, 0, 0)
    }),
    kameYoutubeLink
  )
}

/* const button_shape = new PlaneShape()
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
    openExternalURL(kameYoutubeLink)
  })
)
// color
const color = new Material()
color.albedoColor = new Color4(0, 0, 0, 0)
link_entity2.addComponent(color)
//engine.addEntity(link_entity2) */
