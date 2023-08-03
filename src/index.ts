type Direction = "N" | "E" | "S" | "W";

export type Rover = {
  x: number;
  y: number;
  direction: Direction;
};

export type Plateau = {
  maxWidth: number;
  maxHeight: number;
};

export function moveRover(plateau: Plateau, rover: Rover, instructions: string): Rover {
  if (!isValidInstructions(instructions)) {
    throw new Error("Invalid instructions provided.");
  }

  instructions.split('').forEach((instruction) => {
    return instruction === "L" ? turnLeft(rover) :
      instruction === "R" ? turnRight(rover) :
        instruction === "M" ? moveForward(rover, plateau) :
          rover;
  });

  return rover;
}

function isValidInstructions(instructions: string): boolean {
  const validChars = ["L", "R", "M"] as const;
  return [...instructions].every((instruction) => validChars.includes(instruction as typeof validChars[number]));
}

function turnLeft(rover: Rover): void {
  rover.direction = rover.direction === "N" ? "W" :
    rover.direction === "S" ? "E" :
      rover.direction === "E" ? "N" :
        "S";
}

function turnRight(rover: Rover): void {
  rover.direction = rover.direction === "N" ? "E" :
    rover.direction === "S" ? "W" :
      rover.direction === "E" ? "S" :
        "N";
}

function moveForward(rover: Rover, plateau: Plateau): void {
  rover.direction === "N" && rover.y < plateau.maxHeight
    ? rover.y++
    : rover.direction === "S" && rover.y > 0
      ? rover.y--
      : rover.direction === "E" && rover.x < plateau.maxWidth
        ? rover.x++
        : rover.direction === "W" && rover.x > 0
          ? rover.x--
          : (() => {
            throw new Error("Rover fell off the plateau!");
          })();
}
