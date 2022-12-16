import { describe, expect, it } from "vitest";

import { getDistance } from "./";

describe("00-distance-from-circle", () => {
	it("should return the correct distance for (1, 0) and circle center (0, 0) radius 1", () => {
		expect(
			getDistance({ x: 1, y: 0 }, { center: { x: 0, y: 0 }, radius: 1 })
		).toBeCloseTo(0);
	});
	it("should handle the inside of the circle appropriately", () => {
		expect(
			getDistance({ x: 0.5, y: 0 }, { center: { x: 0, y: 0 }, radius: 1 })
		).toEqual(0);
	});
	it("should return the correct distance for (1.5, 0) and circle center (0, 0) radius 1", () => {
		expect(
			getDistance({ x: 1.5, y: 0 }, { center: { x: 0, y: 0 }, radius: 1 })
		).toBeCloseTo(0.5);
	});
	it("should return the correct distance for (10, 0) and circle center (0, 0) radius 1", () => {
		expect(
			getDistance({ x: 10, y: 0 }, { center: { x: 0, y: 0 }, radius: 1 })
		).toBeCloseTo(9);
	});
	it("should return the correct distance for (-1, 0) and circle center (0, 0) radius 1", () => {
		expect(
			getDistance({ x: -1, y: 0 }, { center: { x: 0, y: 0 }, radius: 1 })
		).toBeCloseTo(0);
	});
	it("should return the correct distance for (0.5, 0.5) and circle center (1, 1) radius 1", () => {
		expect(
			getDistance(
				{ x: 0.5, y: 0.5 },
				{ center: { x: 1, y: 1 }, radius: 1 }
			)
		).toEqual(0);
	});
	it("should return the correct distance for (1.5, 1.5) and circle center (1, 1) radius 1", () => {
		expect(
			getDistance(
				{ x: 1.5, y: 1.5 },
				{ center: { x: 1, y: 1 }, radius: 1 }
			)
		).toBeCloseTo(0);
	});
	it("should return the correct distance for (10, 10) and circle center (1, 1) radius 1", () => {
		expect(
			getDistance({ x: 10, y: 10 }, { center: { x: 1, y: 1 }, radius: 1 })
		).toBeCloseTo(11.7279);
	});
	it("should return the correct distance for (-1, -1) and circle center (1, 1) radius 1", () => {
		expect(
			getDistance({ x: -1, y: -1 }, { center: { x: 1, y: 1 }, radius: 1 })
		).toBeCloseTo(1.8284);
	});
});
