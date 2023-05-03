const target = document.getElementById('username')
target.addEventListener('input', (e) => {
    console.log(e)
    console.log((e.target as HTMLInputElement).value)
})
