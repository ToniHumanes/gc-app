import {
    LitElement,
    html,
    css
} from 'lit-element';
import {Icons} from './icons'

export class GcInput extends LitElement {

    static get styles() {
        return css `
            :host{
                width: 100%;
                display: flex;
                margin-bottom: 1rem;
                position: relative;
            }

            .contain-input{
                display: flex;
                width: 100%;
                position: relative;
                align-items: center;
            }

            .input--icon{
                padding: 3px;
                position: absolute;
                right: 5px;
                width: 18px;
                height: 18px;
            }

            .input--icon svg{
                fill: var(--color-grey-dark);
                width: 20px;
                height: 20px;
            }

            .input{
                padding: 9px 15px;
                box-shadow: none;
                border: 1px solid grey;
                font-size: 1rem;
                width: 100%;
            }

            .input:focus{
                outline: none;
                border: 1px solid var(--color-grey-dark);
            }


            @media (min-width: 768px){
                :host{
                    width: auto;
                }
            }
        `
    }

    constructor() {
        super();
        this.placeholder = '';
            this.typeInput = 'text';
            this.claseVariacion = '';
            this.idComponent = '';
            this.description = '';
            this.price = '';
            this.icon = ''
    }

    static get properties() {
        return {
            placeholder: {
                type: String
            },
            claseVariacion: {
                type: String
            },
            typeInput: {
                type: String
            },
            idComponent: {
                type: String
            },
            description: {
                type: String
            },
            price: {
                type: Number
            },
            icon: {
                type: String
            }
        };
    }

    render() {
        return html `
        <div class="contain-input">
            <input 
                type="${this.typeInput}" 
                class="input ${this.claseVariacion}" 
                placeholder="${this.placeholder}"
                @keypress="${this.inputValue}"
                id=${this.idComponent}
                value="${this.typeInput === 'number' ? this.price : this.description}"
            >
            ${!!this.icon ? html`<span class="input--icon" @click="${this.fireEventIcon}">${Icons[this.icon]}</span>`: ''}
        </div>`;
    }

    inputValue(e) {
        if (e.target.type === 'number' && e.code === "KeyE") {
            e.preventDefault();
        }
    }

    fireEventIcon(e){
        e.preventDefault();
        this.changeInputType();
    }

    changeInputType(){

        if(this.typeInput === 'password'){
            this.typeInput = 'text';
            this.icon = 'eyeOff';
            return false;
        }

        if(this.typeInput === 'text'){
            this.typeInput = 'password';
            this.icon = 'eyeOn';
            return false;
        }
    }

}
customElements.define('gc-input', GcInput);