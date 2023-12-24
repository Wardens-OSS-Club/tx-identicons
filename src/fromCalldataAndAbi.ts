import { Interface, ParamType, keccak256 } from "ethers/lib/utils";
import { ZERO_HASH } from "./constants";


type TODO = any

export default function fromTargetAndCalldataToHash(address: string, calldata: string, abiLike: any): TODO {
  // SEE: https://github.com/ethers-io/ethers.js/issues/366#issuecomment-444384084
  // Basically just abi.deconding it back
  let iface = new Interface(abiLike);
  let tx = {
    data: calldata
  };
  
  let parsed = iface.parseTransaction(tx);
  let encodedParams = [] // keccak(encodeParam)
  // From parsed apply the algo
  parsed.args // We have to recursively apply the system // Either it's an hash (directly), or it's the hash of 0, or it's the result from a recursive call
  parsed.args.map((argument, counter) => {
    // For each argument, encode argument
    // All arguments are encoded as
      parsed.functionFragment.inputs.map(inputFromFunction => ) // TODO: WE have types from here
  })
}


function encodeInput(inputDefinition: ParamType, argument: any) {
  /// RECURSIVE CASES ///
  // For each etc...
  // For Each of them we have to iterate
  // So we gotta do more recursive calls
  if(inputDefinition.baseType == "tuple") {
    return argument.map() // TODO:
  }

  if(inputDefinition.baseType == "array") {
    return argument.map() // TODO:
  }

  /// BASE CASES ///
  if(inputDefinition.baseType == "address") {
    // This is an address, we hash
    return keccak256(argument)
  }

  // return hash of 0 since this is not triggering the recursion nor is an address
  // NOTE: If you want to add hue based on inputs, you could add it here
  // IMO: You would just hook into a specific param for the hue, no need to make this super complex
  // Just re-parse and figure it out then
  return ZERO_HASH; // TODO: Verify that this is the hash o
}
// From Ethers Encoded to Value
// if is address, then you add to digest
// if it's not, then you ignore


// Target

// Selector

// Data encoding (Recursive Encoding of every address)

// Steps
// For each input, Apply the Input Hashing Algorithm

// If the input is an address, add it's hash to the position
// If the input is not an address, take the hash of the 0 value
// If the input is a struct, apply the algorithm to each element of the struct

// Take the hash of the hashes you have identified

// I need

function encodeFromParsed(target: string, selector: string, hashedInput: string): string {
  // We just keccak these 3 into one
}