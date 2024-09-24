// Noakhali Donate
document.getElementById('btn-noakhali-donate').addEventListener('click',function(){
   const mainBalance=Number(getTextValue('main-blance'));
   const noakhaliDonate=Number(getTextValue('noakhali-donate'))  
   const InputNoakhaliDonate= Number(getInputValue('input-noakhali-donate'))
   
   if (  isNaN(InputNoakhaliDonate) || InputNoakhaliDonate > mainBalance || InputNoakhaliDonate<1) {
    onclick=my_modal_1.showModal()
    document.getElementById('input-noakhali-donate').value = '';

   }else{
    const showMainBalance=mainBalance-InputNoakhaliDonate;
    document.getElementById('main-blance').innerText=showMainBalance;

    const showNoakhaliDonate=noakhaliDonate+InputNoakhaliDonate;
    console.log(showNoakhaliDonate);
    
    document.getElementById('noakhali-donate').innerText=showNoakhaliDonate;
    const history = document.getElementById('history-from');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="w-9/12 mx-auto border-2 p-5 rounded-xl my-7">
            <h1 class="text-xl font-bold">${InputNoakhaliDonate} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
            <p class="text-text2 font-medium mt-4">Date: ${new Date().toString()}</p>
        </div>
    `;
    history.appendChild(div);

    onclick=my_modal_2.showModal()
    document.getElementById('input-noakhali-donate').value = '';
    
   }
    
})

// Feni Donate

document.getElementById('btn-feni-donate').addEventListener('click',function(){
    const mainBalance = Number(getTextValue('main-blance'));
    const donatefeni=Number(getTextValue('doante-feni'))
    const inputDonateFeni=Number(getInputValue('input-feni-donate'))
  

    if (isNaN(inputDonateFeni) || inputDonateFeni>mainBalance || inputDonateFeni<1) {
        onclick=my_modal_1.showModal()
        document.getElementById('input-feni-donate').value=''
    }else{
        
        document.getElementById('main-blance').innerText=mainBalance-inputDonateFeni;
        document.getElementById('doante-feni').innerText=donatefeni+inputDonateFeni
        document.getElementById('input-feni-donate').value=''
        onclick=my_modal_3.showModal()

        const history = document.getElementById('history-from');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="w-9/12 mx-auto border-2 p-5 rounded-xl my-7">
                <h1 class="text-xl font-bold">${inputDonateFeni} Taka is Donated Donate for Flood Relief in Feni,Bangladesh</h1>
                <p class="text-text2 font-medium mt-4">Date: ${new Date().toString()}</p>
            </div>
        `;
        history.appendChild(div);
        
    }
    
    
    
    
})

// Qota Donate

document.getElementById('btn-quta-donate').addEventListener('click',function(){
   const mainBalance=Number(getTextValue('main-blance'));
   const inputQutaDonate=Number(getInputValue('input-quta-donate'))
   const qutaDonate=Number(getTextValue('quta-donate'));

   if (isNaN(inputQutaDonate)|| inputQutaDonate>mainBalance || inputQutaDonate<1) {
        onclick=my_modal_1.showModal()
        document.getElementById('input-quta-donate').value=''
   }else{
     document.getElementById('main-blance').innerText=mainBalance-inputQutaDonate;
     document.getElementById('quta-donate').innerText=qutaDonate+inputQutaDonate;
     document.getElementById('input-quta-donate').value=''
     onclick=my_modal_4.showModal()
     const history = document.getElementById('history-from');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="w-9/12 mx-auto border-2 p-5 rounded-xl my-7">
                <h1 class="text-xl font-bold">${inputQutaDonate} Taka is Donated Aid for Injured in the Quota Movement</h1>
                <p class="text-text2 font-medium mt-4">Date: ${new Date().toString()}</p>
            </div>
        `;
        history.appendChild(div);

   }
   
   
})

