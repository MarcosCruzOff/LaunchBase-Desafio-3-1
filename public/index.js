const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
   card.addEventListener('click', function () {
      const videoId = card.getAttribute('itemid')
      // window.location.href = `/video?id=${videoId}`
      console.log('cliclk')
      modalOverlay.classList.add('ativo')
      modalOverlay.querySelector(
         'iframe'
      ).src = `https://blog.rocketseat.com.br/${videoId}`
   })
}

document.querySelector('.close-modal').addEventListener('click', function () {
   modalOverlay.classList.remove('ativo')
   modalOverlay.querySelector('iframe').src = ``
})
