const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const height=document.getElementById("height").value;

    const weight=document.getElementById("weight").value;

    const result=document.getElementById("result");

    if(height==="" || height<=0 || isNaN(height)){
        result.innerHTML=`Please give a valid input!`;

    }else if(weight==="" || weight<=0 || isNaN(weight)){
        result.innerHTML=`Please give a valid input!`;

    }else{
        const bmi=Math.round((weight/((height*height)/10000).toFixed(2)));
        result.innerHTML=`${bmi}`
    }

})