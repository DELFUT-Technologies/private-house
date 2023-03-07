export const Parent = new Entity()
Parent.addComponent(
  new Transform({
    position: new Vector3(0, 0, 16),
    rotation: Quaternion.Euler(0, 90, 0)
  })
)
engine.addEntity(Parent)
