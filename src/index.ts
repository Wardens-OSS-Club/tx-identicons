import { defaultAbiCoder, keccak256 } from "ethers/lib/utils";
import { toSvg } from "jdenticon";
import fromTargetAndCalldataToHash from "./fromCalldataAndAbi";


// Representation
// This is not the point, this is a way to make the point easier to understand
// We can never guarantee perfect uniqueness here, as any image with compression would, by definition lose some data
// We could add shades to allow 
export function fromHashToSvg(hash: string): string {
  return toSvg(hash, 256*2);
}


// Given
// Target
// ABI
// Calldata
// Return the SVG Representation of the hash digest
export function fromContractDataToSvg(target: string, abiLike: any, calldata: string): string {
  const digested = fromTargetAndCalldataToHash(target, abiLike, calldata)
  return fromHashToSvg(digested);
}


// TODO: Most likely put representation somewhere else
// NOTE: 64 emojis in a specific sequence have 64! combinations which is 2^89, meaning that those are all of the combos you need

// This + a differ would be sufficient
// Although a differ could just be applied to hashes
// Meaning there is no perfect solution


// Given
// Target
// ABI
// Calldata
// Return the hash digest that represents it
// See README for discussion on risk of clash
export default function fromContractDataToHash(target: string, abiLike: any, calldata: string): string {
  return fromTargetAndCalldataToHash(target, abiLike, calldata)
}