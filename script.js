const btns = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const equalbtn = document.querySelector('.btn-equal')
const clr = document.querySelector('.btn-clear')

for(let i=0;i<btns.length;i++){
  btns[i].addEventListener('click',function(){
      let num = btns[i].getAttribute('data-num')
      screen.value +=num
      console.log(typeof(screen.value))
    
  
  }  )
}
equalbtn.addEventListener('click',function(){
    
    if(screen.value === ''){
        alert('Empty Input')
    }
    else{
    value=eval(screen.value)
    
    screen.value=value;
    }
    
})
clr.addEventListener('click',function(){
    screen.value=''
})