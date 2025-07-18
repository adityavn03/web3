import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchpad1 } from './compount/Tokenlaunchpad';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/0E58nG-ys1413-3meSdCOl_YYiTgWMS7"}>
       <WalletProvider wallets={[]} autoConnect>
         <WalletModalProvider>
           <div>
             <WalletMultiButton/>
             <WalletDisconnectButton/>
           </div>
           <TokenLaunchpad1/>
         </WalletModalProvider>
       </WalletProvider>
        
      </ConnectionProvider>
    </>
  )
}

export default App
