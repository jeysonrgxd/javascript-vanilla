import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

// creamos un objeto para esteblecer la rutas y hacer render
const routes = {
   '/':Home,
   '/:id':Character,
   '/contact':'Contact'
}

// creamos un router se encarga de mostrar elementos de acuerdo ala logica
const router = async ()=>{
   // ubicamos nuestro elemento donde aremos render (public/index.html)
   const header = null || document.getElementById("header")
   const content = null || document.getElementById("content")

   header.innerHTML = await Header();
   let hash = getHash()
   let route = await resolveRoutes(hash)

   // recordar que esta varible render se le pasara una declaracion de funcion que tiene valor en los atributos de objeto routes
   let render = await routes[route] ? routes[route] : Error404

   // luego como render() es una funcion que retorna un valor (template lo metemos denteo de content)
   content.innerHTML = render()

}

export default router