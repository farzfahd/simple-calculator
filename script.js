const tombolSapa = document.getElementById('sapaButton')
tombolSapa.addEventListener('click', function() {
    const isConfirmed = window.confirm('Apakah anda sayang saya?')
    if (isConfirmed) {
        alert('SAYA JUGA SAYANG KAMU!')
    } else {
        alert('oh...')
    }
})
