



const btnMenuDestination = document.querySelectorAll('.menu-destination a');
//console.log(btnMenuDestination);

btnMenuDestination.forEach(function(btn) {
    
    //ao clicar em qualquer botão
    btn.addEventListener('touchstart' && 'click', function(){                
        //faz um loop removendo a classe de todos os botões
        btnMenuDestination.forEach(btn => {
            btn.classList.remove('active-planet');
        })

        //add a classe ao botão clicado (this)
        this.classList.add('active-planet');

        //console.log(this.dataset.planet)
        showPlanet(this.dataset.planet);
    })

})


function showPlanet(id){    //
    const contentPlanet = document.querySelectorAll('.content-planet');    
    contentPlanet.forEach(planet =>{
        //console.log(planet.dataset.planet);
        planet.classList.remove('show');
        if(planet.dataset.planet == id){
            planet.classList.add('show');
        }
    })
}


//const moon = document.querySelector('#moon');
//const mars = document.querySelector('#mars');
//const europa = document.querySelector('#europa');
//const titan = document.querySelector('#titan');

//const btnMoon = document.querySelector('#btn-moon');
//const btnMars = document.querySelector('#btn-mars');
//const btnEuropa = document.querySelector('#btn-europa');
//const btnTitan = document.querySelector('#btn-titan');

// //moon
// btnMoon.addEventListener('click', function(){   
    
//     moon.classList.add('show');     
//     mars.classList.remove('show');
//     europa.classList.remove('show');
//     titan.classList.remove('show');
// });



// //mars
// btnMars.addEventListener('click', function(){    
//     mars.classList.add('show');     
//     moon.classList.remove('show');
//     europa.classList.remove('show');  
//     titan.classList.remove('show');
// });

// //europa
// btnEuropa.addEventListener('click', function(){    
//     europa.classList.add('show')
//     mars.classList.remove('show');  
//     moon.classList.remove('show');
//     titan.classList.remove('show');    
// });

// //titan
// btnTitan.addEventListener('click', function(){    
//     titan.classList.add('show')
//     mars.classList.remove('show');  
//     moon.classList.remove('show');
//     europa.classList.remove('show')      
// });


/*menuBtn.addEventListener('click',function(){

    contentPlane.classList.toggle('show');
    contentPlane.classList.toggle('d-none');
    //contentPlanet.style.display = 'block';
    //contentPlanet = document.add('.show');
    
})

//menuBtn.addEventListener('click',function(){

    contentPlane.classList.remove('show');
    contentPlanet = document.remove('d-none');

})*/