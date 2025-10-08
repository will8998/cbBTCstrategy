import { Abi } from "viem";

export const NETWORK = {
  name: "base",
};

export const ADDRESSES = {
  contract: "0x6264cF27De811326977f30a2f0B0a12B90914576", // Strategy contract (Base)
  toshi: "0x6264cF27De811326977f30a2f0B0a12B90914576",
  tostr: "0x6264cF27De811326977f30a2f0B0a12B90914576", // placeholder for unified CA per request
  dead: "0x000000000000000000000000000000000000dEaD",
  pool: "0x6264cF27De811326977f30a2f0B0a12B90914576",
};

export const TOSHI_ABI: Abi = [
  { type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ name: "", type: "address" }], outputs: [{ type: "uint256" }] },
];

export const STRATEGY_ABI: Abi = [
  { type: "function", name: "getOrderCount", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  {
    type: "function",
    name: "orders",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [
      { name: "ethSpent", type: "uint256" },
      { name: "toshiBought", type: "uint256" },
      { name: "entryPrice", type: "uint160" },
      { name: "sold", type: "bool" },
    ],
  },
  { type: "event", name: "ToshiBought", inputs: [
    { name: "orderId", type: "uint256", indexed: true },
    { name: "ethSpent", type: "uint256", indexed: false },
    { name: "toshiBought", type: "uint256", indexed: false },
  ] },
  { type: "event", name: "ToshiSold", inputs: [
    { name: "orderId", type: "uint256", indexed: true },
    { name: "ethReceived", type: "uint256", indexed: false },
    { name: "profit", type: "uint256", indexed: false },
  ] },
  // plausible public functions to advance machine
  { type: "function", name: "triggerBuy", stateMutability: "nonpayable", inputs: [], outputs: [] },
  { type: "function", name: "process", stateMutability: "nonpayable", inputs: [], outputs: [] },
  { type: "function", name: "buy", stateMutability: "nonpayable", inputs: [], outputs: [] },
];

export const V3_POOL_ABI: Abi = [
  {
    type: "function",
    name: "slot0",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "sqrtPriceX96", type: "uint160" },
      { name: "tick", type: "int24" },
      { name: "observationIndex", type: "uint16" },
      { name: "observationCardinality", type: "uint16" },
      { name: "observationCardinalityNext", type: "uint16" },
      { name: "feeProtocol", type: "uint8" },
      { name: "unlocked", type: "bool" },
    ],
  },
];

export const POLL_INTERVAL_MS = 30_000;


