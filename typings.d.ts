enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}


type MoralisNFT = {
  token_address:any
  token_id:any 
  name:any
  
}

enum filterItem {
  LowToHigh="lowprice",
  HighToLow="highprice",
  TokenID="tokenID"
}

type NFT ={
  id:any
tokenId:any
metadataUrl:any
currentAskPrice:any
}


type NFT_Metada = {

  
}

type Token ={
    id: ID!
name: String!
symbol: String!
decimals: number!
}

type User = {
    id: ID!
address: string!
pool: Pool
stakeAmount: number!
staketoken: Token!
}
type pool = {
    id: ID!
    Staketoken: Token
    rewardtoken: Token
    factoryad: string!
    reward: number!
    limit: number
    block: number!
    endBlock: number!
    timestamp: number!

}
 type Theme = 'light' | 'dark';
 type Connect = true | false;
 type Global = {
    theme: Theme;
    rstate:number
    address: string;
    changeTheme: (theme: Theme) => void;
    Web3:any
    connected:any
    connectedweb3:() =>void
    disconnectedweb3:()=>void
    ref:()=>void
    setMeta:any,
    NFT:any

  };

  type Display ={
width:number,

  }

  type PoolSelector = 'All Pool' | 'My Pool';



  type SerializedToken ={
"":{
  name:string
  chainId: number
  address: string
  decimals: number
  symbol?: string
  projectLink?: string
}
  }


  type PoolConfigBaseProps ={
    sousId: number
    contractAddress: Address
    // poolCategory: PoolCategory
    stakingToken:{},
    earningToken:{}
    tokenPerBlock: string
    sortOrder?: number
    harvest?: boolean
    isFinished?: boolean
    enableEmergencyWithdraw?: boolean
  }
  


  type nfts = {
    id: ID!

    "tokenId"
    tokenId: string
  
    "otherId"
    otherId: string
  
    "Collection address"
    collection: Collection
  
    "Metadata url"
    metadataUrl: string
  
    "Updated at"
    updatedAt: BigInt
  
    "Current ask price"
    currentAskPrice: any
  
    "Current seller"
    currentSeller: string
  
    "Latest traded price in BNB"
    latestTradedPriceInBNB: string
  
    totalTrades: string
  
    "Transaction history"
    transactionHistory: 
  
    "Ask history"
    askHistory: AskOrder
     bidder: Bid
    "isTradable"
    isTradable: Boolean!

  }

  type Collection= {
    id: ID!
  
    name: string!

    symbol: string!

    active: Boolean!
  
    totalTrades: string!
    totalVolumeBNB: string!
  
    numberTokensListed: BigInt!

    nfts: nfts<number> | undefined 
  
   
    dayData: CollectionDayData!
  }
  type CollectionDayData = {
    id: ID!
  
    "Start date (timestamp)"
    date: Int!
  
    "Collection"
    collection: Collection!
  
    "Daily volume (in BNB)"
    dailyVolumeBNB: BigDecimal!
  
    "Daily unique trades"
    dailyTrades: BigInt!
  }

  type Propertis = {
    trait_type:any,
    value:any
  }


  type metaurl = {
    image:string,
    description:string,
    name:string,
    attributes:tair
  }
  type tair = {

trait_type: string,
value:string
  }

  type Bidder = {
    bidprice:number,
    bidowner:string,
    id:string
    bid:nfts
    timestamp:number
  }

   type Web3State = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collection: any 

  }

  type nftdata = {
    amount: string
block_number: string
block_number_minted: string
contract_type: "ERC721"
last_metadata_sync: string
last_token_uri_sync: string
metadata: null
name: string
owner_of: string
symbol: string
token_address:string
token_hash: string
token_id:string
token_uri:string,
image:string

  }


type Getuserinput =  {
  id:ID
}  

type metadata = {
  image:any,
  token_id:any,
  name:any,
  description:any,
  contract:any
}