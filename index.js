const timer = document.querySelector('.preview__timer')
const time = timer.textContent.split(':').map(num => Number(num))
const currentImage = document.querySelector('.order__image')
const carousel = document.querySelector('.order__carousel')

const originalPrice = 250.00
const discountPrice = 160.00

document.querySelector('.preview__price_previous').textContent = `R ${originalPrice.toFixed(2)}`
document.querySelector('.preview__price_current').textContent = `R ${discountPrice.toFixed(2)}`

const interval = setInterval(() => {
  time[2] == 0 && time[1] == 0 && time[0] == 0 && clearInterval(interval)

  if (time[2] > 0) {
    time[2]--
  } else if (time[1] > 0) {
    time[2] = 59
    time[1]--
  } else {
    time[2] = 59
    time[1] = 59
    time[0]--
  }

  timer.textContent = time.map(num => String(num).padStart(2,'0')).join(':')
}, 1000)

carousel.addEventListener('click', e => {
  if (!e.target.src) return
  document.querySelector('.order__preview_active').classList.remove('order__preview_active')
  e.target.classList.add('order__preview_active')
  currentImage.classList.add('order__image_hidden')
  setTimeout(() => {
    currentImage.src = e.target.src
    currentImage.classList.remove('order__image_hidden')
  }, 300)
})