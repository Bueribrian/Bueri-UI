window.onload = ()=>{
    fetchItems()
    
    let btnMenu = document.querySelector('#btn-menu')
    let menu = document.querySelector('#menu-bar')
    let exitMenu = document.querySelector('#exit-menu')
    let Linksmenu = document.querySelectorAll('#menu-bar a')
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
            menu.style.display='none'
            Linksmenu.forEach(link =>{
                link.addEventListener('click',()=>{
                    menu.style.display='none'
                    
                })
            })
        
            btnMenu.addEventListener('click',()=>{
                menu.style.display='flex'
            })
            exitMenu.addEventListener('click',()=>{
                menu.style.display='none'
            })
        } else {
            menu.style.display='flex'
        }
      }
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes 

    
   
}
const navProyectsItems = Array.from(document.querySelectorAll('.panel ul li'))

// Navbar


//  /NAVBAR

// Proyects 

// Generador de template
let printHtml = function(data){
    let proyectsContainer = document.querySelector('.proyects-container')
    proyectsContainer.innerHTML=''
    data.map( item =>{
        let template = `
        <div  class="card" >
        <a href='${item.link}' target="_blank">
            <img src="${item.img}" class=""  alt="...">
            <div class="card-title">
                <a  href='${item.link}' target="_blank">${item.title}</a>
            </div>
        </a>
        </div>
        `   
        proyectsContainer.innerHTML += template
    })
       
    }
   
    


// funcion para traer los items del proyects.json

let fetchItems = function(tag='todos'){
    fetch('./assets/js/proyects.json')
            .then(response =>{ 
                return response.json()
            })
            .then(data =>{ 
                if(tag === 'todos'){
                    
                    printHtml(data)
                }else{
                    const result = data.filter(item => item.tag === tag);
                    printHtml(result)
                }
                
            })
}

// recorro los items del navbar de proyectos
navProyectsItems.forEach((navItem, index) =>{
    // le agrego el evento click al item al que se vaya a elegir
    navItem.addEventListener('click', function getItems(){
        // remuevo la clase checked a todos los items 
        navProyectsItems.map(item => item.classList.remove('active'))
        // agrego la clase checked solo al item clickeado
        navItem.classList.add('active')
        // llamo a la funcion para traer los items del proyects.json
        fetchItems(navItem.dataset.tag)
    })
} )




