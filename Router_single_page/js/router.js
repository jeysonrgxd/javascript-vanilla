class Router {

   constructor(routes){
      this.routes = routes;

      // para cargar la ruta inical de nuestro proyecto
      this._loadInitialRoute();
   }

   loadRouter(urlSegs){
      const matchedRoute = this._matchUrlToRoute(urlSegs)
      console.log(matchedRoute);

      // const url = `${urlSegs.join("/")}`;
      history.pushState({}, 'this works', urlSegs === '' ? './' : urlSegs);

      const routerOutElm = document.querySelector("[data-router]")
      routerOutElm.innerHTML = matchedRoute.template;
   }

   _matchUrlToRoute(urlSegs){

      const matchedRoute = this.routes.find(route => {
         const routePathSegs = route.path.split("/").slice(1).join("")

         if(routePathSegs.length !== urlSegs.length){
            return false
         }
         // este codigo hace que nesesaria mente las letras del pat sean igual que las routas
         // ya que sino cualquier palabra con el mismo cantidad letras puede ingresar al template
         return routePathSegs.split("").every((routePathSeg,i) => routePathSeg === urlSegs[i])

      })

      return matchedRoute
   }

   _loadInitialRoute(){
      // nombre super autoesplicativo que nos dice que bamos hacer
      const pathNameSplit = window.location.pathname.split("/");
      const pathSegs = pathNameSplit.length > 2 ? pathNameSplit[2] : ''
      console.log(pathSegs);

      // console.log("funcion _loadInitialRoute")
      // console.log(pathNameSplit);
      // console.log(pathSegs);

      this.loadRouter(pathSegs)
   }

}

export default Router