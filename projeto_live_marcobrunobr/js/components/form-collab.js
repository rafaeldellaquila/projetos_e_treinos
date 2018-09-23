'use strict'

const $formCollab = window.document.querySelector('.form-collab') // Const que seleciona pra mim o .form-collab
const $label = $formCollab.querySelector('.label') // Seleciona o label dentro do form
const $input = $formCollab.querySelector('.input') // seleciona o input dentro do form
const $tags = $formCollab.querySelector('.tags') //seleciona a classe tags

const focusAndBlur = () => $label.classList.toggle('-focus') // Arow function (Sempre anonimas) // toggle vai literalmente alternar  a classe -focus,
const newTag = value => {
    const $tag = document.createElement('span')
    const template =
        `<span class="wrapTag">
        <input class="tagInput" id="${value}" type="checkbox">
        <label class="tag" for="${value}">${value}</label>
        <span class="remove">X</span>
    </span>`
    //Template string com os lugares onde eu qero que mude o value indicado por '${x}' 
    $tag.innerHTML = template

    return $tag
}

$input.addEventListener('focus', focusAndBlur) // Add evento ao input quando ele for focado(Clicado)
$input.addEventListener('blur', focusAndBlur) // Add evento ao input quando ele for Desfocado(Clique sair)

$formCollab.addEventListener('submit', event => event.preventDefault()) // Previne o Refresh no form quando pressiona enter

$input.addEventListener('keyup', event => {

    if (event.keyCode === 13) { //quando uma tecla for pressionada, se foro enter entra nop bloco true
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