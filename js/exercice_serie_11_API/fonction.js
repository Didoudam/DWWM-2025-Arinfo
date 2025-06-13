function onProgress(pEvent){ 
    console.log(`chargement: ${((pEvent.loaded/pEvent.total)*100).toFixed(0)}%`); 
} 
function onError(){ 
    console.log('ERREUR RESEAU'); 
} 
function onLoad (){ 
    console.log(xhr.status); 
    console.log(xhr.response); 
    let meteo = JSON.parse(xhr.response)
    let paragrapheInfo = document.querySelector("#info")
    let iconSection = document.querySelector("#icon")
    paragrapheInfo.innerHTML=`il fait ${meteo.main.temp}°c`
    let iconCode = meteo.weather[0].icon
    iconSection.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

function demanderMeteo(pPosition){
    const apiKey = "9a8d8a7a81afa5f1aa63c62274701674"; 
    xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${pPosition.coords.latitude}&lon=${pPosition.coords.longitude}&appid=${apiKey}&units=metric&lang={fr}`) 
    xhr.onload = onLoad
    xhr.onerror = onError 
    xhr.onprogress = onProgress
    xhr.send() 
}
// export{onLoad,onError,onProgress,}