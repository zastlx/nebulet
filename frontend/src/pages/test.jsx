import {ConfettiCanvas, Environment, SpriteCanvas, useConfettiCannon} from "confetti-cannon";
import {useCallback, useMemo, useRef} from "react";
import square from "../static/square.svg";
import circle from "../static/circle.svg";

const SPRITES = [
    square, circle
    /*{
        colorize: true,
        src: 'https://cdn.discordapp.com/attachments/1132777741889056900/1133902729778053241/image.png'
    }*/
];
const COLORS = ["#00ccff"];
const SIZE = 40;

export default function Example() {
    const confettiCanvas = useRef(null);
    const spriteCanvas = useRef(null);
    const environment = useMemo(() => new Environment({gravity: -5, wind: 0}), []);
    const cannon = useConfettiCannon(confettiCanvas, spriteCanvas);

    const addConfetti = useCallback((pos) => {

        const offset = 150;

        const createConfettiArgs = {
            position: {
                type: "static-random",
                minValue: {
                    x: pos === "left"
                        ? confettiCanvas
                            .current
                            .getCanvas()
                            .getBoundingClientRect()
                            .left + offset
                        : confettiCanvas
                            .current
                            .getCanvas()
                            .getBoundingClientRect()
                            .right - offset,
                    y: confettiCanvas
                        .current
                        .getCanvas()
                        .getBoundingClientRect()
                        .bottom
                },
                maxValue: {
                    x: pos === "left"
                        ? confettiCanvas
                            .current
                            .getCanvas()
                            .getBoundingClientRect()
                            .left + offset
                        : confettiCanvas
                            .current
                            .getCanvas()
                            .getBoundingClientRect()
                            .right - offset,
                    y: confettiCanvas
                        .current
                        .getCanvas()
                        .getBoundingClientRect()
                        .bottom
                }
            },
            velocity: {
                type: "static-random",
                minValue: {
                    x: -20,
                    y: -50
                },
                maxValue: {
                    x: 20,
                    y: -75
                }
            },
            rotation: {
                type: "linear-random",
                minValue: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                maxValue: {
                    x: 360,
                    y: 360,
                    z: 360
                },
                minAddValue: {
                    x: -25,
                    y: -25,
                    z: -25
                },
                maxAddValue: {
                    x: 25,
                    y: 25,
                    z: 25
                }
            },
            dragCoefficient: {
                type: "static",
                value: {
                    x: 0,
                    y: 0
                }
            },
            opacity: {
                type: "linear",
                value: 1,
                addValue: -0.01
            },
            size: {
                type: "static-random",
                minValue: 20,
                maxValue: 40
            }
        };

        cannon.createMultipleConfetti(createConfettiArgs, 60);
    }, [cannon]);

    const handleClick = () => {
        addConfetti("left");
        addConfetti("right");
    };
    Object.assign(window, {
        confettiCanvas,
        spriteCanvas,
        environment,
        cannon,
        addConfetti,
        handleClick
    });

    return (
        <div>
            <button
                onClick={handleClick}
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px 20px",
                    background: "blue",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >Test particles</button>
            <SpriteCanvas
                ref={spriteCanvas}
                sprites={SPRITES}
                colors={COLORS}
                style={{
                    "border": "1px solid black"
                }}
                spriteWidth={SIZE}
                spriteHeight={SIZE}/>
            <ConfettiCanvas
                ref={confettiCanvas}
                style={{
                    border: "1px solid black",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1
                }}
                environment={environment}/>
        </div>
    );
}