
import {Tokenlist} from "../Constants/tokens"

export const pools:PoolConfigBaseProps[] = [
    {
      sousId: 0,
      stakingToken: Tokenlist.cake,
      earningToken: Tokenlist.cake,
      contractAddress:"0x8dF4A7502C1c1f6c8D6138405Db5F0670Bf66d12",
      harvest: true,
      tokenPerBlock: '10',
      sortOrder: 1,
      isFinished: false,
    },
    // {
    //     sousId: 1,
    //     stakingToken: Tokenlist.cake,
    //     earningToken: Tokenlist.cake,
    //     contractAddress: {
    //       97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
    //       56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    //     },
    //     harvest: true,
    //     tokenPerBlock: '10',
    //     sortOrder: 1,
    //     isFinished: false,
    //   },


]