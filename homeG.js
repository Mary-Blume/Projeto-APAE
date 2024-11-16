
var menuItem = document.querySelectorAll('.item')

function select(){
    menuItem.forEach((item)=>
        item.classList.remove('act')
)
this.classList.add('act')
}

menuItem.forEach((item)=>
    item.addEventListener('click', select)
)

var btnExp = document.querySelector('#btn-expandir')
var homeMenu = document.querySelector('.lateral')

btnExp.addEventListener('click', function(){
    homeMenu.classList.toggle('expandir')
})