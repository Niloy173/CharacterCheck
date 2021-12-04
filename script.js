function setBack()
{
    const value = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#"+ value;
}

setInterval(()=>{
    setBack();
},2000);


document.getElementById("click").addEventListener("click",function(){

    let val = document.getElementById('userValue').value;
    // alert(val);

    if(val !=""){
    document.getElementById('image').setAttribute("src",`https://joeschmoe.io/api/v1/${val}`);
    
    }else{
        alert("Please insert any name");
        
    }
})
