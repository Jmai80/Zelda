import { MovementComponent, PositionComponent } from "./Components.js";
import Entity from "./Entity.js";
import MovementSystem from "./System.js";

class Registry {
    constructor(id, registry) {
        this.numberOfEntities = 0;
        this.entitiesToBeAdded = [];
        this.systems = {};
    }

    // components är en array av objekt
    createEntity = (components) => {
        const newEntity = new Entity(this.numberOfEntities++, this);
        let newEntityComponents = {};

        for(let i = 0; i < components.length; i++) {
            const component = components[i];
            
            switch(component["name"]) {
                case "Position": {
                    const componentObject = component["value"];
                    newEntityComponents["Position"] = new PositionComponent(component["name"], componentObject);
                    break;
                }
                case "Movement": {
                    const componentObject = component["value"];
                    newEntityComponents["Movement"] = new MovementComponent(component["name"], componentObject);
                    break;
                }
                default:
                    break;
                
            }
        }
        newEntity.components = newEntityComponents;
        this.entitiesToBeAdded.push(newEntity);

        return newEntity;
    }

    // systemType: string, exempel: "MovementSystem"
    addSystem = (systemType) => {
        let newSystem;
        switch(systemType) {
            case "Movement": {
                newSystem = new MovementSystem(systemType);
                break;
            }
            default: {
                break;
            }
        }

        this.systems[systemType] = newSystem;
    }
}

export default Registry;