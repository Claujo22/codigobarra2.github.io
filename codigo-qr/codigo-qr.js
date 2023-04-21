
class Qr extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML= `
        

        <h1>Hola QR</h1>
        
        `
        
    }

}

window.customElements.define("app-qr", Qr);