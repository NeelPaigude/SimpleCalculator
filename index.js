let btn = document.querySelectorAll('.btn');
let equalTo = document.querySelector('#equalto');
let inputBox = document.querySelector('#input-box');
let alertBox = document.querySelector('.alert-box');
let acBtn = document.querySelector('#acbtn');

btn.forEach((e)=>{
    e.addEventListener('click',(b)=>{
        if(e.innerHTML === '+' || e.innerHTML === '-' || e.innerHTML === 'x' || e.innerHTML === '÷'){
            inputBox.value += ' '+e.innerHTML + ' ';
        }
        else{
            inputBox.value += e.innerHTML;
        }
    })
});

// Equal to button operation
equalTo.addEventListener('click',()=>{
    if(inputBox.value == ''){
            alertBox.innerHTML = " Invalid Input ! ";
            alertBox.style.display = 'block';
            setTimeout(()=>{
                alertBox.style.display = 'none';
            },3000);
    }
    else{
       inputValue = inputBox.value.split(" ");
       operators = ['+','-','x','÷'];
       console.log(inputValue);

       if(!inputValue.includes('+') && !inputValue.includes('-') && !inputValue.includes('x') && !inputValue.includes('÷')){
            alertBox.innerHTML = " Input does not include operation sign ! ";
            alertBox.style.display = 'block';
            setTimeout(()=>{
                alertBox.style.display = 'none';
            },3000);
       }


       if(inputValue.length <= 3){
            if(inputValue.includes('+')){
                    inputValueString = inputValue.filter((e) => !operators.includes(e));
                    inputValueNo = inputValueString.map((num) => parseInt(num));
                    addition = inputValueNo.reduce((e,sum) => sum += e, 0);
                    inputBox.value = ' ';
                    inputBox.value = addition;
            }
            
            else if(inputValue.includes('-')){
                    inputValueString = inputValue.filter((e) => !operators.includes(e));
                    inputValueNo = inputValueString.map((num) => parseInt(num));
                    substraction = inputValueNo.reduce((sum,e) => sum -= e);
                    inputBox.value = ' ';
                    inputBox.value = substraction;
            }

            else if(inputValue.includes('x')){
                    inputValueString = inputValue.filter((e) => !operators.includes(e));                  
                    inputValueNo = inputValueString.map((num) => parseInt(num));
                    multiplication = inputValueNo.reduce((sum,e) => sum *= e);
                    inputBox.value = ' ';
                    inputBox.value = multiplication;
            }

            else if(inputValue.includes('÷')){
                    inputValueString = inputValue.filter((e) => !operators.includes(e));
                    inputValueNo = inputValueString.map((num) => parseInt(num));
                    division = inputValueNo.reduce((sum,e) => sum /= e);
                    inputBox.value = ' ';
                    inputBox.value = division;
            }
       }
       else{
            alertBox.innerHTML = " Maximum 2 numbers are allowed ! ";
            alertBox.style.display = 'block';
            setTimeout(()=>{
                alertBox.style.display = 'none';
            },3000);
       }
    }
});

acBtn.addEventListener('click',(e)=>{
    inputBox.value = '';
});