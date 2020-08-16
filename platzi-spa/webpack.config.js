// crearemos toda la configuracion que require nuestro proyecto

//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require("path")

// archivo nesesario para trabajar con html
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CopyWebpackPlugin = require("copy-webpack-plugin")


//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
module.exports ={
   //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo. 
   entry:"./src/index.js",

   //Donde se envía el proyecto estructurado y compilado (archivo dist) listo para producción
   output:{
      //Creamos el lugar dónde se exportará el proyecto.
      path: path.resolve(__dirname, 'dist'),

      //Este es el nombre del archivo final para producción.
      filename: 'main.js'
   },
   resolve:{
      // extenciones que bamos autilizar
      extensions:['.js']
   },

   // creamos un modulo con als reglas nesesarias para empesar a trabajar (regla de babel) para que sea compatible con todos los navegadores
   module:{
      rules:[
         {
            // estructura de babel
            test:/\.js?$/,
            exclude: /node_modules/,
            use:{
               loader:'babel-loader',
            }
         }
      ]
      
   },
   // creamos la seccion de plugin para poder trabajr con archivos html
   plugins:[
      new HtmlWebpackPlugin(
         {
            // establecemos el valor en tru para poder injector codigo a un html
            inject:true,
            template:'./public/index.html',
            filename:'./index.html'
         }
      ),
      new CopyWebpackPlugin({
         patterns:[{
            from: './src/styles/styles.css',
            to: ''
         }]
      })
   ]
}