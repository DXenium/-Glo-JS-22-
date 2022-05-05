const modalBtn = document.querySelector('.modal__button')
const smallBtn = document.querySelector('.course__button')
const modal = document.querySelector('.modal')
const modalInner = modal.querySelector('.modal__inner')

modalInner.style.position = 'relative'

//добавляем крестик для закрытия модального окна
const addCloseBtn = () => {
    const closeBtn = document.createElement('div')

    closeBtn.classList.add('close-button')
    closeBtn.innerHTML = '&times'
    closeBtn.style.position = 'absolute'
    closeBtn.style.right = '10px'
    closeBtn.style.top = '10px'
    closeBtn.style.width = '20px'
    closeBtn.style.height = '20px'
    closeBtn.style.fontSize = '26px'
    closeBtn.style.cursor = 'pointer'
    closeBtn.style.display = 'flex'
    closeBtn.style.justifyContent = 'center'
    closeBtn.style.alignItems = 'center'

    modalInner.append(closeBtn)

    closeBtn.addEventListener('click', () => {
        modal.style.display = ''
    })
}

//открываем модальное окно по клику на большую кнопку
modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})
//открываем модальное окно по клику на маленькую кнопку
smallBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')

    if (!modalContent) {
        modal.style.display = ''
    }
})

addCloseBtn()