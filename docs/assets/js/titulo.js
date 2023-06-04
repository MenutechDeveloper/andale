let previousTitle = document.title
window.addEventListener('blur', ()=>{
    previousTitle = document.title
    document.title = '¡Thanks! Come back soon'
})
window.addEventListener('focus', () => {
    document.title = previousTitle
})