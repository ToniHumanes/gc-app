import {
    LitElement,
    html,
    css
} from 'lit-element';

export class GcButton extends LitElement {

    static get styles() {
        return [css `
        
        .gc-button{
            min-width: 100px;
            padding: 9px 15px;
            border: 1px solid var(--color-grey-dark);
            background-color: var(--color-grey-dark);
            color: white;
            font-size: 1rem;
            cursor: pointer;
            width: 40%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .gc-button:hover{
            background-color: black;
        }


        .gc-button--ghost{
            background-color: transparent;
            color: var(--color-grey-dark);
        }  

        .gc-button--icon{
        }

        @media (min-width: 768px){
            .gc-button{
                width: auto;
                margin: initial;
            }
        }

        `]
    }

    constructor() {
        super();
        this.text = '';
        this.class = '';
        this.send = false;
        this.edit = false;
    }


    static get properties() {
        return {
            text: {
                type: String
            },
            class: {
                type: String
            },
            send: {
                type: Boolean
            },
            edit: {
                type: Boolean
            }
        };
    }

    render() {
        return html `<button class="gc-button ${this.class}" .edit="${this.edit}">${this.text} <slot name="icon"></slot></button>`;
    }
    
}
customElements.define('gc-button', GcButton);