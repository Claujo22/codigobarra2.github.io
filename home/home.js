
class Home extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML= `
        <h1>Home!!!!</h1>
        <div><img src="home/img/22.jpg" ></div>
        
        `
        
    }

}

window.customElements.define("app-home", Home);