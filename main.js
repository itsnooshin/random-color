const colorValues = ["#eb9934" , '#cdeb34' , '#34eb6b' ,'#34cdeb' ,'#9334eb' ,'#eb34b4'  ,'#bda4a7'] 
const btnPrimary = document.querySelector('.btn-primary');
const spanColor = document.querySelector(".change-color");


    btnPrimary.addEventListener('click' , function(){
       
        const random = Math.floor(Math.random ()  * colorValues.length);
        document.body.style.backgroundColor = colorValues[random];
        spanColor.textContent = colorValues[random];
        
    });
 
