const launchpadContract = {
  address: "0x7C1898D5B4A23c1B7897a6e3247eA085e65d0B85",
  abi: [
    {
      inputs: [
        { internalType: "string", name: "_name", type: "string" },
        { internalType: "string", name: "_symbol", type: "string" },
        { internalType: "address", name: "_owner", type: "address" },
        { internalType: "string", name: "_uri", type: "string" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_endTime",
          type: "uint256",
        },
      ],
      name: "LaunchPadEnded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_startTime",
          type: "uint256",
        },
      ],
      name: "LaunchPadStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "NFTperAddr",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "amtRaised",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "baseURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_amtofNFT", type: "uint256" }],
      name: "depositETH",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "duration",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "endTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "mintedTokenId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numberOfSubscribers",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "price",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_duration", type: "uint256" },
        { internalType: "uint256", name: "_nftprice", type: "uint256" },
        {
          internalType: "uint256",
          name: "_totalAmountNeeded",
          type: "uint256",
        },
      ],
      name: "startLaunchPad",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "startTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "subscriberIndex",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "subscribers",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalAmountNeeded",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalNFTCommitment",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalNftsForSale",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "recipient", type: "address" }],
      name: "transferLeftoverNFT",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "inputAddress",
          type: "address",
        },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "withdrawETH",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawNFT",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ],
};

const launchpadFactory = {
  address: "0xc753A5B1406Ae6eaad90Bd7e387Ed5f4833543a9",
  abi: [
    {
      inputs: [
        { internalType: "address", name: "_DAOAddress", type: "address" },
      ],
      type: "constructor",
      stateMutability: "nonpayable",
    },
    {
      name: "LaunchPadCreated",
      inputs: [
        { internalType: "address", name: "_launchpad", type: "address" },
        { internalType: "address", name: "_seller", type: "address" },
      ],
      type: "event",
    },
    {
      name: "Admins",
      inputs: [{ internalType: "address", name: "", type: "address" }],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "LaunchPads",
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      outputs: [
        { internalType: "string", name: "name", type: "string" },
        { internalType: "address", name: "creator", type: "address" },
        { internalType: "uint256", name: "timeCreated", type: "uint256" },
        { internalType: "address", name: "padAddress", type: "address" },
      ],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "createLaunchPad",
      inputs: [
        { internalType: "string", name: "_name", type: "string" },
        { internalType: "string", name: "symbol", type: "string" },
        { internalType: "string", name: "uri", type: "string" },
      ],
      outputs: [
        { internalType: "address", name: "_launchpad", type: "address" },
      ],
      type: "function",
      stateMutability: "payable",
    },
    {
      name: "listingFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "removeAdmin",
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      type: "function",
      stateMutability: "nonpayable",
    },
    {
      name: "setAdmin",
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      type: "function",
      stateMutability: "nonpayable",
    },
    {
      name: "setListingFee",
      inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
      type: "function",
      stateMutability: "nonpayable",
    },
    {
      name: "totalLaunchPads",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "whitelistAddress",
      inputs: [{ internalType: "address", name: "_address", type: "address" }],
      type: "function",
      stateMutability: "nonpayable",
    },
    {
      name: "whitelistedAddresses",
      inputs: [{ internalType: "address", name: "", type: "address" }],
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "withdraw",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      type: "function",
      stateMutability: "nonpayable",
    },
    { name: null, type: "receive", stateMutability: "payable" },
  ],
};

const marketplaceContract = {
  address: "0xC2b0BAD4084c10c458F98805889E04956152F27a",
  abi: [
    { type: "constructor", stateMutability: "nonpayable" },
    {
      name: "MarketItemCreated",
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "itemId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "nftContract",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        { internalType: "address", name: "seller", type: "address" },
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "uint256", name: "price", type: "uint256" },
        { internalType: "bool", name: "sold", type: "bool" },
      ],
      type: "event",
    },
    {
      name: "MarketItemSold",
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "itemId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "nftContract",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        { internalType: "address", name: "seller", type: "address" },
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "uint256", name: "price", type: "uint256" },
        { internalType: "bool", name: "sold", type: "bool" },
      ],
      type: "event",
    },
    {
      name: "ListItemForSale",
      inputs: [
        { internalType: "address", name: "_nftcontract", type: "address" },
        { internalType: "uint256", name: "_tokenId", type: "uint256" },
        { internalType: "uint256", name: "_price", type: "uint256" },
      ],
      type: "function",
      stateMutability: "payable",
    },
    {
      name: "buyAsset",
      inputs: [{ internalType: "uint256", name: "itemId", type: "uint256" }],
      type: "function",
      stateMutability: "payable",
    },
    {
      name: "fetchItemListed",
      outputs: [
        {
          internalType: "struct NFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "fetchMarketItems",
      outputs: [
        {
          internalType: "struct NFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "fetchMyNfts",
      outputs: [
        {
          internalType: "struct NFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "listingPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "marketItems",
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      outputs: [
        { internalType: "uint256", name: "itemId", type: "uint256" },
        { internalType: "address", name: "nftContract", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "address payable", name: "seller", type: "address" },
        { internalType: "address payable", name: "owner", type: "address" },
        { internalType: "uint256", name: "price", type: "uint256" },
        { internalType: "bool", name: "sold", type: "bool" },
      ],
      type: "function",
      stateMutability: "view",
    },
    {
      name: "withdrawFee",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      type: "function",
      stateMutability: "nonpayable",
    },
  ],
};

module.exports = {
  launchpadContract,
  launchpadFactory,
  marketplaceContract,
};
