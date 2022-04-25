const modalBtn = document.querySelector('.modal__button')
const smallBtn = document.querySelector('.course__button')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

smallBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')

    if (!modalContent) {
        modal.style.display = ''
    }
})