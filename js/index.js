const searchInput = document.getElementById('rhyme-input');
const searchBtn = document.querySelector('button');
const pText = document.querySelector('p');
const section = document.getElementById('rhyme-output');

const api = `https://api.datamuse.com/words?rel_rhy=`; //api url

searchBtn.addEventListener("click", getWord);

searchInput.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click(); 
    }
});

/**
 * gets user input value and fetches the api and returns word in paragraph
 */ 
async function getWord(){
   section.textContent= ""; //clear paragraph
    const response = await fetch(api + searchInput.value);
    const data = response.json();
    for (let i =0; i < 99 ;i++)
        data.then((data) => section.innerHTML += `<p id="word${i}">${data[i].word}</p>` + " ")
}

/**
 * function creates a span 
 */