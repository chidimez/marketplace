import type { Chain } from "thirdweb";
import { liskSepolia } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x8C9a5565851F57D71B957E6507675b8Cee1B634b",
    chain: liskSepolia,
  },
  
  
];
