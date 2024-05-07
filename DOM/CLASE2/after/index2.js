let lista = document.querySelector('ul');
let tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
/*
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Node.js</li>
*/
let items = tecnologias.map(tecnologia =>{
    let elemento = document.createElement('li');
    elemento.textContent = tecnologia;
    return elemento;
})

items.forEach(item =>{
    lista.lastChild.after(item);
})

