import { defineChain } from "thirdweb";

/**
 * All chains should be exported from this file
 */
export { avalancheFuji, sepolia, polygonAmoy } from "thirdweb/chains";

/**
 * Define any custom chain using `defineChain`
 */
export const liskSepolia = defineChain(4202); // don't actually use this
