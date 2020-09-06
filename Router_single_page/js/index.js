import Router from './router.js'
import routes from './routes.js'

const router = new Router(routes)

// obtenemos los botones
const button_change = document.querySelectorAll("[data-button]")

for(let button of button_change){
   button.addEventListener("click",(event)=>{
      router.loadRouter(event.target.dataset.button)
   })
}





