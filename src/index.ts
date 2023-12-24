import { defaultAbiCoder, keccak256, solidityKeccak256 } from "ethers/lib/utils";
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


console.log(keccak256(defaultAbiCoder.encode(["address"], ["0x3Fa73f1E5d8A792C80F426fc8F84FBF7Ce9bBCAC"])))


// TODO: Encoding
// https://github.com/ethers-io/ethers.js/issues/718

/**
 * /home/ethers> ethers
homestead> ethers.utils.defaultAbiCoder.encode([ "string", "string" ], [ "Hello", "world" ])
'0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000548656c6c6f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005776f726c64000000000000000000000000000000000000000000000000000000'
homestead> ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode([ "string", "string" ], [ "Hello", "world" ]))
'0x5ac989f52ea4c399343f6c0cf5a4810fc1bdac5773de37ca0cd0a8287f75a5c6'
 * 
 */

// Then replace each encoded "thingy" that is unitary type, that is not an addy, as keccak of 0
// Pretty comfy