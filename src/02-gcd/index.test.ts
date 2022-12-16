import { performance } from "perf_hooks";
import { describe, expect, it } from "vitest";

import { gcd, gcdBigInt } from "./";

describe("02-gcd", () => {

	describe("gcd", () => {
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
	describe("gcdBigInt", () => {
		it("should be performant", () => {
			const start = performance.now();
			const result = gcdBigInt(
				2069305684654156762999950296966621167345159426789529625204167915939326055302200028380955311610770249n,
				9015478212293054122635187024057555377391876225736904545627115552115742806271638997161343601977628318n
			);
			const end = performance.now();
			expect(result).toBe(3n);
			expect(end - start).toBeLessThan(1);
		});
	});
});
