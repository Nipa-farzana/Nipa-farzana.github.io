let filterItem = document.querySelector('.items-link');
let fileImages = document.querySelectorAll('.projects-images');

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if(selectedItem.target.classList.contains('item-links')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
        }

    })
})
