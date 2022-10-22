import { movePlayerTo } from '@decentraland/RestrictedActions'
const respawner = new Entity()
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
respawner2.addComponent(new Transform({ position: new Vector3(10, 21, 12) }))
respawner2.addComponent(
  new OnPointerDown(
    () => {
      void movePlayerTo({ x: 2, y: 1, z: 1 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: 'Move player' }
  )
)

engine.addEntity(respawner2)
