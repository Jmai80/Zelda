import Registry from '/classes/registry.js';

const canvas = document.getElementById('gameScreen');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

console.log("context: ", c);



class Game {
    constructor() {
        this.player = undefined;
        this.registry = new Registry();
    }

    initialize = () => {
        this.player = {
            x: 0,
            y: 0,
            width: 60,
            height: 50
        }

        this.registry.addSystem("MovementSystem");

        const dummyPositionComponent = {
            name: "Position",
            value: {
                x: 0,
                y: 0,
                width: 50,
                height: 50
            }
        }

        const dummyMovementComponent = {
            name: "Movement",
            value: {
                vX: 0,
                vY: 0
            }
        }
        this.registry.createEntity([dummyPositionComponent, dummyMovementComponent]);


        console.log(this.registry.entitiesToBeAdded);

        document.addEventListener('keydown', this.handleUserInput);
        document.addEventListener('keyup', this.handleUserInput);
    }
    update = () => {
        requestAnimationFrame(this.update);
    }

    render = () => {
        const { x, y, width, height } = this.player;
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.beginPath();
        c.fillStyle = 'red';
        c.fillRect(x, y, width, height);
        c.stroke();

        requestAnimationFrame(this.render);
    }
    handleUserInput = (e) => {
        e.preventDefault(); // Stoppar standardbeteendet (scrollning)
        /* 
           key: string,
           type: string,
        */

        const { key, type } = e;
        
        if(this.player) {

            if(type === 'keydown') {
                switch(key) {
                    case 'ArrowRight':
                        this.player.x += 1;
                        break;
                    case 'ArrowLeft':
                        this.player.x -= 1;
                        break;
                    case 'ArrowUp':
                        this.player.y -= 1;
                        break;
                    case 'ArrowDown':
                        this.player.y += 1;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

const game = new Game();
game.initialize();
game.update();
game.render();