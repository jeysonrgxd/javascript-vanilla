// esto se repetira son como componentes que reutilizara
const Header = ()=>{
   const view = `
      <div class="Hearder-main">
        <div class="Header-logo">
            <h1>
                <a href="/">
                    100tifi.co
                </a>
            </h1>
        </div>
        <div class="Header-nav">
            <a href="#/about/">
                About
            </a>
        </div>
    </div>
   `;
   return view;
}

export default Header