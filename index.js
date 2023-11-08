let quotesList = [
    {
      "name": "Anyone who has ever made anything of importance was disciplined",
      "author": "Andrew Hendrixson",
      "quoteColor":'#7c9473'
    },
    {
      "name": "Don’t spend time beating on a wall, hoping to transform it into a door.",
      "author": "Coco Chanel",
      "quoteColor":'#ffb26b'
    },
    {
        "name": "Creativity is intelligence having fun.",
        "author": "Albert Einstein",
        "quoteColor":'#ffd56b'
    },
    {
        "name": "Optimism is the one quality more associated with success and happiness than any other.",
        "author": "Brian Tracy",
        "quoteColor":'#00587a'
    },
    {
        "name": "Always keep your eyes open. Keep watching. Because whatever you see can inspire you.",
        "author": "Grace Coddington",
        "quoteColor":'#008891'
    },
    {
        "name": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "author": "Henry David Thoreau",
        "quoteColor":'#939b62'
    },
    
    {
        "name": "If the plan doesn’t work, change the plan, but never the goal.",
        "author": "Unknown",
        "quoteColor":'#16c79a'
    },
    
    {
        "name": "I destroy my enemies when I make them my friends.",
        "author": "Abraham Lincoln",
        "quoteColor":'#a9294f'
    },
    
    {
        "name": "Do it with passion, or not at all.",
        "author": "Rosa Nouchette Carey",
        "quoteColor":'#c70039'
    },
    
    {
        "name": "Don’t live the same year 75 times and call it a life.",
        "author": "Robin Sharma",
        "quoteColor":'#9f5f80'
    },
    
    {
        "name": "You cannot save people, you can just love them.",
        "author": "Anaïs Nin",
        "quoteColor":'#70af85'
    },
    
    {
        "name": "There is no way to happiness. Happiness is the way.",
        "author": "Thich Nhat Hanh",
        "quoteColor":'#6155a6'
    },
    
    {
        "name": "Holding onto anger is like drinking poison and expecting the other person to die.",
        "author": "Unknown",
        "quoteColor":'#532e1c'
    },
    
    {
        "name": "Champions keep playing until they get it right.",
        "author": "Billie Jean King",
        "quoteColor":'#d1c145'
    },
    
    {
        "name": "You will succeed because most people are lazy.",
        "author": "Shahir Zag",
        "quoteColor":'#03506f'
    },
  ]

let randomNum;
let randomQuote;
let authorName;

function quoteGenerator(){
    randomNum=Math.floor(Math.random() * quotesList.length);
    randomQuote =quotesList[randomNum].name;
    authorName =quotesList[randomNum].author;
    quotesColor=quotesList[randomNum].quoteColor;

    $("#text").text(randomQuote);
    $("#author").text(authorName);
    $("body").css("background-color",quotesColor);
    $("body").css("color",quotesColor);
    $(".fab").css("color",quotesColor);
    $("button").css("background-color",quotesColor);

}













