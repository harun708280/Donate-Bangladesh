


document.getElementById('btn-noakhali-donate').addEventListener('click',function(){
   const mainBalance=Number(getTextValue('main-blance'));
   const noakhaliDonate=Number(getTextValue('noakhali-donate'))  
   const InputNoakhaliDonate= Number(getInputValue('input-noakhali-donate'))
   const inputDonate = document.getElementById('input-noakhali-donate').value.trim()
   
   if ( inputDonate === '' || isNaN(InputNoakhaliDonate) || InputNoakhaliDonate > mainBalance ) {
    onclick=my_modal_1.showModal()
    document.getElementById('input-noakhali-donate').value = '';

   }else{
    const showMainBalance=mainBalance-InputNoakhaliDonate;
    document.getElementById('main-blance').innerText=showMainBalance;

    const showNoakhaliDonate=noakhaliDonate+InputNoakhaliDonate;
    console.log(showNoakhaliDonate);
    
    document.getElementById('noakhali-donate').innerText=showNoakhaliDonate;
    onclick=my_modal_2.showModal()
    document.getElementById('input-noakhali-donate').value = '';

   }
    
})



document.getElementById('btn-feni-donate').addEventListener('click',function(){
    const mainBalance = Number(getTextValue('main-blance'));
    const donatefeni=Number(getTextValue('doante-feni'))
    const inputDonateFeni=Number(getInputValue('input-feni-donate'))
    const inputDonate = document.getElementById('input-feni-donate').value.trim()

    if (inputDonate === '' || isNaN(inputDonateFeni) || inputDonateFeni>mainBalance) {
        onclick=my_modal_1.showModal()
        document.getElementById('input-feni-donate').value=''
    }else{
        
        document.getElementById('main-blance').innerText=mainBalance-inputDonateFeni;
        document.getElementById('doante-feni').innerText=donatefeni+inputDonateFeni
        document.getElementById('input-feni-donate').value=''
        onclick=my_modal_3.showModal()
        
    }
    
    console.log(donatefeni,inputDonateFeni,mainBalance);
    
    
})


document.getElementById('btn-quta-donate').addEventListener('click',function(){
   const mainBalance=Number(getTextValue('main-blance'));
   const inputQutaDonate=Number(getInputValue('input-quta-donate'))
   const qutaDonate=Number(getTextValue('quta-donate'));
   const inputDonate= document.getElementById('input-quta-donate').value.trim()
    
   if (inputDonate==='' || isNaN(inputQutaDonate)|| inputQutaDonate>mainBalance) {
        onclick=my_modal_1.showModal()
        document.getElementById('input-quta-donate').value=''
   }else{
     document.getElementById('main-blance').innerText=mainBalance-inputQutaDonate;
     document.getElementById('quta-donate').innerText=qutaDonate+inputQutaDonate;
     document.getElementById('input-quta-donate').value=''
     onclick=my_modal_4.showModal()
   }
   
   
})

