
document.getElementById("jump").addEventListener("click",getPic)

let image = document.getElementById("image")


function getPic()
{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        image.src = data.message

            })
    .catch((err)=>{console.log(err,"unable to fetch data")})
}