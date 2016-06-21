export const LED_CHANNEL = 1;
export const DEFAULT_BRIGHTNESS = 16;

export const KEY_0 = 0x30;
export const KEY_10 = 0x31;
export const KEY_1 = 0x32;
export const KEY_11 = 0x33;
export const KEY_2 = 0x34;
export const KEY_3 = 0x35;
export const KEY_12 = 0x36;
export const KEY_4 = 0x37;
export const KEY_CHANNEL = 0x38;
export const KEY_5 = 0x39;
export const KEY_ROTATE = 0x3a;
export const KEY_6 = 0x3b;
export const KEY_7 = 0x3c;
export const KEY_COMA = 0x3d;
export const KEY_8 = 0x3e;
export const KEY_XPOSE = 0x3f
export const KEY_9 = 0x40;
export const KEY_NOTES = 0x41;
export const KEY_REC = 0x42;
export const KEY_CC = 0x43;
export const KEY_STOP = 0x44;
export const KEY_BEND = 0x45;
export const KEY_PLAY = 0x46;
export const KEY_AFTTCH = 0x47;
export const KEY_CHNPRES = 0x48;

export const KEYS = {
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

export const WHITE_KEYS = [
	KEY_0, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9,
	KEY_NOTES, KEY_CC, KEY_BEND, KEY_AFTTCH, KEY_CHNPRES
];

export const BLACK_KEYS = [
	KEY_10, KEY_11, KEY_12, KEY_CHANNEL, KEY_ROTATE, KEY_COMA, KEY_XPOSE,
	KEY_REC, KEY_STOP, KEY_PLAY
];
