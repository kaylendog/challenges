/*
Your task is to implement Wordle! You've bene given a skeleton set of types
and methods to implement.

`Response` should contain information about a given letter - where it is and
whether it is Green, Amber, or Black.

`WordleResponse` should define the above response types.

`respond` should take a word and a guess word, and return an array of 
responses.

Finally, `WorldeGame` should implement Wordle using imperative programming.
*/

/**
 * An interface containing response information.
 */
export interface WordleResponse {
	character: any; // change!
	type: any; // change!
}

/**
 * An enum containing types of response.
 */
export enum WordleResponseType {}

/**
 * Respond to a given guess.
 * @param word The word in play.
 * @param guess The player's guess.
 */
export const respond = (word: string, guess: string): WordleResponse[] => {
	throw new Error("Not implemented");
};

/**
 * An interface specifying the Wordle game.
 */
interface Wordle {
	remainingTurns(): number;
	makeGuess(guess: string): WordleResponse[];
}

export class WordleGame {
	static createGame(word: string): WordleGame {
		throw new Error("Not implemented");
	}

	remainingTurns(): number {
		throw new Error("Not implemented");
	}

	makeGuess(guess: string): WordleResponse[] {
		throw new Error("Not implemented");
	}

	previousGuesses(): WordleResponse[][] {
		throw new Error("Not implemented");
	}
}
