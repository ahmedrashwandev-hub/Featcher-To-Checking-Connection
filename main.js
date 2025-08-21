let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');
let container = document.querySelector('.container');

window.onload = function () {
    if(window.navigator.onLine){
        Online()
    }else{
        Offline()
    }
}
window.addEventListener("online",function () {
    Online()
})
window.addEventListener("offline",function () {
    Offline()
})

reload.onclick = function ()
{
    window.location.reload()
}

function Online()
{
    title.innerHTML = "OnlineNow";
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
    container.classList.add('online');
}
function Offline()
{
    title.innerHTML = "OfflineNow";
    title.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
    container.classList.remove('online');
}
