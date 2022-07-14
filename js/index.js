const searchInput = document.getElementById('rhyme-input');
const searchBtn = document.querySelector('button');
const pText = document.querySelector('p');
const section = document.getElementById('rhyme-output');

const api = `https://api.datamuse.com/words?rel_rhy=`; //api url

searchBtn.addEventListener("click", getWord);

/** 
 * gets user input value and fetches the api and returns word in paragraph
 */ 
async function getWord(){
    pText.textContent= ""; //clear paragraph
    const response = await fetch(api + searchInput.value);
    const data = response.json();
    for (let i =0; i < 9;i++)
        data.then((data) => pText.textContent += data[i].word + " ")
}

/**
 * function creates a span 
 */