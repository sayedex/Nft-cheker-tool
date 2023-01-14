import { InjectedConnector } from '@web3-react/injected-connector';
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const RPC_URLS = {
	1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
	4: 'https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
	56: "https://bsc-dataseed.binance.org/",
};

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 1, 3, 4, 5, 42 ,56]
});


export const walletconnect = new WalletConnectProvider({
	rpc: {
        56: "https://bsc-dataseed.binance.org/",
	},
    chainId:56,
    infuraId:"d46dbd68f6df489cb73f9f2613eb8ccf",
	qrcode: true,
	pollingInterval: 15000
});


// export function resetWalletConnector(connector) {
// 	if (connector && connector instanceof WalletConnectConnector) {
// 		connector.walletConnectProvider = undefined;
// 	}
// }

//coinbase
//  export const walletlink = new WalletLinkConnector({
// url: RPC_URLS[56],
// 	appName: 'demo-app',
// supportedChainIds: [ 1, 4 ]
// });