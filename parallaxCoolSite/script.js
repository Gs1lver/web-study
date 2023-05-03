let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;//faz o scroll da página

    text.style.marginTop = value * 2.5 + 'px'; // faz o texto subir
    leaf.style.top = value * -1.5 + 'px'; // faz a folha subir e sair da tela
    leaf.style.left = value * 1.5 + 'px'; // faz a sair da tela pela direita
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})
