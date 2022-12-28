import { describe, expect, it } from "vitest";

import { add, addMany, cross, dot, length, normalize, scale } from "./";

describe("01-vector-operations", () => {
	describe("add", () => {
		it("should add two vectors", () => {
			expect(add({ x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 })).toEqual({
				x: 5,
				y: 7,
				z: 9,
			});
			expect(add({ x: 1, y: 0, z: -1 }, { x: 0, y: -1, z: 0 })).toEqual({
				x: 1,
				y: -1,
				z: -1,
			});
		});
	});
	describe("addMany", () => {
		it("should return the same vector for a single argument", () => {
			expect(addMany({ x: -1, y: 3, z: -7 })).toEqual({
				x: -1,
				y: 3,
				z: -7,
			});
		});
		it("should add two or more vectors", () => {
			expect(
				addMany(
					{ x: -1, y: -4, z: 3 },
					{ x: -1, y: -3, z: 2 },
					{ x: 3, y: -1, z: 3 }
				)
			).toEqual({
				x: 1,
				y: -8,
				z: 8,
			});
			expect(
				addMany(
					{ x: 4, y: 3, z: 1 },
					{ x: -1, y: -1, z: 5 },
					{ x: 2, y: -2, z: -2 }
				)
			).toEqual({
				x: 5,
				y: 0,
				z: 4,
			});
		});
	});
	describe("scale", () => {
		it("should scale a vector appropriately", () => {
			let sc = scale({ x: 2, y: 1, z: -1 }, 0.1);
			expect(sc.x).toBeCloseTo(0.2);
			expect(sc.y).toBeCloseTo(0.1);
			expect(sc.z).toBeCloseTo(-0.1);

			sc = scale({ x: 2, y: -6, z: 4 }, 2);
			expect(sc.x).toBeCloseTo(4);
			expect(sc.y).toBeCloseTo(-12);
			expect(sc.z).toBeCloseTo(8);
		});
	});

	describe("length", () => {
		it("should return the length of a vector", () => {
			expect(length({ x: 1, y: 1, z: 0 })).toBeCloseTo(Math.sqrt(2));
			expect(length({ x: 1, y: 1, z: -1 })).toBeCloseTo(Math.sqrt(3));
		});
	});

	describe("normalize", () => {
		it("should normalize a vector", () => {
			let n = normalize({ x: 1, y: 1, z: 0 });
			expect(n.x).toBeCloseTo(1 / Math.sqrt(2));
			expect(n.y).toBeCloseTo(1 / Math.sqrt(2));
			expect(n.z).toBeCloseTo(0);

			n = normalize({ x: 3, y: -4, z: 5 });
			expect(n.x).toBeCloseTo(3 / (5 * Math.sqrt(2)));
			expect(n.y).toBeCloseTo((-2 * Math.sqrt(2)) / 5);
			expect(n.z).toBeCloseTo(1 / Math.sqrt(2));
		});
	});

	describe("dot", () => {
		it("should return the dot product of two vectors", () => {
			let d = dot({ x: 1, y: 0, z: -1 }, { x: 2, y: -1, z: 0 });
			expect(d).toBeCloseTo(2);
			// perpendicular
			d = dot({ x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 1 });
			expect(d).toBeCloseTo(0);
			// parallel
			d = dot(
				{ x: 1, y: 0, z: -2 },
				{
					x: -2,
					y: 0,
					z: 4,
				}
			);
			expect(d).toBeCloseTo(-8);
		});
	});

	describe("cross", () => {
		it("should return the correct cross product for vectors (2, 3, 4) and (5, 6, 7)", () => {
			expect(cross({ x: 2, y: 3, z: 4 }, { x: 5, y: 6, z: 7 })).toEqual({
				x: -3,
				y: 6,
				z: -3,
			});
		});

		it("should return the correct cross product for vectors (1, 0, 0) and (0, 1, 0)", () => {
			expect(cross({ x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 })).toEqual({
				x: 0,
				y: 0,
				z: 1,
			});
		});

		it("should return the correct cross product for vectors (0, 0, 1) and (1, 0, 0)", () => {
			expect(cross({ x: 0, y: 0, z: 1 }, { x: 1, y: 0, z: 0 })).toEqual({
				x: 0,
				y: 1,
				z: 0,
			});
		});

		it("should return the correct cross product for vectors (1, 2, 3) and (4, 5, 6)", () => {
			expect(cross({ x: 1, y: 2, z: 3 }, { x: 4, y: 5, z: 6 })).toEqual({
				x: -3,
				y: 6,
				z: -3,
			});
		});

		it("should return the correct cross product for vectors (1, 2, 3) and (3, 2, 1)", () => {
			expect(cross({ x: 1, y: 2, z: 3 }, { x: 3, y: 2, z: 1 })).toEqual({
				x: -4,
				y: 8,
				z: -4,
			});
		});
	});
});
