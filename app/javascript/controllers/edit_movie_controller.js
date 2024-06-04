import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['form']

  displayForm() {
    this.formTarget.classList.remove('d-none')

  }

  update(event) {
    event.preventDefault()
    console.log('coucou')

    const url = this.formTarget.action

    fetch(url, {
      headers: {
        "Accept": "text/plain",
      },
      method: "PATCH",
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then(data => {
      this.element.outerHTML = data
    })
  }
}