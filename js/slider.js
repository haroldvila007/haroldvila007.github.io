/*voy a  crear una funcion que se llame a si mismo*/
(function(){

    /*va a obtener todos los elementos con la clase testimony_body*/
    /*los corchetes y puntos son para que en vez de ser un nodo de elementos sea un array*/
    const sliders = [...document.querySelectorAll('.testimony_body')];
    /*creamos boton para siguiente con id next*/
    const buttonNext = document.querySelector('#next');
    /*creamos boton para atras con id before*/
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    //changePosition tiene como argumento add
    const changePosition = (add)=>{
        //para obtener al slider actual
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;/*recuerda que cada slider tendrá su dataset*/
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony_body--show');



    }

})();