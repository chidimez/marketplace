import type { Chain } from "thirdweb";
import { avalancheFuji, liskSepolia, polygonAmoy } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xdC14c4336E9F6E8f617E978EF81052cbAAFEe67C",
    chain: liskSepolia,
    title: "Nigeria: Home",
    thumbnailUrl:
      "https://3bc5a0c1653b363afc61105e58abd008.ipfscdn.io/ipfs/Qma1ATryHnFMEpctXN2JU5Tyc186sKkeaSCfbkpow8BHkE/LZ8oPb3i.jpg",
    type: "ERC721",
  },

  {
    address: "0x3e453093c506716b9794F1926636affdB17e90dB",
    chain: liskSepolia,
    title: "Abstract: Nigeria",
    thumbnailUrl:
      "https://3bc5a0c1653b363afc61105e58abd008.ipfscdn.io/ipfs/QmSDda2AbobX5AW5oujSERvoYSusZyKzqNbVqhe9KGtEXy/Untitled%20design(3).png",
    type: "ERC721",
  },

  
];
