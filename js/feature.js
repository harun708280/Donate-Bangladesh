document.getElementById('history').addEventListener('click',function(){
    showSection('history-from')
    changeColour('history')
    
})

document.getElementById('donation').addEventListener('click',function(){
    showSection('donate-from')
    changeColour('donation')
})

document.getElementById('blog-btn').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "./blog.html";

})