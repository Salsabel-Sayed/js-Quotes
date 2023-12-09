
var text = document.getElementById('txt');
var byWhoo = document.getElementById('byWhoo');

var quotes=[
    {
        auther:'― Oscar Wilde',
        quote:'“Be yourself; everyone else is already taken.”',
    },
    {
        auther:'― Albert Einstein',
        quote:'“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
    },
    {
        auther:'― Frank Zappa',
        quote: '“So many books, so little time.”',
    },
    {
        auther:'― Mae West',
        quote:'“You only live once, but if you do it right, once is enough”',
    },
    {
        auther:'― Dr. Seuss',
        quote:'“You know you`re in love when you can`t fall asleep because reality is finally better than your dreams”',
    },
    {
        auther:'― Mahatma Gandhi',
        quote:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    },
    {
        auther:'― William W. Purkey',
        quote:'“You`ve gotta dance like there`s nobody watching Love like you`ll never be hurt Sing like there`s nobody listening And live like it`s heaven on earth”',
    },
    {
        auther:'― Ralph Waldo Emerson',
        quote:'“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
    },
];

    function puttingArray(quotes){
        var puchingToArray = [];
        var num;
        while(puchingToArray.length < quotes.length){
            num = Math.floor(Math.random()*quotes.length);
            if(puchingToArray.indexOf(quotes[num]) === -1){
                puchingToArray.push(quotes[num]);
                text.style.visibility='visible';
               text.innerHTML= quotes[num].quote;
             byWhoo.innerHTML= quotes[num].auther;
            byWhoo.style.visibility='visible';
                console.log(quotes[num]);
            }
        }
        return puchingToArray;
        
    }


// function puttingArray(){
//     var puchingToArray = [];
//     for( i=1 ; i<quotes.length ; i++){
//         var num = Math.floor(Math.random()*quotes.length);
//         var p = puchingToArray.push(quotes[num]);
//         text.style.visibility='visible';
//                text.innerHTML= quotes[num].quote;
//              byWhoo.innerHTML= quotes[num].auther;
//             byWhoo.style.visibility='visible';
//                 console.log(quotes[num]);
//     }
   
//     return puchingToArray;
    
// }


// function getQuote(){
//     var num = Math.floor(Math.random()*quotes.length);
//     text.style.visibility='visible';
//         text.innerHTML= quotes[num].quote;
//         byWhoo.innerHTML= quotes[num].auther;
//         byWhoo.style.visibility='visible';
//         console.log(quotes[num].quote);
//         console.log(quotes[num].auther);
// }

