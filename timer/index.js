// console.log(today)
// console.log(timer)
// console.log()
// console.log(diff)
// console.log(diff/day)
// console.log()
// console.log(Math.floor((diff%minute)/second))
const dayselement = document.querySelector(".days")
const hourelement = document.querySelector(".hours")
const minuteselement = document.querySelector(".minutes")
const secondelement = document.querySelector(".Seconds")
const heading = document.querySelector('.h1')
const countertimer = document.querySelector('.counterTime')
const second=1000,minute=60*second ,hour=60*minute, day=24*hour;

const timerfunction =()=>{
    
    let now = new Date(),
     dd=String(now.getDate()).padStart(2,'0'),
     mm=String(now.getMonth()+1).padStart(2,'0'),
     yyyy=String(now.getFullYear())

    
    const enterday = prompt("Enter Day").padStart(2,"0")
    const entermonth = prompt("Enter Month").padStart(2,"0")
    // const enterday = prompt("Enter Day").padStart(2,"0")
    
    now=`${mm}/${dd}/${yyyy}`
    
    
    let targetDate= `${enterday}/${entermonth}/${yyyy}`
    if(now>targetDate){
        targetDate= `${enterday}/${entermonth}/${yyyy+1}`
    }
    const intervelid=setInterval(() => {
        const timer= new Date(targetDate).getTime();
        const today= new Date().getTime();

        const diff=timer-today;
        const leftday=Math.floor(diff/day)
        const leftHour=Math.floor((diff%day)/hour)
        const leftmin=Math.floor((diff%hour)/minute)
        const leftsec=Math.floor((diff%minute)/second)
        dayselement.innerText=leftday
        hourelement.innerText=leftHour
        minuteselement.innerText=leftmin
        secondelement.innerText=leftsec
        
        if(diff<0){
            countertimer.style.display="none"
            // heading.innerText="Times up";
            clearInterval(intervelid)

        }
// console.log(`${leftday}:${leftHour}:${leftmin}:${leftsec}`)
        
    }, 0);
}

timerfunction();