


const getdata= async()=>{
    document.getElementById("dog-img").innerHTML=""

    try{
        let res = await  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'")
        let data= await res.json()

        let img=document.createElement("img")
        img.src=data.message
        document.getElementById("dog-img").append(img)
    }
    catch(error){
        console.log(error);
    }
}
document.getElementById("btn").addEventListener("click",()=>{
    getdata()
})