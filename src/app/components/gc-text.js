import {
    LitElement,
    html,
    css
} from 'lit-element';

export class GcText extends LitElement {

    static get styles() {
        return [css `
            .gc-text{
                margin-bottom: 1rem;
                font-size: var(--size-16px);
                font-family: var(--font-nunito);
            }

            .gc-text--xs{
                font-size: var(--size-10px);
            }

            .gc-text--md{
                font-size: var(--size-24px);
            }

            .gc-text--lg{
                font-size: var(--size-32px); 
            }
        `]
    }

    constructor() {
        super();
        this.text = '';
        this.class = '';
    }


    static get properties() {
        return {
            text: {
                type: String
            },
            class: {
                type: String
            },
        };
    }

    render() {
        return html `<p class="gc-text ${this.class}">${this.text}</p>`;
    }

    
}
customElements.define('gc-text', GcText);