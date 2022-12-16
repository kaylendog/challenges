/*

Vectors are a useful tool for Computer Scientists and have all sorts of applications,
from graphics to game development. They are one of the most fundamental data structures,
to the point that they are hard-coded to exist on both your CPU and GPU!

In this challenge, your task is to implement the vector operations below. Each method has
a description, and feel free to look up the definition of each operation on Wikipedia.

*/

import { Vector } from "./types";

/**
 * Return the vector sum of two vectors.
 * @param a
 * @param b
 */
export const add = (a: Vector, b: Vector): Vector => {
	throw new Error("Not implemented");
};

/**
 * Return the vector sum of one or more vectors.
 * @param args
 */
export const addMany = (...args: Vector[]): Vector => {
	throw new Error("Not implemented");
};

/**
 * Scale the given vector by a scalar, such that the length of the vector
 * is multiplied by the scalar.
 * @param a
 * @param scalar
 */
export const scale = (a: Vector, scalar: number): Vector => {
	throw new Error("Not implemented");
};

/**
 * Return the length (also known as magnitude) of this vector.
 * @param vector
 */
export const length = (vector: Vector): number => {
	throw new Error("Not implemented");
};

/**
 * For a given vector, return the same vector but with unit length.
 * @param vector
 */
export const normalize = (vector: Vector): Vector => {
	throw new Error("Not implemented");
};

/**
 * Return the vector dot product of two vectors.
 */
export const dot = (a: Vector, b: Vector): number => {
	throw new Error("Not implemented");
};

/**
 * Return the vector cross product of two vectors. This method should assume a right-handed
 * coordinate system.
 * @param a
 * @param b
 */
export const cross = (a: Vector, b: Vector): Vector => {
	throw new Error("Not implemented");
};
