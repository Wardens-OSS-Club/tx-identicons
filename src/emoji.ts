// Given a Hash
// Represent it in a sequence of emojis

// Manually gone and looked at different shapes
// Skipping emojis that look too similar
// NOTE: I could have searched way more
// I have yet to go through https://emojipedia.org/food-drink and onwards 
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
  "🗽"
]

console.log("len", ARBITRARY_LIST_OF_EMOJIS.length)

// Dumb af

// Replace 16 with the first 16 digits
// Demo string
// 0x5ac989f52ea4c399343f6c0cf5a4810fc1bdac5773de37ca0cd0a8287f75a5c6

const NIBBLE_LETTERS_TO_NUMBER = {
  "a": 10,
  "b": 11,
  "c": 12,
  "d": 13,
  "e": 14,
  "f": 15
}

function fromNibbleCharToNumber(nibble: string): number {
  if(NIBBLE_LETTERS_TO_NUMBER[nibble]) {
    return NIBBLE_LETTERS_TO_NUMBER[nibble]
  }

  return Number(nibble)
}

function fromHexStringToNibbles(hash: string): number[] {
  // Check and remove 0x
  // Copy then replace
  // Copy so we avoid any weirdness
  const trimmed = JSON.parse(JSON.stringify(hash)).replace(/^0x/, "")
  let converted: string[] = Array.from(trimmed)

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
