const input = document.getElementById("numofwords");
const container = document.querySelector(".container");

const genword = (n) => {
    let text= "";
    const letters = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    
    for(let i=0;i<n;++i) {
        const random = (Math.random() * (letters.length-1)).toFixed(0);
        text += letters[random];

    }


    return text;

};
// console.log(genword(15));


let numofwords;
const genratepara = () =>{
    numofwords=(Number(input.value));

    const para = document.createElement("p");

    let data='';

    for(let i=0;i<numofwords;++i){
        
        const randomnum= (Math.random()*15).toFixed(0)

        data+= genword(randomnum).toLowerCase();
        data+= " ";
    }
    
    para.innerText= data;
    
    para.setAttribute("class",'paras');

    container.append(para);
};