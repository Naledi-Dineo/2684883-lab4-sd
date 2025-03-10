
  const myButton = document.getElementById('button');

  myButton.addEventListener('click', function(event) {
    event.preventDefault();
    const countryName = document.getElementById('name').value.trim();
    
    if(!countryName){
      alert('Country not entered');
    }
  
    try {
    const response = await fetch('https://restcountries.com/v3.1/name/{countryName}?fullText=true');
    if (!response.ok) {
      throw new Error("Input full country name");
    }

    const data = await response.json();
      
    } catch (error) {
      console.error(error.message);
    }  
  

    const countryInfo = document.getElementById('country-info');
    const bodering = document.getElementById('bordering-countries');

    countryInfo.innerHTML = 
      <p>${data[0].capital[0]}</p>
      <p>${data[0].population.toString()}</p>
      <p>${data[0].region}</p>
      <img src = "${data[0].image.png}" width "150">
      ;
  });

  
  





