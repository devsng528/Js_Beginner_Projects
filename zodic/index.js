// it's an javascript project in which it take an input for zodiac sign and show luck colour
const zodiac= document.getElementById("zodiac");
const body = document.body;
const changebg = () =>{
    switch(zodiac.value){
        case "aries":
            body.style.backgroundColor='#695554';
            break;
        case "taurus":
            body.style.backgroundColor='blue';
            break;
        case "gemini":
                body.style.backgroundColor='orange';
            break;
        case "cancer":
            body.style.backgroundColor='gold';
            break;
        case "leo":
            body.style.backgroundColor='pink';
            break;
        case "virgo":
            body.style.backgroundColor='violet';
            break;
        case "scorpio":
            body.style.backgroundColor='green';
            break;
        case "sagittarius":
            body.style.backgroundColor='aqua';
            break;
        case "capricorn":
            body.style.backgroundColor='yellow';
            break;
        case "aquarius":
            body.style.backgroundColor='purple';
            break;
         case "pisces":
            body.style.backgroundColor='#695554';
            break;
        

        default:
            body.style.backgroundColor='#fff';
            break;
    }

};