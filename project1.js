const btn = document.querySelector('#new-quote')
const quote = document.querySelector('.text-area')
const person = document.querySelector('.person')

const quotes = [{quote:'I do the very best I know how. The very best \
can; and I mean to keep on doing so until the end.', person:"Abraham Lincoln"},
    {quote:"All the world’s a stage, and all the men\
     and women merely players.", person:"William Shakespeare"},
    {quote:"Ask not what your country can do for you; \
    ask what you can do for your country.", person:"John Kennedy"},
    {quote:"Ask, and it shall be given you; seek, and \
    you shall find.", person:"the Bible"},
    {quote:"Genius is one percent inspiration and \
    ninety-nine percent perspiration.", person:"Thomas Edison"},
    {quote:"I have a dream that my four little children will\
     one day live in a nation where they will not be judged by\
      the color of their skin but by the content of their character.", person:"Martin Luther King"},
    {quote:"Life is like a box of\
     chocolates. You never know what you’re gonna get.", person:"Forrest Gump"},
    {quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.", person:"Albert Einstein"},
    {quote:"No one can make you feel inferior without your consent.", person:"Eleanor Roosevelt"},
    {quote:"Nothing is certain except for death and taxes.", person:"Benjamin Franklin"},
];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})
