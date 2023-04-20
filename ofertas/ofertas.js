

class Ofertas extends HTMLElement {
    constructor() {
        super();
        

    }
    connectedCallback() {
        
        this.innerHTML = `
        <h1>Ofertas!</h1>
        
        `

    }

}

window.customElements.define("app-ofertas", Ofertas);