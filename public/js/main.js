const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
// const temp = document.getElementById('temp');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');


const getinfo = async (event)=>{
    event.preventDefault();
    
  let cityval = cityname.value;
  if (cityval === "") {
     city_name.innerText = 'plz write the name before search';
  }
  else{
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=c37d5d9dec17aa92c0a0e095c072627f`;
        const response =  await fetch(url);
      
        const data = await response.json();
       const arrdata = [data];
       console.log(arrdata);
            
       city_name.innerText= `${arrdata[0].name} ,  ${arrdata[0].sys.country}`;
           const tempt = arrdata[0].main.temp-273.15;
            const tempMood = arrdata[0].weather[0].main;
            temp_val.innerText= tempt.toString().substring(0,4);
             if (tempMood == "clear") {
                temp_status.innerHTML=
                '<i class="fas fa-sun" style="color: #eccc68;"></i>';
             }else if(tempMood == "cloud"){
                temp_status.innerHTML=
                '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
            }else if (tempMood == "Rain") {
                temp_status.innerHTML=
                '<i class="fas fa-rain" style="color: #a4b0be;"></i>';
            }else{
                temp_status.innerHTML=
                '<i class="fas fa-sun" style="color:#eccc68;"></i>';
            }




      } catch  {
              city_name.innerText = "plz Enter the valid city name";
      }

     }

}

submitbtn.addEventListener("click", getinfo);