/*será una función autoinvocada*/
(function(){
    /*quiero obtener todos los elementos con la clase questions_title y con los 3 puntos lo convierto en un array */
    const titleQuestions = [...document.querySelectorAll('.questions_title')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            /*alert('ouch, me diste click')*/
            let height = 0;/*para calcular el alto del elemento*/
            let answer = question.nextElementSibling; /*para obtener al siguiente hermano de question, que en este caso el hermano de h3 es el parrafo p*/
            let addPadding = question.parentElement.parentElement;/*para obtener al padre del padre de ese elemento*/

            addPadding.classList.toggle('questions_padding--add');/*voy a agregar o quitar la clase questions_padding--add*/

            /*quiero obtener los hijos de question*/
            /*y a su primer hijo le agrego o quito la clase questions_arrow--rotate*/
            question.children[0].classList.toggle('questions_arrow--rotate');

            /*si el height del párrafo es 0 significa que le quitamos el height*/
            /*entonces la variable height tendrá el alto mínimo*/
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;

        })
    });

})();