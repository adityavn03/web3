const {PublicKey}=require("@solana/web3.js")
const {ASSOCIATED_TOKEN_PROGRAM_ID,TOKEN_PROGRAM_ID}=require("@solana/spl-token")
const useraddress=new PublicKey("2ZmRSWzmDKxQ67badGPneVZdknHfbTMHhBQrTxAq9yQm")
const tokenmintaddress=new PublicKey("ALVE6f8wd95LW5tK5bwkD41LJ3MsY5t499jZ2wfGzYYL")
const getassociatedtokenaddress=(useraddress,tokenmintaddress)=>{
   return PublicKey.findProgramAddressSync(
    [
        useraddress.toBuffer(),
        tokenmintaddress.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),

    ],
    ASSOCIATED_TOKEN_PROGRAM_ID
   )
}
const [associatedtokenaddress,bump]=getassociatedtokenaddress(useraddress,tokenmintaddress)
console.log(`Associated token address ${associatedtokenaddress} and bump ${bump}`)