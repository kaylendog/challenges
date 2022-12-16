import { performance } from "perf_hooks";
import { describe, expect, it } from "vitest";

import { gcd } from "./";

describe("02-gcd", () => {
	it("should find the GCD of two numbers", () => {
		expect(gcd(5, 12)).toEqual(1);
		expect(gcd(9, 24)).toEqual(3);
		expect(gcd(16, 8)).toEqual(8);
	});
	it("should be performant", () => {
		const start = performance.now();
		const result = gcd(123733026450, 287034819687);
		const end = performance.now();

		// should run in 10 microseconds!
		expect(result).toEqual(1881);
		expect(start - end).toBeLessThan(0.01);
	});
});
