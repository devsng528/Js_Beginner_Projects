const name= document.getElementById("name");
const tagscontainer = document.querySelector(".tags")
const addname=()=>{
    // console.log(name.value);
    const tag = document.createElement("div");
    tag.setAttribute("class",'tag');

    tag.innerHTML = `hey i am ${name.value}`
    tagscontainer.append(tag);

};