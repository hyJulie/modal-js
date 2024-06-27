const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

/*Um toggle é um elemento de interface que permite alternar entre dois estados, 
geralmente representados por um botão que pode ser clicado para ativar ou desativar uma determinada funcionalidade. 

classList = lista de classes
*/

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

//vao ter eventos de click
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal())
});