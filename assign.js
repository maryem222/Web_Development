var rowData=document.getElementById('rowData');
var SearchIn=document.getElementById('SearchIn');
var word=SearchIn.value;
var Array1=[];
var parameter='';
var i;
var x;



 getData('cairo');

async function getData(parameter){
    var apiData= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e115fd52944c40d09e1222752221410&q=${parameter}&days=3&aqi=no&alerts=no`);
    console.log(apiData);
    Array1= await apiData.json();

     console.log(Array1);
    showData(1);
    

   

     
    
}







function showData(x){

   
    var divs='';
   
       divs+= `<div class="col-md-4  " >
       <div class='bg-5 text-white h-100 px-5 py-5 position-relative'>
       <div class='bg-1 position-absolute up3 w-100  px-5'>
       <h2 class=' position-absolute leftt ms-3' >${Array1.location.name}</h2>
       <p class=' position-absolute rightt' >${Array1.forecast.forecastday[0].date}</p>
       </div>
       
      
       
       
      
       <p class= "sz-90" >${Array1.forecast.forecastday[0].day.avgtemp_c}&degC</p>
       <p class="btn-2 position-relative d-2" >${Array1.forecast.forecastday[0].day.condition.text}</p>
       <a class='position-relative right2 ' href="https://www.weatherapi.com/" title="Free Weather API"><img class='icon2' src='https://${Array1.forecast.forecastday[0].day.condition.icon}' ></a>
       

       <ul >
      
       <li  class=" float-left "><i class="fa-solid fa-umbrella"></i></li>
       <li  class=" float-left ">20</li>
       
       <li  class=" float-left "><i class="fa-solid fa-wind"></i></li>
       <li  class=" float-left ">18km/hr</li>
       <li  class=" float-left "><i class="fa-solid fa-compass"></i></li>
       <li  class=" float-left ">east</li>
     </ul>


       </div>
        </div>

        





        <div class="col-md-4  " >
       <div class='bg-6 h-100 text-white p-3 text-center'>
       <div class='bg-1 position-relative up2 w-150 px-5'>
       
       </div>
       
       <p class="f-24 position-relative middle ">${Array1.forecast.forecastday[1].day.maxtemp_c}&degC</p>
       <p class=' position-relative middle'>${Array1.forecast.forecastday[1].day.mintemp_c}&degC</p>
       <p class='positionDate2'>${Array1.forecast.forecastday[1].date}</p>
       
       
       <img class="position-relative icon1" src='https://${Array1.forecast.forecastday[1].day.condition.icon}'>
       
       <p class="btn-2 position-relative down ">${Array1.forecast.forecastday[1].day.condition.text}</p>
       </div>
        </div>











        <div class="col-md-4  " >
       <div class='bg-5 h-100 text-white p-3 text-center'>
       <div class='bg-1 position-relative up2 w-150 px-5'>
       
       </div>
       <p  class="f-24 position-relative middle ">${Array1.forecast.forecastday[2].day.maxtemp_c}&degC</p>
       <p class='position-relative middle' >${Array1.forecast.forecastday[2].day.mintemp_c}&degC</p>
       
       <p class='positionDate2'>${Array1.forecast.forecastday[2].date}</p>
       
       <img class="position-relative icon1" src='https://${Array1.forecast.forecastday[2].day.condition.icon}'>
       <p class="btn-2 position-relative down ">${Array1.forecast.forecastday[2].day.condition.text}</p>
       </div>
        </div>
`
    

    rowData.innerHTML=divs;
}

SearchIn.addEventListener('blur',  function(){
    var word=SearchIn.value;
    getData(word);
    
    console.log(word);

   


})


     async function getIcon(x){
        var apiData2= await fetch(` https://www.weatherapi.com/docs/weather_conditions.json    `);
    console.log(apiData2);
    Array2= await apiData2.json();
   
       
        
        for(var k=0;k<Array1.length;k++){
           
        if(Array2[k].code==Array1.forecast.forecastday[k].day.condition.code){
           x=  Array2[k].icon;
          console.log(x);
          showData(x);
        }
        else{
            alert('h')
        }
        }
     }   
     