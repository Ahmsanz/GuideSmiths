const Grid = require("./grid.js");
const Robot = require("./robot.js");

let instructions = "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";

let mars = new Mars();
console.log(mars.send(instructions));

function Mars() {

	this.send = function (instructions) {
		let output = "";

		instructions = instructions.split("\n");

		let gridSize = instructions[0].split(" ");
		let grid = new Grid(gridSize[0], gridSize[1]);
		let robot = new Robot(grid);

		for (let i = 1; i < instructions.length; i++) {
			let instruction = instructions[i];

			if (isNewRobot(instruction))
				robot = new Robot(grid);
			else if (isRobotsStartingPosition(instruction))
				robot.setPosition(instruction);
			else
				output += (output.length > 0 ? "\n" : "") + robot.move(instruction);
		}
		return output;
	};

	isNewRobot = function (instruction) {
		return instruction === "";
	};

	isRobotsStartingPosition = function (instruction) {
		return instruction.indexOf(" ") > -1;
	};
}

module.exports = Mars;
