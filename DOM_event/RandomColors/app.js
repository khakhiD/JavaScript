const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const rgb = makeRandColor();
    const sum = rgb.reduce(function add(sum, cV) { return sum + cV })
    console.log(sum);
    const newColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    document.body.style.backgroundColor = newColor;   
    h1.innerText = newColor;
    if (sum <= 200 && sum > 0){
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    
})

const makeRandColor = () => {
    const rgb = [];
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    rgb.push(r,g,b);
    return rgb;
}

