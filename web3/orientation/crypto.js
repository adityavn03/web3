const crpyto=require('crypto')
const name="messi"
 const hash=crpyto.createHash('sha256').update(name).digest('hex')
 console.log(hash[1])
 let j=0;
 let i=true
 while(i){
     const hash=crpyto.createHash('sha256').update(`messi${j.toString()}`).digest('hex')
     if(hash[0]==0&&hash[1]==0&&hash[2]==0&&hash[3]==0&&hash[4]==0){
        i=false
        console.log(j)
     }
     j++


 }
