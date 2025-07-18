
//value to asscikey 
function asscitobytpes(ascistring){
    let arr=[]
    for(let i=0;i<ascistring.length;i++){
        arr.push(ascistring[i].charCodeAt(0))
    }
    return arr
}
const asciikey=asscitobytpes("hello world")
console.log(asciikey)



//assci to value 
function valuetoasscii(arr){
    return new TextDecoder().decode(arr)
}
const value=valuetoasscii(new Uint8Array([100,68,45,108,97]))
console.log(value)

//uint8Array to base64

function base64(uint8array){
    return (Buffer.from(uint8array).toString("base64"));
    


}
console.log(base64(new Uint8Array([99,100,101,102,103,104])))
console.log(base64("hello messi 0999876123456 12346 123345 1234123"))
