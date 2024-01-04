- Reference Solidity vs TS test for common operation
  - Foundry setup / Logs
    - Install Foundry
    - Compile Contracts (demo of encoding of random stuff)
    - Given deployed Contract, re-deploy on Ganache to test the return value
  - Unit tests

- Test all hashing cases
  - As in combination of structs, arrays, etc..

- Stretch: Generate test case, then hash it, then compare result via subprocess or similar vs either Foundry or via DD-Tool-Package

- Show usage against a few common operations (e.g. Uniswap USDC -> ETH swap)

- Contract to Setup UI
  - UI downloads Contract from Etherscan API
  - Allows to setup values or w/e
  - Show encoding


- Tooling to setup Gitbook like UI
  - Given Contract (Address + ABI)
  - Given all functions
  - Generate a UI that allows to verify if a call is valid or not (is the calldata from the contract?)
  - Generate a UI that allows to build the image / hash for the call