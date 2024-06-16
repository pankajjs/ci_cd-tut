import { sum } from "../index";

describe("Test Index", () => {
	test("returns 2 when adding 1 and 1", () => {
		expect(sum(1, 1)).toBe(2);
	});
});
