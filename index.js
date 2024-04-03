


const getdata= async()=>{
    document.getElementById("dog-img").innerHTML=""

    try{
        let res = await  fetch("https://dog.ceo/api/breeds/image/random")
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