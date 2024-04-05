
const btnMenuTec = document.querySelectorAll('.menu-tec button');

//console.log(btnMenucrew);

btnMenuTec.forEach(function(btn) {
    
    //ao clicar em qualquer botão
    btn.addEventListener('click', function(){                
        //faz um loop removendo a classe de todos os botões
        btnMenuTec.forEach(btn => {
            btn.classList.remove('active-tec');
        })

        //add a classe ao botão clicado (this)
        this.classList.add('active-tec');

        
        showTec(this.dataset.tec);
    })

})


function showTec(id){    
    const infoTec = document.querySelectorAll('.info-tec');    
    infoTec.forEach(tecn =>{
        //console.log(tec.dataset.tec);
       tecn.classList.remove('show-tec');
        if(tecn.dataset.tec == id){
            tecn.classList.add('show-tec');
        }
    })
}
