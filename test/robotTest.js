const Robot = require("../martianRobots/robot.js");
const Grid = require("../martianRobots/grid.js");
const assert = require('assert');

describe("Given a new Robot is created", function () {
	let grid = new Grid(1,1);
	let robot = new Robot(grid);

	it("then it lands on Mars facing North", function () {
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("N");
	});
	it("then it lands on Mars in the bottom left corner", function () {
		let position = robot.getPosition();
		assert(position.x).equal(0);
		assert(position.y).equal(0);
	});
	it("then it lands on Mars it is not lost", function () {
		assert(robot.isLost()).equal();
	});
	it("then it can turn left to face West", function() {
		robot.turnLeft();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("W");
	});
	it("then it can turn left again to face South", function() {
		robot.turnLeft();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("S");
	});
	it("then it can turn left again to face East", function() {
		robot.turnLeft();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("E");
	});
	it("then it can turn left again to face North", function() {
		robot.turnLeft();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("N");
	});
	it("then it can turn right", function() {
		robot.turnRight();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("E");
	});
	it("then it can turn right again to face South", function() {
		robot.turnRight();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("S");
	});
	it("then it can turn right again to face West", function() {
		robot.turnRight();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("W");
	});
	it("then it can turn right again to face North", function() {
		robot.turnRight();
		let orientation = robot.getPosition().orientation;
		assert(orientation).equal("N");
	});
	it("then it can move forwards when facing North", function() {
		robot.moveForwards();
		let positionOutput = robot.getPosition().toString();
		assert(positionOutput).equal("0 1 N");
	});
	it("then it can move forwards when facing East", function() {
		robot.turnRight();
		robot.moveForwards();
		let positionOutput = robot.getPosition().toString();
		assert(positionOutput).equal("1 1 E");
	});
	it("then it can move forwards when facing South", function() {
		robot.turnRight();
		robot.moveForwards();
		let positionOutput = robot.getPosition().toString();
		assert(positionOutput).equal("1 0 S");
	});
	it("then it can move forwards when facing West", function() {
		robot.turnRight();
		robot.moveForwards();
		let positionOutput = robot.getPosition().toString();
		assert(positionOutput).equal("0 0 W");
	});
	it("then it can respond to multiple instructions", function () {
		let robot1 = new Robot(grid);
		let position = robot1.move("LRRLRF");
		assert(position).equal("1 0 E");
	});
});

describe("Given a Grid of 4x4 and a Robot with a position of 3,2 East", function () {
	let grid = new Grid(3, 3);
	let robot = new Robot(grid);
	robot.setPosition("3 2 E");
	it("then it is facing East", function() {
		let positionOutput = robot.getPosition().orientation;
		assert(positionOutput).equal("E");
	});
	it("then it is positioned at 3,2", function() {
		let positionOutput = robot.getPosition().toString();
		assert(positionOutput).toContain("3 2");
	});
});

describe("Given a Grid of 1x1 and two robots", function () {
	let grid = new Grid();
	let robot1 = new Robot(grid);
	let robot2 = new Robot(grid);

	it("when robot 1 falls of the grid it is lost", function () {
		robot1.moveForwards();
		robot1.moveForwards();

		let positionOutput = robot1.getPosition().toString();
		assert(robot1.isLost()).equalTruthy();
		assert(positionOutput).equal("0 0 N LOST");
	});
	it("then robot 1 can no longer move around", function () {
		robot1.moveForwards();
		robot1.moveForwards();

		let positionOutput = robot1.getPosition().toString();
		assert(positionOutput).equal("0 0 N LOST");
	});
	it("when robot 2 tries get lost in the same place it is not lost", function () {
		robot2.moveForwards();
		robot2.moveForwards();

		let positionOutput = robot2.getPosition().toString();
		assert(robot2.isLost()).equalFalsy();
	});
	it("and it cannot move forwards in that direction", function () {
		robot2.moveForwards();

		let positionOutput = robot2.getPosition().toString();
		assert(positionOutput).equal("0 0 N");
	});
});
