const cargarRazas=async ()=>{
    const api=await fetch("https://dog.ceo/api/breeds/list/all");
    const response=await api.json();
    console.log(response.message);
    let comboRazas=document.querySelector("#razas");
    data=response.message;
    Object.keys(data).forEach(key=>{
        comboRazas.innerHTML+=`
        <option value="${key}">${key}</option>
        `
    });
    }
    const changeDog=async()=>{
        let raza=document.querySelector("#razas").value;
        const api= await fetch("https://dog.ceo/api/breed/"+raza+"/images/random");
        const response= await api.json();
        console.log(response)
        const div=document.querySelector("#perritos");
        div.innerHTML=`<img src="${response.message}">`
    }
    setInterval(changeDog,3000);