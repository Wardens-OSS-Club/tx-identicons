// Given a Hash
// Represent it in a sequence of emojis

// Manually gone and looked at different shapes
// Skipping emojis that look too similar
// NOTE: I could have searched way more
// I have yet to go through https://emojipedia.org/objects and onwards 
const ARBITRARY_LIST_OF_EMOJIS = [
  "🌲",
  "🍄",
  "🌸",
  "🌹",
  "🌓",
  "🪐",
  "⭐",
  "🌤️",
  "🌀",
  "🌈",
  "🌊",
  "🤠",
  "🥳",
  "😎",
  "🤯",
  "🤮",
  "😈",
  "💀",
  "💩",
  "🤡",
  "👺",
  "👻",
  "👽",
  "👾",
  "🤖",
  "😻",
  "🙈",
  "👍",
  "👊",
  "🤝",
  "🙏",
  "💅",
  "💪",
  "🦵",
  "🦶",
  "🧠",
  "🦷",
  "👀",
  "👅",
  "👄",
  "🩸",
  "🤰",
  "🐵",
  "🦍",
  "🐶",
  "🐕",
  "🐺",
  "🦊",
  "🦁",
  "🦄",
  "🐮",
  "🐷",
  "🐏",
  "🦃",
  "🐥",
  "🦉",
  "🦆",
  "🦩",
  "😂",
  "🌍",
  "🚗",
  "🗿",
  "🌋",
  "🗽",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶️",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🥜",
  "🌰",
  "🍞",
  "🥐",
  "🥖",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🌯",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍝",
  "🍱",
  "🍙",
  "🍚",
  "🍜",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥡",
  "🍦",
  "🍧",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍼",
  "☕",
  "🍵",
  "🍶",
  "🍾",
  "🍷",
  "🍹",
  "🍺",
  "🥂",
  "🥃",
  "🥤",
  "🧃",
  "🧉",
  "🥢",
  "🍽️",
  "🔪",
  "🏺",
  "🎃",
  "🎆",
  "🧨",
  "✨",
  "🎈",
  "🎉",
  "🎋",
  "🎎",
  "🎏",
  "🎐",
  "🎁",
  "🎟️",
  "🏮",
  "🎖️",
  "🏆",
  "⚽",
  "⚾",
  "🏀",
  "🏐",
  "🏈",
  "🎾",
  "🥏",
  "🎳",
  "🏏",
  "🥍",
  "🏓",
  "🏸",
  "🥊",
  "🥋",
  "⛳",
  "🥅",
  "⛸️",
  "🎣",
  "🤿",
  "🎽",
  "🛷",
  "🥌",
  "🎯",
  "🪀",
  "🪁",
  "🔫",
  "🎱",
  "🔮",
  "🎮",
  "🕹️",
  "🎰",
  "🎲",
  "🧩",
  "♠️",
  "♥️",
  "♦️",
  "♣️",
  "♟️",
  "🃏",
  "🀄",
  "🎴",
  "🎭",
  "🖼️",
  "🎨",
  "🗺️",
  "🧭",
  "🏕️",
  "🏖️",
  "🏞️",
  "🏟️",
  "🏛️",
  "🏗️",
  "🧱",
  "🏠",
  "🏥",
  "🏭",
  "🏯",
  "🏰",
  "💒",
  "🗼",
  "🕌",
  "🛕",
  "🕍",
  "⛩️",
  "🕋",
  "⛲",
  "⛺",
  "♨️",
  "🎠",
  "🎡",
  "🎢",
  "💈",
  "🎪",
  "🛎️",
  "🚂",
  "🚆",
  "🚎",
  "🚑",
  "🚔",
  "🚚",
  "🛵",
  "🛺",
  "🚲",
  "🛴",
  "🛹",
  "🛤️",
  "🛢️",
  "🚨",
  "🚦",
  "🛑",
  "🚧",
  "⚓",
  "🛶",
  "🛳️",
  "✈️",
  "🪂",
  "🚁",
  "💺",
  "🚀",
  "🛰️",
  "🛸",
]


// console.log("len", ARBITRARY_LIST_OF_EMOJIS.length)

// Dumb af

// Replace 16 with the first 16 digits
// Demo string
// 0x5ac989f52ea4c399343f6c0cf5a4810fc1bdac5773de37ca0cd0a8287f75a5c6


// Parse from hex, no need for any weirdness
function fromNibbleCharToNumber(nibble: string): number {
  return parseInt(nibble, 16)
}

function fromHexStringToNibbles(hash: string): number[] {
  // Check and remove 0x
  // Copy then replace
  // Copy so we avoid any weirdness
  const trimmed = JSON.parse(JSON.stringify(hash)).replace(/^0x/, "")

  let converted = []
  for(let i = 0; i < trimmed.length; i+=2) {
    let charA = trimmed.charAt(i);
    let charB = trimmed.charAt(i + 1);
    let string = charA + charB // as string
    converted.push(string)
  }

  return converted.map(nibble => fromNibbleCharToNumber(nibble))
}



function fromNibbleNumberToEmoji(value: number): string {
  return ARBITRARY_LIST_OF_EMOJIS[value]
}

export function fromHexStringToEmojis(hash: string): string[] {
  const asNibblesNumbers = fromHexStringToNibbles(hash)
  return asNibblesNumbers.map(nibble => fromNibbleNumberToEmoji(nibble))
}
export default function fromHexStringToEmojiString(hash: string): string {
  const asNibblesNumbers = fromHexStringToNibbles(hash)
  return asNibblesNumbers.map(nibble => fromNibbleNumberToEmoji(nibble)).join("")
}
