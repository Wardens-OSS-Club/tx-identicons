import { defaultAbiCoder, keccak256 } from "ethers/lib/utils";
import { toSvg } from "jdenticon";
import fromTargetAndCalldataToHash from "./fromCalldataAndAbi";


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



console.log(fromTargetAndCalldataToHash("0x3Fa73f1E5d8A792C80F426fc8F84FBF7Ce9bBCAC", "0x282d3fdf000000000000000000000000b1c05e80678bbcdf8fbca2b4820164313e4867d6000000000000000000000000000000000000000000000034f69370b524873a1f", ["function lock(address _account, uint256 _amount) external"]))