
// document.write("<div id='header'>"
//     +"<h1 id='heading'>Quote of the Day</h1>"
//     +"<p id='paragraph' class='pt-5'>Press the button below to recieve a random quote!</p>"
//     +"<button onclick='generateQuote();'id='quoteButton'>New Quote</button>"
// );

// document.getElementById("header").style.textAlign="center";

// // h1 style
// document.getElementById("heading").style.marginTop="50px";
// document.getElementById("heading").style.fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
// document.getElementById("heading").style.fontSize="80px";
// document.getElementById("heading").style.fontWeight="700";
// document.getElementById("heading").style.color="rgb(0, 0, 0)";

// // p style
// document.getElementById("paragraph").style.fontFamily="Times New Roman, Times, serif";
// document.getElementById("paragraph").style.fontSize="35px";
// document.getElementById("paragraph").style.fontWeight="400";
// document.getElementById("paragraph").style.color="rgb(0, 0, 0)";

// // button style
// document.getElementById("quoteButton").style.marginTop="20px";
// document.getElementById("quoteButton").style.fontFamily="Arial, Helvetica, sans-serif";
// document.getElementById("quoteButton").style.fontSize="13px";
// document.getElementById("quoteButton").style.fontWeight="400";
// document.getElementById("quoteButton").style.color="rgb(225,225, 225)";
// document.getElementById("quoteButton").style.backgroundColor="blue";
// document.getElementById("quoteButton").style.paddingBlock="30px";
// document.getElementById("quoteButton").style.paddingInline="90px";
// document.getElementById("quoteButton").style.marginBottom="20px";


// document.write("<p id='quoteText'></p>");
// document.write("<p id='authorName'></p>");
// document.getElementById("quoteOutput").style.fontFamily="Times New Roman, Times, serif";
// document.getElementById("quoteOutput").style.fontSize="35px";
// document.getElementById("quoteOutput").style.fontWeight="400";
// document.getElementById("quoteOutput").style.color="rgb(0, 0, 0)";

// document.write("<script src='../JS/Main.JS'></script>");

let arrayOfQuotes = [
    {
        "quote": 'The best revenge is massive success.',
        "author": 'Frank Sinatra'
        
    },

    {
        "quote": 'It\'s not what happens to you, but how you react to it that matters.',
        "author": 'Epictetus'
    },

    {
        "quote": 'Resentment is like drinking poison and waiting for your enemies to die.',
        "author": 'Nelson Mandela'
    },

    {
        "quote": 'You miss 100% of the shots you don\'t take.',
        "author": 'Wayne Gretzy'
    },

    {
        "quote": 'Do not take life too seriously. You will not get out alive.',
        "author": 'Elbert Hubbard'
    },
];

function generateQuote() {
    let x=Math.floor(Math.random()*arrayOfQuotes.length);
    document.getElementById("quoteText").innerHTML=`\"${arrayOfQuotes[x].quote}\"`;
    document.getElementById("authorName").innerHTML=`--${arrayOfQuotes[x].author}`;
};