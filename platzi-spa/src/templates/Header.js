// esto se repetira son como componentes que reutilizara
const Header = ()=>{
   const view = `
      <div class="Hearder-main">
        <divclass="Header-logo">
            <h1>
                <ahref="/">
                    100tifi.co
                </a>
            </h1>
        </div>
        <div class="Header-nav">
            <ahref="#/about/">
                About
            </a>
        </div>
    </div>
   `;
   return view;
}

export default Header