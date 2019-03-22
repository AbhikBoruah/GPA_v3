let popUp = document.getElementById("pop-up-bg");
let exam = document.getElementById("exam");
let modal = document.querySelector(".modal");
function showSem(){
    popUp.style.display = "block"
}
function hideSem(){
    exam.textContent = document.getElementById("Nov-Dec-2018").textContent;
    popUp.style.display = "none"
    document.getElementById("hidden-input").value = exam.textContent;
}
let tinput = document.querySelector('.tinput');
function validateMyForm()
{        
    modal.style.display = "block";
    let bool = true;
    $.ajax({
        type: "POST",
        url: "/",
        async: false,        
        data:{ 
            username:tinput.value,
            semester:exam.textContent,
        },                
        }).done(function(data){
            modal.style.display = "none";      
		    if(data == "undefined"){
                bool = false;
                tinput.value = '';
                alert("Invalid Registration Number!");
            }else{
                bool = true;
            }
        });
    return bool; 
}
