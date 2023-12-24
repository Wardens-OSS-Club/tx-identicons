import { toSvg } from "jdenticon";

// From Ethers Encoded to Value
// if is address, then you add to digest
// if it's not, then you ignore



// https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/

// Target

// Selector

// Data encoding (Recursive Encoding of every address)

// Steps
// For each input, Apply the Input Hashing Algorithm

// If the input is an address, add it's hash to the position
// If the input is not an address, take the hash of the 0 value
// If the input is a struct, apply the algorithm to each element of the struct

// Take the hash of the hashes you have identified


// Representation
// This is not the point, this is a way to make the point easier to understand
// We can never guarantee perfect uniqueness here, as any image with compression would, by definition lose some data
// We could add shades to allow 
const svgString = toSvg("adasdasasokaoskdopasdopaksodkdqdqwd", 256*2);
console.log(svgString);

// NOTE: 64 emojis in a specific sequence have 64! combinations which is 2^89, meaning that those are all of the combos you need

// This + a differ would be sufficient
// Although a differ could just be applied to hashes
// Meaning there is no perfect solution