import {
    LitElement,
    css
} from 'lit-element';
import {html, unsafeStatic} from 'lit/static-html.js';

export class GcTitle extends LitElement {

    static get styles() {
        return [css `
            .gc-title{
                margin-bottom: 1rem;
                font-size: var(--size-40px);
                font-family: var(--font-nunito);
            }
        `]
    }

    constructor() {
        super();
        this.text = '';
        this.tag = 'h1';
    }


    static get properties() {
        return {
            text: {
                type: String
            },
            tag: {
                type: String
            }
        };
    }

    render() {
        return html `<${unsafeStatic(this.tag)} class="gc-text">${this.text}</${unsafeStatic(this.tag)}>`;
    }

    
}
customElements.define('gc-title', GcTitle);