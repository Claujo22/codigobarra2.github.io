class Producto extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML= `
        <h1>Productos!</h1>
        `
        
    }

}

window.customElements.define("app-producto", Producto);