// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('a');
    
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addList(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';
    
})

const addList = (product, quantity) => {
    const newProduct = document.createElement('li');
    newProduct.innerText = `${quantity} ${product}`;
    ul.appendChild(newProduct);
    form.appendChild(ul);
}