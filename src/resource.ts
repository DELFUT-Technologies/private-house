export const Parent = new Entity()
Parent.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
engine.addEntity(Parent)