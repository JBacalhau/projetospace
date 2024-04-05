
/*const btnMenuCrew = document.querySelectorAll('.menu-crew button');

//console.log(btnMenucrew);

btnMenuCrew.forEach(function(btn) {
    
    //ao clicar em qualquer botão
    btn.addEventListener('click', function(){                
        //faz um loop removendo a classe de todos os botões
        btnMenuCrew.forEach(btn => {
            btn.classList.remove('active-crew');
        })

        //add a classe ao botão clicado (this)
        this.classList.add('active-crew');

        //console.log(this.dataset.planet)
        showCrew(this.dataset.crew);
    })

})


function showCrew(id){    
    const infoCrew = document.querySelectorAll('.info-crew');    
    infoCrew.forEach(crew =>{
        
        crew.classList.remove('show-crew');
        if(crew.dataset.crew == id){
            crew.classList.add('show-crew');
        }
    })
}*/


let currentSlideIndex = 0;
const slides = document.querySelectorAll('.info-crew');

function nextSlide() {
    const currentSlide = slides[currentSlideIndex];
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    slides.forEach(slide => slide.classList.remove('show-crew'));
    slides[currentSlideIndex].classList.add('show-crew');
    updateActiveMenuButton(currentSlideIndex + 1);
}

function prevSlide() {
    const currentSlide = slides[currentSlideIndex];
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

    slides.forEach(slide => slide.classList.remove('show-crew'));
    slides[currentSlideIndex].classList.add('show-crew');
    updateActiveMenuButton(currentSlideIndex + 1);
}

function updateActiveMenuButton(activeIndex) {
    const menuButtons = document.querySelectorAll('.menu-crew button');

    menuButtons.forEach(button => {
        button.classList.remove('active-crew');
        if (parseInt(button.getAttribute('data-crew')) === activeIndex) {
            button.classList.add('active-crew');
        }
    });
}

slides.forEach(slide => {
    slide.addEventListener('touchstart', handleTouchStart);
    slide.addEventListener('touchmove', handleTouchMove);
    slide.addEventListener('touchend', handleTouchEnd);
    slide.addEventListener('mousedown', handleMouseDown);
    slide.addEventListener('mouseup', handleMouseUp);
});

const menuButtons = document.querySelectorAll('.menu-crew button');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const crewIndex = button.getAttribute('data-crew');
        const selectedSlide = document.querySelector(`.info-crew[data-crew="${crewIndex}"]`);

        slides.forEach(slide => slide.classList.remove('show-crew'));
        selectedSlide.classList.add('show-crew');
        updateActiveMenuButton(crewIndex);
        button.classList.add('active-crew'); // Adicionar classe ao botão do menu clicado
    });
});

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    if (startX - endX > 50) {
        // Swipe para a esquerda
        nextSlide();
    } else if (endX - startX > 50) {
        // Swipe para a direita
        prevSlide();
    }
    startX = 0;
    endX = 0;
}

function handleMouseDown(event) {
    startX = event.clientX;
}

function handleMouseUp(event) {
    endX = event.clientX;
    const diffX = startX - endX;
    if (diffX > 50) {
        // Mouse move para a esquerda
        nextSlide();
    } else if (diffX < -50) {
        // Mouse move para a direita
        prevSlide();
    }
    startX = 0;
    endX = 0;
}