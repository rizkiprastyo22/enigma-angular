let menu = document.getElementById('menu');

menu.style.display = 'none';

function onToogleMenu(){
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}