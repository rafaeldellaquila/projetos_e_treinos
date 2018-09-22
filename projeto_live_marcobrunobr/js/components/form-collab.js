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

/*
funcionalidade
criar a tag dinamicamente e a tag tem que aparecer já selecionada
passo a passo:

1 - Pegar o input (esse ja fiz)

2 - Criar um ouvinte para o evento KeyUp KeyPress ou KeyDown (ok)

3 -  Dentro do evento preciso descobrir quando o usuario apertar a tecla enter (ok)

4 - Quando apertar o enter vamos pegar o texto

*/
/* $ usado para identificar  uma referencia no DOM */
'use strict'

const $formCollab = window.document.querySelector('.form-collab')
const $label = $formCollab.querySelector('.label')
const $input = $formCollab.querySelector('.input')
const focusAndBlur = () => $label.classList.toggle('-focus') // Arow function (Sempre anonimas) // toggle vai literalmente alternar  a classe -focus,

$input.addEventListener('focus', focusAndBlur) // Add evento ao input quando ele for focado(Clicado)
$input.addEventListener('blur', focusAndBlur) // Add evento ao input quando ele for Desfocado(Clique sair)

$formCollab.addEventListener('submit', event => event.preventDefault()) // Previne o Refresh no form quando pressiona enter

$input.addEventListener('keyup', function (event) {
    /* 
    const keyCode = event.keyCode
    const keys = [13]
    keys[13] = "Enter" 
    */
   const { keyCode } = event
   const keys = { 13: "Enter" }

    if (keys[keyCode] === "Enter") {
      console.log(this.value); 
    }
})
