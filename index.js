
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
    }


const line = document.querySelector('.line');

function addAnimation() {
  line.style.animation = 'expand-contract 10s ease-out forwards';
}

function removeAnimation() {
  line.style.animation = 'contract-expand 10s ease-out forwards';
}

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    addAnimation();
  } else {
    removeAnimation();
  }
});

