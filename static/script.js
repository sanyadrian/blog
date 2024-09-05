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
document.addEventListener('DOMContentLoaded', function () {
  if (!getCookie('cookieConsent')) {
    document.getElementById('cookieConsent').style.display = 'block'
  }

  document.getElementById('acceptCookies').onclick = function () {
    setCookie('cookieConsent', 'accepted', 30)
    document.getElementById('cookieConsent').style.display = 'none'
  }

  function setCookie (name, value, days) {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }

  // Helper function to get a cookie
  function getCookie (name) {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle')
  const mainNav = document.getElementById('main-navigation')

  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active')
  })
})
