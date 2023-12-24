import { Interface, ParamType, keccak256, solidityKeccak256 } from "ethers/lib/utils";
import { ZERO_HASH } from "./constants";
import hashAddress from "./keccak";


type TODO = any

export default function fromTargetAndCalldataToHash(target: string, calldata: string, abiLike: any): string {
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
  parsed.functionFragment.inputs.forEach((inputData: ParamType) => {

    // For each argument, encode argument
    // All arguments are encoded as
    // Always double iteration
    // Figure out convention for what leads, then re-apply to the function below
    const argument = parsed.args[inputData.name]
    encodedParams.push(encodeInput(inputData, argument))
  })

  const hashedParams = solidityKeccak256(["bytes32[]"], [encodedParams])

  console.log("parsed.args", parsed.args)
  console.log("encodedParams", encodedParams)
  return encodeFromParsed(target, parsed.sighash, hashedParams)
}


// NOTE: By definition we encode all arrays of non addresses as zero hashes
// This MAY be changed by just skipping those
// That said, this is easier to generalize this way
function encodeInput(input: ParamType, value: string | string[]) {

  /// RECURSIVE CASES ///
  // For each etc...
  // For Each of them we have to iterate
  // So we gotta do more recursive calls
  if(input.baseType == "tuple") {
    // If this is the case, then the values are inputs of the tuple, all we have to do is recursively iterate the tuple
    return (value as string[]).map((entry, counter) => encodeInput(input.components[counter], entry))
  }

  if(input.baseType == "array") {
    // If this is the case, then value is a list
    return (value as string[]).map(entry => encodeInput(input.arrayChildren, entry))
  }

  /// BASE CASES ///
  if(input.baseType == "address") {
    // This is an address, we hash
    return keccak256(value as string)
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


function encodeFromParsed(target: string, selector: string, hashedInput: string) {
  // We just keccak these 3 into one
  // Selector is correctly packed
  // Hashed input is already 32 bytes
  return solidityKeccak256(["bytes32", "bytes4", "bytes32"], [hashAddress(target), selector, hashedInput])
}