        let elemento = document.createElement('li');
        let menu = document.querySelector('#menu');
        //let input = document.querySelector('#input');
        //console.log(input.textContent)
        let link = document.createElement('a');
        link.href = 'https://www.google.com';
        link.textContent = 'Ir a google';

        function agregarElementos(){
            let li = document.createElement('li');
            li.textContent = 'CSS';
            menu.appendChild(li);
        }
        let input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('placeholder','Escribe algo');

        
        let elementoDiv = document.createElement('div')
        elementoDiv.textContent = 'Hola mundo';
        elementoDiv.id = 'hola'


        document.querySelector('#contenedor').appendChild(input);
        document.querySelector('#contenedor').appendChild(elementoDiv);
        menu.appendChild(link);