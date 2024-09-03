window.addEventListener('load', () => {
  const loader = document.querySelector('.loader')
  setTimeout(() => {
    loader.classList.add('loader-hidden')
    loader.addEventListener('transitionend', () => {
      setTimeout(() => {
        loader.parentNode.removeChild(loader)
      }, 500)
    })
  }, 1500)
})
