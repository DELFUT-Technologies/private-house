import * as utils from '@dcl/ecs-scene-utils'
import { Parent } from './resource'
import { movePlayerTo } from '@decentraland/RestrictedActions'

const vid1 = new VideoClip('https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875')
const vid2 = new VideoClip('https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875')
const vid3 = new VideoClip('https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875')
const vid4 = new VideoClip('https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875')
const vid5 = new VideoClip('https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875')
const vid6 = new VideoClip('https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875')

class TriggerScreen extends Entity {
    public videoMaterial: Material
  
    constructor(
      videotexture: VideoTexture,
      transform: Transform,
      triggerShape: utils.TriggerBoxShape
    ) {
      super()
      engine.addEntity(this)
      this.setParent(Parent)
      this.addComponent(new PlaneShape())
      this.addComponent(transform)
  
      videotexture.loop = true
  
      this.videoMaterial = new Material()
      this.videoMaterial.albedoTexture = videotexture
      this.videoMaterial.emissiveTexture = videotexture
      this.videoMaterial.roughness = 1
      this.videoMaterial.specularIntensity = 0
      this.videoMaterial.metallic = 0
      this.videoMaterial.emissiveColor = Color3.White()
      this.videoMaterial.emissiveIntensity = 0.6
  
      this.addComponent(this.videoMaterial)
  
      this.addComponent(
        new utils.TriggerComponent(triggerShape, {
          onCameraEnter: () => {
            videotexture.playing = true
          },
          onCameraExit: () => {
            videotexture.playing = false
          }
        })
      )
    }
  }
  
  export function InitScreens() {
    movePlayerTo(new Vector3(14.98,4.21,5.36))
    //========================================//
    //                   2階                  //
    //========================================//

    // ----------- Front wall ----------//
    // Main screen
    new TriggerScreen(
      new VideoTexture(vid1),
      new Transform({
        position: new Vector3(7.64, 6.25, 10.9),
        scale: new Vector3(7.6, 4.5, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(2, 1, 10), new Vector3(0, 0, 4))
    )

    // ----------- Back wall ----------//
    // Left
    new TriggerScreen(
      new VideoTexture(vid1),
      new Transform({
        position: new Vector3(5.05, 4.8, 18.81),
        scale: new Vector3(1.3, 1.3, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 1, 1))
    )
    // Right
    new TriggerScreen(
      new VideoTexture(vid1),
      new Transform({
        position: new Vector3(6.7, 4.8, 18.81),
        scale: new Vector3(1.3, 1.3, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 1, 1))
      // new utils.TriggerBoxShape(new Vector3(6.7, 4.8, 18.81))
    )

    // ----------- Left wall ----------//
    // Left
    new TriggerScreen(
      new VideoTexture(vid1),
      new Transform({
        position: new Vector3(12.82, 4.82, 16.15),
        scale: new Vector3(1.3, 1.3, 1),
        rotation: Quaternion.Euler(0, 90, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 1, 1))
      // new utils.TriggerBoxShape(new Vector3(12.82, 4.82, 16.15))
    )

    // ----------- Right wall ----------//
    // Left
    new TriggerScreen(
      new VideoTexture(vid1),
      new Transform({
        position: new Vector3(1.5, 4.68, 16.3),
        scale: new Vector3(1.35, 1.3, 1),
        rotation: Quaternion.Euler(0, 90, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 1, 1))
      // new utils.TriggerBoxShape(new Vector3(1.5, 4.68, 16.3))
    )
    // Right
    new TriggerScreen(
      new VideoTexture(vid1),
      new Transform({
        position: new Vector3(1.5, 4.68, 18),
        scale: new Vector3(1.35, 1.3, 1),
        rotation: Quaternion.Euler(0, 90, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 1, 1))
      // new utils.TriggerBoxShape(new Vector3(1.5, 4.68, 18))
    )
  }