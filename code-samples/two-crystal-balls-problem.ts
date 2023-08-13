function dropCrystalBall(floor: number, breakingFloor: number): boolean {
	return floor >= breakingFloor;
}

function binarySearchApproach(
	totalFloors: number,
	breakingFloor: number
): [number, number] {
	const startTime = performance.now();
	let ballsUsed = 0;
	let lowerBound = 1;
	let upperBound = totalFloors;

	while (lowerBound <= upperBound) {
		ballsUsed++;
		const mid = Math.floor((lowerBound + upperBound) / 2);

		if (dropCrystalBall(mid, breakingFloor)) {
			upperBound = mid - 1;
		} else {
			lowerBound = mid + 1;
		}
	}

	const endTime = performance.now();
	const executionTime = endTime - startTime;

	return [ballsUsed, executionTime];
}

function squareRootApproach(
	totalFloors: number,
	breakingFloor: number
): [number, number] {
	const startTime = performance.now();
	let ballsUsed = 1;
	let intervalSize = Math.floor(Math.sqrt(totalFloors));

	while (!dropCrystalBall(intervalSize, breakingFloor)) {
		ballsUsed++;
		intervalSize += Math.floor(Math.sqrt(totalFloors));
	}

	let lowerBound = intervalSize - Math.floor(Math.sqrt(totalFloors)) + 1;
	let upperBound = intervalSize;

	for (let floor = lowerBound; floor <= upperBound; floor++) {
		ballsUsed++;
		if (dropCrystalBall(floor, breakingFloor)) {
			const endTime = performance.now();
			const executionTime = endTime - startTime;
			return [ballsUsed, executionTime];
		}
	}

	const endTime = performance.now();
	const executionTime = endTime - startTime;

	return [ballsUsed, executionTime];
}

const totalFloors = 100000000;
const breakingFloor = Math.floor(Math.random() * totalFloors) + 1;

console.log(`Total Floors: ${totalFloors}`);
console.log(`Breaking Floor: ${breakingFloor}`);

const [binarySearchBallsUsed, binarySearchTime] = binarySearchApproach(
	totalFloors,
	breakingFloor
);
console.log(`Binary Search Approach - Balls Used: ${binarySearchBallsUsed}`);
console.log(
	`Binary Search Approach - Execution Time: ${binarySearchTime.toFixed(2)} ms`
);

const [sqrtApproachBallsUsed, sqrtApproachTime] = squareRootApproach(
	totalFloors,
	breakingFloor
);
console.log(`Square Root Approach - Balls Used: ${sqrtApproachBallsUsed}`);
console.log(
	`Square Root Approach - Execution Time: ${sqrtApproachTime.toFixed(2)} ms`
);
