/*
OBJETIVOS:  Fazer o focus funcionar sem usar o: focus-within (css)
    Adicionar uma class chamada -focus no label quando o input for focado
        Lógica:
        0 - Pegar o componente e guardar em uma variavel (ok)
        1 - Pegar o label e guardar ele em uma variavel (ok)
        2 - Pegar o iput e guardar ele em uma variavel (ok)
        3 - Ouvir o evento focus do input (ok)
        4 - Agora que ouvimos o evento focus, podemos adicionar a class -focus na label

        DOM (Document Object Model) -document
        BOM (Browse Object Model) - window
*/

"use strict"

/* $ usado para identificar  uma referencia no DOM*/

const $formCollab = window.document.querySelector('.form-collab')
const $label = $formCollab.querySelector('.label')
const $input = $formCollab.querySelector('.input')

//Arow function (Sempre anonimas) 
const focusAndBlur = () =>$label.classList.toggle('-focus')


$input.addEventListener('focus', focusAndBlur) //Add evento ao input quando ele for focado(Clicado)
$input.addEventListener('blur', focusAndBlur) //Add evento ao input quando ele for Desfocado(Clique sair)

/*
function focusAndBlur() {
    $label.classList.toggle('-focus')//Vai procurar pela classe e se ela existir, vai retirar(false) e , se não, adicionará(true).
    console.log('Foi????');
}


/*Funcoes que adicionam e removem a classe(-focus)
function focusInput() {
    $label.classList.add('-focus')
}

function blurInput() {
    $label.classList.remove('-focus')
}
*/
