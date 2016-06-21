import Midium from 'midium';
import {KEY_0, BLACK_KEYS, WHITE_KEYS, KEYS, LED_CHANNEL,
	DEFAULT_BRIGHTNESS} from './constants';

/**
 * @extends Midium
 */
export default class QuNexus extends Midium {
	static get BLACK_KEYS() {
		return BLACK_KEYS;
	}

	static get WHITE_KEYS() {
		return WHITE_KEYS;
	}

	/**
	 * Constructor
	 */
	constructor() {
		super('qunexus');
	}

	/**
	 * Lights up the specified keys on the QuNexus controller
	 *
	 * @param {string|number|array} note    MIDI note 0-127
	 * @param {number} [brightness]         Brightness 0-16
	 *
	 * @returns {object}
	 */
	lightUp(note, brightness = DEFAULT_BRIGHTNESS) {
		if (typeof note === 'string') {
			note = note.toLowerCase();
			if (KEYS.hasOwnProperty(note)) {
				this.lightUp(KEYS[note], brightness);
			}
		}
		else if (typeof note === 'number' || Array.isArray(note)) {
			this.noteOn(note, brightness, LED_CHANNEL);
		}

		return this;
	}

	/**
	 * Lights down the specified keys on the QuNexus controller
	 *
	 * @param {string|number|array} note    MIDI note 0-127
	 *
	 * @returns {object}
	 */
	lightDown(note) {
		if (typeof note === 'string') {
			note = note.toLowerCase();
			if (KEYS.hasOwnProperty(note)) {
				this.lightDown(KEYS[note]);
			}
		}
		else if (Array.isArray(note)) {
			note.forEach((_note) => {
				this.lightDown(_note);
			});
		}
		else if (typeof note === 'number') {
			note = note + KEY_0;
			for (note = note % 25; note < 128; note += 25) {
				this.noteOff(note, 0, LED_CHANNEL);
			}
		}

		return this;
	}

	/**
	 * Lights up all the lights.
	 *
	 * @param {number} [brightness]    Brightness 0-16
	 *
	 * @returns {object}
	 */
	allLightsUp(brightness = DEFAULT_BRIGHTNESS) {
		for (let note = 0; note < 25; note++) {
			this.lightUp(note, brightness);
		}

		return this;
	}

	/**
	 * Turns down all the lights
	 *
	 * @returns {object}
	 */
	allLightsDown() {
		this.allNotesOff();
		return this;
	}
}
