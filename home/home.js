
class Home extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML= `
        <center>
        <h1>Latam Dev</h1>
        <div class="imagen-home"><img src="home/img/logo-400-400.svg"></div> <br>
        <div class="imagen-home"><img src="home/img/vanilla-js-400-400.svg"></div>
        </center>
        `
        
    }

}

window.customElements.define("app-home", Home);