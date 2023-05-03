// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "../lib/forge-std/src/Script.sol";
import "../src/NFTLaunchPad.sol";
import "../src/NFTMarketPlace.sol";

contract DeployScript is Script {
    LaunchPadFactory launchpadFactory;
    LaunchPad launchpad;
    NFTMarketplace marketPlace;
    function setUp() public {}

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        launchpadFactory = new LaunchPadFactory(0x31D97fdb6E31955Ad79899Eb0D28F2d0431684A0);
        launchpadFactory.whitelistAddress(0x31D97fdb6E31955Ad79899Eb0D28F2d0431684A0);
        address _launchpad = launchpadFactory.createLaunchPad{value: 0.006 ether}("Benz", "BNZ","ipfs://Qmd9FE1XKkdpddUUG9nUkgQruVV2B8aE2cuCayS1QcWRTS/");
        launchpad = LaunchPad(payable(_launchpad));
        marketPlace = new NFTMarketplace();

        vm.stopBroadcast();
    }
}
