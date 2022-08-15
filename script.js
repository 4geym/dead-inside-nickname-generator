const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', generation);

function generation() {
    p.innerHTML = noCopRandom();
}

function noCopRandom() {
    const number = Math.floor(Math.random() * 4);
    let i = 0;
    let word = [];
    while(i <= number) {
        let random = wordArr[Math.floor(Math.random() * wordArr.length)];
        if(!word.find(e => e == random)) {
            word.push(random);
        } 
        i++;
    }
    return word.join(' ');
}