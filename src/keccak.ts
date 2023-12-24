import { defaultAbiCoder, keccak256 } from "ethers/lib/utils"

// Equivalent to keccak(abi.encode(address))
export default function hashAddress(address: string): string {
  return keccak256(defaultAbiCoder.encode(["address"], [address]))
}