import {EventLog} from "web3";

export enum TradeType {
  buy = 'buy',
  sell = 'sell'
}

export interface TokenMetadata {
  userAddress: string
  name: string
  ticker: string
  description: string
  image: string
}

export interface TradeEventLog {
  type: TradeType
  data: EventLog
}
