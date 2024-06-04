import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['input', 'form', 'list']
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }

  update(event) {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.timeout = setTimeout(() => {
      this._fetchMovies()
    }, 2000)
    
  }

  _fetchMovies() {
    console.log('je suis dans update')
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    
    fetch(url, {headers: {"Accept": "text/plain"}})
      .then(response => response.text())
      .then(data => {
        this.listTarget.outerHTML = data
      })
  }


}