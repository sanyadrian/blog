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
  // Check if the 'cookieConsent' cookie is already set
  if (!getCookie('cookieConsent')) {
    document.getElementById('cookieConsent').style.display = 'block'
  }

  // Handle clicking the 'Accept' button
  document.getElementById('acceptCookies').onclick = function () {
    setCookie('cookieConsent', 'accepted', 30) // Set the cookie for 30 days
    document.getElementById('cookieConsent').style.display = 'none'
  }

  // Helper function to set a cookie
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
