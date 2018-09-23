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

4 - Quando apertar o enter vamos pegar o texto (ok)

5 - criar o component tag com o texto dentro e usar o id e o for

*/
/* $ usado para identificar  uma referencia no DOM */
/* 
const keyCode = event.keyCode
const keys = [13]
keys[13] = "Enter" 
*/
'use strict'

const $formCollab = window.document.querySelector('.form-collab') // Const que seleciona pra mim o .form-collab
const $label = $formCollab.querySelector('.label') // Seleciona o label dentro do form
const $input = $formCollab.querySelector('.input') // seleciona o input dentro do form
const $tags = $formCollab.querySelector('.tags') //seleciona a classe tags

const focusAndBlur = () => $label.classList.toggle('-focus') // Arow function (Sempre anonimas) // toggle vai literalmente alternar  a classe -focus,
const newTag = value => {
    const $tag = document.createElement('span')
    const template =
        `<input class="tagInput" id="${value}" type="checkbox" checked>
    <label style="margin-left: 5px;"class="tag" for="${value}">${value}</label>`
    //Template string com os lugares onde eu qero que mude o value indicado por '${x}' 
    $tag.innerHTML = template

    return $tag
}

$input.addEventListener('focus', focusAndBlur) // Add evento ao input quando ele for focado(Clicado)
$input.addEventListener('blur', focusAndBlur) // Add evento ao input quando ele for Desfocado(Clique sair)

$formCollab.addEventListener('submit', event => event.preventDefault()) // Previne o Refresh no form quando pressiona enter

$input.addEventListener('keyup', event => {

    const {
        keyCode
    } = event
    const keys = {
        13: "Enter" //Revisar 
    }

    if (keys[keyCode] === "Enter") { //quando uma tecla for pressionada, se foro enter entra nop bloco true
        const {
            value
        } = $input //Guarda o .value do que foi digitado dentro do input após o keyup para ser substituido no template
        $tags.prepend(newTag(value)) //Adiciona elemento na frente da tag html
        $input.value = ''
    }
})

$tags.addEventListener('click', event => {

    const {
        target
    } = event

    if (target.classList.contains('remove')) {
        const $wrapTag = target.closest('.wrapTag')

        $wrapTag.classList.add('-remove')
        $wrapTag.addEventListener('transitionend', () => $wrapTag.remove())
    }
})