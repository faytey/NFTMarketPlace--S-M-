export const mantle = {
  id: 5001,
  name: "Mantle Testnet",
  network: "mantle",
  iconUrl: "https://i.imgur.com/Q3oIdip.png",
  iconBackground: "#000000",
  nativeCurrency: {
    decimals: 18,
    name: "BIT",
    symbol: "BIT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.mantle.xyz"],
      // public rpc url
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz",
    },
  },
  testnet: true,
};
