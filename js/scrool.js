const button = document.querySelectorAll('.menu button')

for(let i=0; i<button.length; i++){
    
    button[i].addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector('.scroll' +(i)).scrollIntoView(true);
    });
}

const updatetime = document.querySelectorAll('.badge')

for(let i=0; i<updatetime.length; i++){
    var x =new Date()
    updatetime[i].innerHTML=`<i class="fas fa-sync-alt"></i>  Updated: ${x}`
}

const countEI = document.getElementById('number')
updatevisit();
function updatevisit(){
    fetch('https://api.countapi.xyz/update/covid/lol/?amount=1')
    .then(res => res.json())
    .then(res =>{
        countEI.innerHTML =res.value;
    });
}

const togglebrn =document.querySelector('.fa-bars');
const menu =document.querySelector('.menu')

togglebrn.addEventListener('click',()=>{
    menu.classList.toggle('active')
})

const btns = document.querySelectorAll('.menu button')
for(let i =0; i<btns.length; i++){
    btns[i].addEventListener('click',()=>{
        menu.classList.remove('active')
    })
}
