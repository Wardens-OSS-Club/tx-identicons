"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromContractDataToSvg = exports.fromHashToSvg = void 0;
var jdenticon_1 = require("jdenticon");
var fromCalldataAndAbi_1 = require("./fromCalldataAndAbi");
// Representation
// This is not the point, this is a way to make the point easier to understand
// We can never guarantee perfect uniqueness here, as any image with compression would, by definition lose some data
// We could add shades to allow 
function fromHashToSvg(hash) {
    return jdenticon_1.toSvg(hash, 256 * 2);
}
exports.fromHashToSvg = fromHashToSvg;
// Given
// Target
// ABI
// Calldata
// Return the SVG Representation of the hash digest
function fromContractDataToSvg(target, abiLike, calldata) {
    var digested = fromCalldataAndAbi_1.default(target, abiLike, calldata);
    return fromHashToSvg(digested);
}
exports.fromContractDataToSvg = fromContractDataToSvg;
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
function fromContractDataToHash(target, abiLike, calldata) {
    return fromCalldataAndAbi_1.default(target, abiLike, calldata);
}
exports.default = fromContractDataToHash;
