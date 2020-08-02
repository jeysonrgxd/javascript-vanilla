import router from './routes/index'

window.addEventListener('load',router)

// creamos un evento que sera encargado de escuchar las rutas (el hash al cual yo me estoy moviendo)
window.addEventListener('hashchange',router)
