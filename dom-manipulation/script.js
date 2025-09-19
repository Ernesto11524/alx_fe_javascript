const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("newQuote");
let saved_quotes = JSON.parse(localStorage.getItem('saved_quotes'));

let quotes = [
  {
    text: "Never give up",
    category: "motivational"
  },
  {
    text: "Always put yourself first",
    category: "self-care"
  },
  {
    text: "Focus on your goals",
    category: "motivational"
  },
  {
    text: "Everything will be fine",
    category: "reassurance"
  },
  {
    text: "God is in control",
    category: "faith"
  }
];

function addQuote(){
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
    let addNewQuote = {
        text: newQuoteText,
        category: newQuoteCategory
    }
    quotes.push(addNewQuote)
    localStorage.setItem('saved_quotes', JSON.stringify(quotes))

    for (let i = 0; i < quotes.length; i++){
        console.log(quotes[i].text);
        console.log(quotes[i].category);
    }

}

function showRandomQuote(){
    let num1 = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[num1].text;
    const addNewQuoteBtn = document.createElement("button");
    addNewQuoteBtn.textContent = "Add New Quote";
    addNewQuoteBtn.addEventListener("click", () => {
    let createAddQuoteForm = document.createElement("div");
    document.body.appendChild(createAddQuoteForm);
    createAddQuoteForm.innerHTML = `
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
        <button onclick="addQuote()">Add Quote</button>
    `
});
    quoteDisplay.appendChild(addNewQuoteBtn);
}

newQuote.addEventListener("click", showRandomQuote);

// localStorage.setItem
// application/json, Blob
// FileReader, onload, readAsText
// populateCategories, categoryFilter, map
// option
// filterQuote
// selectedCategory
// fetchQuotesFromServer
// await, async, https://jsonplaceholder.typicode.com/posts, .json
// method, POST, headers, Content-Type
// syncQuotes
// setInterval
// alert, Quotes synced with server