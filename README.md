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

## Emojis

Each emoji is mapped to the value of a nibble (one hex digit)

Since we have found 256 emojis, we can cut the length by half

One address can be represented by 20 emojis

One hash (32 bytes) can be represented by 32 emojis

## Algorithm

An Identicon Hash is

Hash(Target, Selector, HashedCalldata)


### Calldata encoding 

- For each input, Apply the Hash(input)

- If the input is a struct, or an array apply the algorithm to each element
- If the input is an address, take it's hash to the position
- If the input is not an address, take the hash of the empty string

# Contributing

Check the TODO, create an issue saying you're working on it

Send a PR