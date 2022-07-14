const searchInput = document.getElementById('rhyme-input');
const searchBtn = document.querySelector('button');
const pText = document.querySelector('p');

const api = `https://api.datamuse.com/words?rel_rhy=`;

searchBtn.addEventListener("click", function(){

    getWord();

async function getWord(){
    const response = await fetch(api + searchInput.value);
    const data = response.json();
    for (let i =0; i < 9;i++)
    data.then((data) => pText.textContent += data[i].word + " ");

}

})

// function handler(event){
//     getWord();
//     event.type
// }




