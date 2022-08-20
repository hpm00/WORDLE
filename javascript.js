const keys = document.getElementsByClassName("piece")
Array.from(keys).forEach((key) => {
    key.addEventListener('keyup', (e) => {
        if (key.value.length >= 1) {
        key.nextElementSibling.focus()
    }
        else if (e.keyCode === 8) {
            key.previousElementSibling.focus()
        };
})
});