# Identicon TX

## Idea

Addresses are (in 99% of cases) the reason why you lose money in phishing attacks

## Requirement

We need a pattern interrupt to show people they are about to lose all of their tokens

## Solution

Hash all inputs down to a bytes32 which represents that unique "spell"

This means that a Swap of USDC to ETH on Uniswap, has the same icon for all people!

## Preview

`yarn dev`

Paste into

https://www.svgviewer.dev/


## Algorithm

Hash(Target, Selector, HashedCalldata)

// Target

// Selector

// Calldata encoding (Recursive Encoding of every address)

// Steps
// For each input, Apply the Input Hashing Algorithm

// If the input is a struct, or an array apply the algorithm to each element
// If the input is an address, take it's hash to the position
// If the input is not an address, take the hash of the empty string

// Take the hash of the hashes you have identified