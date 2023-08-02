import { moveRover, Rover, Plateau } from "../src/index";

describe("Mars Rover", () => {
    test("Example Test Case 1", () => {
        const plateau: Plateau = { maxWidth: 5, maxHeight: 5 };
        const rover: Rover = { x: 1, y: 2, direction: "N" };
        const instructions = "LMLMLMLMM";
        const finalPosition = moveRover(plateau, rover, instructions);
        expect(finalPosition).toEqual({ x: 1, y: 3, direction: "N" });
    });

    test("Example Test Case 2", () => {
        const plateau: Plateau = { maxWidth: 5, maxHeight: 5 };
        const rover: Rover = { x: 3, y: 3, direction: "E" };
        const instructions = "MMRMMRMRRM";
        const finalPosition = moveRover(plateau, rover, instructions);
        expect(finalPosition).toEqual({ x: 5, y: 1, direction: "E" });
    });

    test("Rover moves off the plateau (North)", () => {
        const plateau: Plateau = { maxWidth: 5, maxHeight: 5 };
        const rover: Rover = { x: 2, y: 5, direction: "N" };
        const instructions = "MMMMM";
        expect(() => moveRover(plateau, rover, instructions)).toThrowError("Rover fell off the plateau!");
    });

    test("Rover moves off the plateau (West)", () => {
        const plateau: Plateau = { maxWidth: 5, maxHeight: 5 };
        const rover: Rover = { x: 0, y: 2, direction: "W" };
        const instructions = "MMMMM";
        expect(() => moveRover(plateau, rover, instructions)).toThrowError("Rover fell off the plateau!");
    });

    test("Rover turns right and left", () => {
        const plateau: Plateau = { maxWidth: 5, maxHeight: 5 };
        const rover: Rover = { x: 3, y: 3, direction: "N" };
        const instructions = "RRLL";
        const finalPosition = moveRover(plateau, rover, instructions);
        expect(finalPosition).toEqual({ x: 3, y: 3, direction: "N" });
    });

});
