const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector("ul");
const clearBtn = document.querySelector(".clearitems");
const setArry = [];

btn.addEventListener("click", function(){

    const inputval = input.value;

    // create li tag
    const litag     = document.createElement("li");
    const removeBtn = document.createElement("button");
    
    // give him text content
    litag.textContent = inputval;
    removeBtn.textContent = "Remove";
   
    // give him class name
    litag.className = "todoitems";
    removeBtn.className = "RemoveBtn";


    removeBtn.addEventListener("click", function(){
        // if( e.target.className === "RemoveBtn" ){
            // e.target.parentElement.remove();
        // }
        litag.remove();
    });



    let liContent = litag.firstChild.textContent;
    setArry.push(liContent);
    let stringBanao = JSON.stringify(setArry);

    localStorage.setItem("TodoList Items", stringBanao);

    
    // console.log(setArry)

    

    result.appendChild(litag);
    litag.appendChild(removeBtn);

    input.value = "";
   
})



let getLocalStorageItems = localStorage.getItem("TodoList Items");
let todocontents = JSON.parse(getLocalStorageItems);
todocontents.forEach( function(item){
    const Newli  = document.createElement("li");
    const delBtn = document.createElement("button");
    
    Newli.textContent  = item;
    Newli.className    = "todoitems";

    delBtn.textContent = "Remove";
    delBtn.className   = "RemoveBtn";

    Newli.appendChild(delBtn);
    result.appendChild(Newli);
});

clearBtn.addEventListener("click", function(){
    localStorage.removeItem("TodoList Items");
});

// if( result.children.length === 0 ){
//     clearBtn.style.display = "none";
//     console.log(clearBtn)
// }else{
//     clearBtn.style.color = "red";
// }