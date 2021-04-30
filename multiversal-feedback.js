import {LitElement, html, css} from 'lit-element';

export class MultiversalFeedback extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Verdana, Geneva, sans-serif;
        text-align: center;
      }
      h1 {
        font-size: 24px;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        line-height: 26.4px;
      }
      button,
      input {
        background-color: white;
        border: solid gray 1px;
        border-radius: 4px;
        box-shadow: none;
        margin-top: 10px;
        padding: 4px;
      }
      .feedbackForm {
        display: grid;
        grid-template-columns: [left] auto [right] 1fr;
        grid-auto-flow: row;
        grid-gap: 0.8em;
        background: #eee;
        padding: 1.2em;
      }
      .feedbackForm > label {
        grid-column: left;
        grid-row: auto;
      }
      .feedbackForm > input,
      .feedbackForm > textarea,
      .feedbackForm > #submitButton {
        grid-column: right;
        grid-row: auto;
        border: none;
        padding: 1em;
      }
      .feedbackForm > #cancelButton {
        grid-column: left;
        grid-row: auto;
        border: none;
        padding: 1em;
      }
      /* These are the styles for the dialog */
      dialog {
        border: solid gray 2px;
        border-radius: 10px;
      }
      ::backdrop, /* for native <dialog> */
      dialog + .backdrop {
        /* for dialog-polyfill */
        /* a transparent shade of gray */
        background-color: rgba(0, 0, 0, 0.5);
      }
    `;
  }

  static get properties() {
    return {
      title: {type: String},
      subjectFieldName: {type: String},
      commentsFieldName: {type: String},
      cancelButtonName: {type: String},
      submitButtonName: {type: String},
      submitFunction: {
        type: Function,
      },
    };
  }

  constructor() {
    super();
    this.subjectFieldName = 'Subject';
    this.commentsFieldName = 'Comments';
    this.cancelButtonName = 'Cancel';
    this.submitButtonName = 'Submit';
    this.submitFunction = (e) => {
      e.preventDefault();
      console.log('Create and pass submit function.');
    };
  }

  getForm() {
    var formData = this.shadowRoot.querySelector('form');    
    return formData;
  }
 
  render() {
    return html`
      <dialog id="feedbackDialog">
        <h1>${this.title}</h1>

        <form
          id="metaverseForm"
          method="dialog"
          class="feedbackForm"
          @submit="${this.submitFunction}"
        >
          <label for="subject">${this.subjectFieldName}:</label>
          <input id="subject" type="text" name="subject" required />
          <label for="comments">${this.commentsFieldName}:</label>
          <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
          <button value="cancel" id="cancelButton">${this.cancelButtonName}</button>
          <button type="submit" id="submitButton" value="default">
            ${this.submitButtonName}
          </button>
        </form>
      </dialog>
    `;
  }
  
  showDialog() {
    this.renderRoot.getElementById('feedbackDialog').showModal();
  }

  closeDialog() {
    this.renderRoot.getElementById('feedbackDialog').close();
  }
}

window.customElements.define('multiversal-feedback', MultiversalFeedback);

