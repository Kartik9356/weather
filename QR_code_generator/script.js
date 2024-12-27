
function qg() {
    let img = document.querySelector("img");
    let input = document.querySelector("input");
    if (input.value.length > 0) {
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        img.src = `${url}`;
    }
    else {
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
        }, 1000);
    }
}
document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        qg();
    }
})
