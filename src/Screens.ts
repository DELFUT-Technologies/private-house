import * as utils from '@dcl/ecs-scene-utils'
import { Parent } from './resource'
/* import { movePlayerTo } from '@decentraland/RestrictedActions'
movePlayerTo(new Vector3(15.84,4.21,5.47)) */

const 田原 = new VideoClip('https://player.vimeo.com/external/815578435.m3u8?s=9951ff330740401e56a797145fbfb19fd652d81b')
const DJ = new VideoClip('https://player.vimeo.com/external/815579062.m3u8?s=0ba35a295dd5cba90ad1cf874d4ff0de045c6b8e')
const ピッコ1 = new VideoClip('https://player.vimeo.com/external/815579867.m3u8?s=75efdb6e10481d3a032e7cf7e147c7b1dcae9a53')
const ピッコ2 = new VideoClip('https://player.vimeo.com/external/815580887.m3u8?s=751dec8fdf55747114a68e45c90ecc5d45f07cf4')
const 佐藤航陽2_8 = new VideoClip('https://player.vimeo.com/external/815581441.m3u8?s=f94b3f028e9133e275c55faea74fe1d04ddb581c')
const 佐藤航陽4_8 = new VideoClip('https://player.vimeo.com/external/815581928.m3u8?s=c4f98dc939dcc50722373280b2b88467a021fff2')
const メタップス = new VideoClip('https://player.vimeo.com/external/816124839.m3u8?s=f2780ab5355cc214dd86b1952664d868ec2298be')
// NEW VIDEO HERE
const vid8 = new VideoClip('https://player.vimeo.com/external/816124839.m3u8?s=f2780ab5355cc214dd86b1952664d868ec2298be')

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
          },
          // enableDebug: true
        })
      )
    }
  }
  
  export function InitScreens() {

    //========================================//
    //                   2階                  //
    //========================================//

    // ----------- Front wall ----------//
    // Main screen
    new TriggerScreen(
      new VideoTexture(田原),
      new Transform({
        position: new Vector3(7.64, 6.25, 10.9),
        scale: new Vector3(7.6, 4.5, 1),
        rotation: Quaternion.Euler(0, 0, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(5, 0, 5), new Vector3(2, -1, 0))
    )

    // ----------- Back wall ----------//
    // Left
    new TriggerScreen(
      new VideoTexture(DJ),
      new Transform({
        position: new Vector3(5.01, 4.8, 18.89),
        scale: new Vector3(1.25, 1.3, 1),
        rotation: Quaternion.Euler(0, 182, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(2.5, 0, 1), new Vector3(-1.25, 0.5, 0))
    )
    // Right
    new TriggerScreen(
      new VideoTexture(ピッコ1),
      new Transform({
        position: new Vector3(6.7, 4.8, 18.81),
        scale: new Vector3(1.3, 1.3, 1),
        rotation: Quaternion.Euler(0, 180, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(2.5, 0, 1), new Vector3(-1.25, 0.5, 0))
    )

    // ----------- Left wall ----------//
    // Left
    new TriggerScreen(
      new VideoTexture(ピッコ2),
      new Transform({
        position: new Vector3(12.83, 4.82, 16.1),
        scale: new Vector3(1.3, 1.3, 1),
        rotation: Quaternion.Euler(0, 267, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 0, 2), new Vector3(0, 0.5, 1))
    )
    // Middle
    new TriggerScreen(
      new VideoTexture(佐藤航陽2_8),
      new Transform({
        position: new Vector3(12.87, 4.84, 13.8),
        scale: new Vector3(1.2, 1.2, 1),
        rotation: Quaternion.Euler(0, 270, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 0, 2), new Vector3(0, 0.5, 1))
    )
    // Right
    new TriggerScreen(
      new VideoTexture(佐藤航陽4_8),
      new Transform({
        position: new Vector3(12.96, 4.75, 11.87),
        scale: new Vector3(1.38, 1.37, 1),
        rotation: Quaternion.Euler(0, 270, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 0, 2), new Vector3(0, 0.5, 1))
    )

    // ----------- Right wall ----------//
    // Left
    new TriggerScreen(
      new VideoTexture(メタップス),
      new Transform({
        position: new Vector3(1.5, 4.76, 16.20),
        scale: new Vector3(1.35, 1.33, 1),
        rotation: Quaternion.Euler(0, 90, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 0, 2.5), new Vector3(0, 0.5, -1.25))
    )
    // Right
    new TriggerScreen(
      new VideoTexture(vid8),
      new Transform({
        position: new Vector3(1.5, 4.76, 17.91),
        scale: new Vector3(1.35, 1.33, 1),
        rotation: Quaternion.Euler(0, 90, 0)
      }),
      new utils.TriggerBoxShape(new Vector3(1, 0, 2.5), new Vector3(0, 0.5, -1.25))
    )
  }