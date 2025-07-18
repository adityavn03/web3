import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';

export const App = () => {

    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/0E58nG-ys1413-3meSdCOl_YYiTgWMS7"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <div>
                        <h4>It is the AirDrop</h4>
                    </div>
                    <Airdrop />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
