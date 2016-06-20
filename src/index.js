import Midium from 'midium';

const LED_CHANNEL = 1;
const DEFAULT_BRIGHTNESS = 16;

const KEY_0 = 0x30;
const KEY_10 = 0x31;
const KEY_1 = 0x32;
const KEY_11 = 0x33;
const KEY_2 = 0x34;
const KEY_3 = 0x35;
const KEY_12 = 0x36;
const KEY_4 = 0x37;
const KEY_CHANNEL = 0x38;
const KEY_5 = 0x39;
const KEY_ROTATE = 0x3a;
const KEY_6 = 0x3b;
const KEY_7 = 0x3c;
const KEY_COMA = 0x3d;
const KEY_8 = 0x3e;
const KEY_XPOSE = 0x3f
const KEY_9 = 0x40;
const KEY_NOTES = 0x41;
const KEY_REC = 0x42;
const KEY_CC = 0x43;
const KEY_STOP = 0x44;
const KEY_BEND = 0x45;
const KEY_PLAY = 0x46;
const KEY_AFTTCH = 0x47;
const KEY_CHNPRES = 0x48;

const KEYS = {
	'0'       : KEY_0,
	'10'      : KEY_10,
	'1'       : KEY_1,
	'11'      : KEY_11,
	'2'       : KEY_2,
	'3'       : KEY_3,
	'12'      : KEY_12,
	'4'       : KEY_4,
	'channel' : KEY_CHANNEL,
	'5'       : KEY_5,
	'rotate'  : KEY_ROTATE,
	'6'       : KEY_6,
	'7'       : KEY_7,
	'coma'    : KEY_COMA,
	'8'       : KEY_8,
	'xpose'   : KEY_XPOSE,
	'9'       : KEY_9,
	'notes'   : KEY_NOTES,
	'rec'     : KEY_REC,
	'cc'      : KEY_CC,
	'stop'    : KEY_STOP,
	'bend'    : KEY_BEND,
	'play'    : KEY_PLAY,
	'afttch'  : KEY_AFTTCH,
	'chnpres' : KEY_CHNPRES,
	'c'       : [KEY_0, KEY_7, KEY_CHNPRES],
	'c#'      : [KEY_10, KEY_COMA],
	'd'       : [KEY_1, KEY_8],
	'd#'      : [KEY_11, KEY_XPOSE],
	'e'       : [KEY_2, KEY_9],
	'f'       : [KEY_3, KEY_NOTES],
	'f#'      : [KEY_12, KEY_REC],
	'g'       : [KEY_4, KEY_CC],
	'g#'      : [KEY_CHANNEL, KEY_STOP],
	'a'       : [KEY_5, KEY_BEND],
	'a#'      : [KEY_ROTATE, KEY_PLAY],
	'b'       : [KEY_6, KEY_AFTTCH]
};

export default class QuNexus extends Midium {
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
				this.lightDown(KEYS[note], brightness);
			}
		}
		else if (typeof note === 'number' || Array.isArray(note)) {
			this.noteOff(note, brightness, LED_CHANNEL);
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
