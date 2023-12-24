import { defaultAbiCoder, keccak256 } from "ethers/lib/utils"

// Equivalent to keccak(abi.encode(address))
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

export default function hashAddress(address: string): string {
  return keccak256(defaultAbiCoder.encode(["address"], [address]))
}