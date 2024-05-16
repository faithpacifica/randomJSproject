const msg = document.querySelector('#text');
const textarea = document.querySelector('textarea');
const countBox = document.querySelector('.counter-box');
const typedCharEl = document.querySelector('.typedChar');

const maxChar = 50;

msg.addEventListener('input', onTyping);

function onTyping(e) {
    let typedChar = 0;
    typedChar = e.target.value.length;
    typedCharEl.textContent = typedChar;
    console.log(typedChar);

    if (typedChar >= maxChar) {
        countBox.style.color = 'red';
        textarea.style.borderColor = 'red';
    }
    else {
        countBox.style.color = '#1ebf1e';
        textarea.style.borderColor = '#1ebf1e';
    }
}

// IMAGE GALLERY
const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
panel.addEventListener('click', ()=>{
    removeActiveClass();
    panel.classList.add('active');
});
});

function removeActiveClass(){
    panels.forEach((item)=>{
        item.classList.remove('active');
    });

}