



var qoutes=[
    {
        quoteOutput:`“You only live once, but if you do it right, once is enough.”`,
        authorOutput:`― Mae West`
    },
    {
        quoteOutput:`“Be the change that you wish to see in the world.” `,
        authorOutput:`― Mahatma Gandhi`
    },
    {
        quoteOutput:`“We accept the love we think we deserve.”`,
        authorOutput:`― Stephen Chbosky`
    },
    {
        quoteOutput:`“Be yourself; everyone else is already taken.”`,
        authorOutput:`― Oscar Wilde`
    },
    {
        quoteOutput:`“Never put off till tomorrow what may be done day after tomorrow just as well.”`,
        authorOutput:`― Mark Twain`
    },
    {
        quoteOutput:`“It is never too late to be what you might have been.”`,
        authorOutput:`― George Eliot`
    },
    {
        quoteOutput:`“We are all in the gutter, but some of us are looking at the stars.”`,
        authorOutput:`― Oscar Wilde`
    },
    {
        quoteOutput:`“There is no greater agony than bearing an untold story inside you.”`,
        authorOutput:`― Maya Angelou`
    },
]



function generateQuote(){
    var num=Math.floor(Math.random() * qoutes.length)
    var quote = document.getElementById('quoteOutput').innerHTML=qoutes[num].quoteOutput;
    var author = document.getElementById('authorOutput').innerHTML=qoutes[num].authorOutput;
  


}
