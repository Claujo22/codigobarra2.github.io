class Contacto extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML= `
        <h1>Contacto!!!</h1>
        `
        
    }

}

window.customElements.define("app-contacto", Contacto);