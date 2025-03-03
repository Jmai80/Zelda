class Component {
    constructor(componentType) {
        this.componentType = componentType; // string
    }
}


class PositionComponent extends Component {
    constructor(componentType, componentObject) {
        super(componentType);

        this.x = componentObject.x;
        this.y = componentObject.y;
        this.width = componentObject.width;
        this.height = componentObject.height;

        /*
        {
        x: 1,
        y: 123,
        width: 50,
        height: 50
        }

        */
        
    }
}

class MovementComponent extends Component {
    constructor(componentType, componentObject) {
        super(componentType);
        this.vX = componentObject.vX;
        this.vY = componentObject.vY;
        this.collisionX = false;
        this.collisionY = false;
    }
}

export { PositionComponent, MovementComponent };