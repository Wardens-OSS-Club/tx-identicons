import { keccak256, solidityKeccak256 } from "ethers/lib/utils";
import { toSvg } from "jdenticon";


// From Metamask to The whole thing


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


console.log(keccak256([])) // 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 // == ZERO_HASH
console.log(solidityKeccak256(["address"], ["0x3Fa73f1E5d8A792C80F426fc8F84FBF7Ce9bBCAC"]))


// TODO: Encoding
https://github.com/ethers-io/ethers.js/issues/718
