let input = document.querySelector('#inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (btn) =>{
        if(btn.target.innerText=="AC"){
            string="";
            input.value=string;
        }
        else if(btn.target.innerText=="Del"){
            string=string.slice(0,string.length-1);
            input.value=string;
        }
        else if(btn.target.innerText=="="){
            try { 
                input.value = eval(string); 
                string = input.value; 
            } 
            catch (error) { 
                input.value = "Error"; 
                string = "";  
            }
        }
        else{
            string+=btn.target.innerText;
            input.value=string;
        }
    })
})