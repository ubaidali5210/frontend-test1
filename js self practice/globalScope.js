let a = 300
if(true){
    let a =10;
    const b= 30;
    console.log("inner", a)
}

console.log(a)


function one(){
    const username ="ali"

    function two(){
        const web = "youtube"
        console.log(username)
        console.log(web)
    }
    two()
}
one()

if (true){
    const username = "ali"
    if(username==="ali"){
        const web ="youtube"
        console.log(username+web)
    }
}