function getInputValue(id){
   const inputValue= document.getElementById(id).value;
    return inputValue;
}

function getTextValue(id){
    const textValue=document.getElementById(id).innerText;
    return textValue;
}

function showSection(id){
    document.getElementById('donate-from').classList.add('hidden');
    document.getElementById('history-from').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')   
}