
//Função de mudar os paragrafos ativos e a linha de guia
const texts = document.querySelectorAll('.depoimento__info__content__paragrafo');
const lines = document.querySelectorAll('.depoimento__info__indicators--line');
const client = document.querySelectorAll('.depoimento__info__bottom--client');


const next = document.getElementById('next');
const prev = document.getElementById('prev');


let index = 0;

function update(){
    texts.forEach(t => t.classList.remove('active'));
    lines.forEach(l => l.classList.remove('active'));
    client.forEach(c => c.classList.remove('active'));

    texts[index].classList.add('active');
    lines[index].classList.add('active');
    client[index].classList.add('active');
}


//Função do click dos botões
next.addEventListener('click', () => {
    index++;

    if(index >= texts.length){
        index = 0;
    }

    update();
});

prev.addEventListener('click', () => {

index--;

if(index < 0){
index = texts.length - 1;
}

update();

});

