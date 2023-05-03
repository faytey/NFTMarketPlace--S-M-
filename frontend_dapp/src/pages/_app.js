import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  bscTestnet,
  sepolia,
  goerli,
} from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Layout from "@/components/Layout";
import { mantle } from "../hooks/mantle";

const { chains, provider } = configureChains(
  [bscTestnet, mainnet, polygon, optimism, arbitrum, sepolia, mantle, goerli],
  // [
  //   //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
  //   alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID1 }),
  //   publicProvider(),
  // ]
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <Layout provider={provider}>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
