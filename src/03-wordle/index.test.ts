import { it } from "node:test";
import { describe, expect } from "vitest";

import { respond, WordleGame } from "./";

describe("03-wordle", () => {
	describe("respond", () => {
		it("should respond correctly", () => {
			const word = "FOXES";
			const response = respond(word, "COMEX");
			// basics
			expect(response).toBeInstanceOf(Array);
			expect(response.length).toEqual(5);
			// incorrect guess
			expect(response[0].character).toEqual("C");
			expect(response[0].type).toEqual(response[2].type);
			// correct guess
			expect(response[3].character).toEqual("E");
			expect(response[3].type).toEqual(response[1].type);
			expect(response[3].type).not.toEqual(response[1].type);
			// amber guess
			expect(response[4].character).toEqual("X");
			expect(response[4].type)
				.not.eq(response[2].type)
				.and.not.eq(response[1].type);
		});
		it("should return for all guesses", () => {
			const word = "LABEL";
			const guess = "CANAL"; // two a's

			const response = respond(word, guess);

			// reconstruct guess
			const reconstructedGuess = response
				.map(({ character }) => character)
				.join(" ");
			expect(reconstructedGuess).toEqual(guess);

			// duplicate characters should be equal
			expect(response[1].type).toEqual(response[3].type);
		});
	});

	describe("WordleGame", () => {
		it("should fail on exceed turns", () => {
			const game = WordleGame.createGame("CRANE");
			for (let i = 0; i < 4; i++) {
				game.makeGuess("WOLFS");
			}
			expect(() => {
				game.makeGuess("WOLFS");
			}).toThrowError();
		});
		it("should remember previous guesses", () => {
			const game = WordleGame.createGame("CRANE");
			const responses = game.makeGuess("CRABS");
			// assert
			expect(game.previousGuesses()).toContain(responses);
			game.makeGuess("CARBS");
			expect(game.previousGuesses()).toContain(responses);
		});
		it("should track turns", () => {
			const game = WordleGame.createGame("NONCE");

			let remainingTurns = game.remainingTurns();
			const guess = (str: string) => {
				remainingTurns--;
				return game.makeGuess(str);
			};
			// make guesses
			guess("HTTPS");
			expect(remainingTurns).toEqual(game.remainingTurns());
			guess("LASER");
			expect(remainingTurns).toEqual(game.remainingTurns());
		});
		it("should return correct responses", () => {
			const game = WordleGame.createGame("FOXES");
			const guess1 = game.makeGuess("COMEX");
			// basics
			expect(guess1).toBeInstanceOf(Array);
			expect(guess1.length).toEqual(5);
			// incorrect guess
			expect(guess1[0].character).toEqual("C");
			expect(guess1[0].type).toEqual(guess1[2].type);
			// correct guess
			expect(guess1[3].character).toEqual("E");
			expect(guess1[3].type).toEqual(guess1[1].type);
			expect(guess1[3].type).not.toEqual(guess1[1].type);
			// amber guess
			expect(guess1[4].character).toEqual("X");
			expect(guess1[4].type)
				.not.eq(guess1[2].type)
				.and.not.eq(guess1[1].type);

			const guess2 = game.makeGuess("MOLES");
			expect(guess2[0].type).toEqual(guess1[2].type);
			expect(guess2[0].type).toEqual(guess2[2].type);

			expect(guess2[1].type).toEqual(guess1[1].type);
			expect(guess2[1].type).toEqual(guess2[3].type);
			expect(guess2[1].type).toEqual(guess2[4].type);
		});
	});
});
