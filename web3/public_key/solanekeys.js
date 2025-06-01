//it will only work in type script onlygi
import {Keypair} from "@solana/web3.js"
import nacl from "tweetnacl";//labiray used to sign and verify
//generating the new keypair
const keypair=Keypair.generate();

//extract the public and private keys
const publickey=keypair.publicKey.toString();
const secretkey=keypair.secretKey;

//display
console.log("public key is "+publickey)
console.log("private key is "+secretkey)

//convert the message "hello world to a Uint8array"
const message=new TextEncoder().encode("hello world")
const signature=nacl.sign.detached(message,secretkey)
const result=nacl.sign.detached.verify(message,signature,keypair.publicKey.toBytes()) 
console.log(result)