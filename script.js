document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('button');

  myButton.addEventListener('click', function(event) {
    event.preventDefault();
    const countryName = document.getElementById('name').value.trim();
    
    if(!countryName){
      alert('Country not entered');
    }
    fetchCountry(countryName);
  });

  const fecthCountry = async (country) =>{
    try {
    const response = await fetch('https://restcountries.com/v3.1/name/{country}?fullText=true');
    if (!response.ok) {
      throw new Error("Input full country name");
    }

    const data = await response.json();
    countryinfo(data);
      
    } catch (error) {
      console.error(error.message);
    }  
  }

  const countryinfo = async (data) =>{
    const countryInfo = document.getElementById('country-info');
    const bodering = document.getElementById('bordering-countries');

    countryInfo.innerHTML = 
      <p>${data.capital[0]}</p>
      <p>${data.population.toString()}</p>
      <p>${data.region}</p>
      <img src = "${data.image.png}" width "150">
      ;
  }
  
  
});




