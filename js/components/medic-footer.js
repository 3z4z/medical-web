class MedicFooter extends HTMLElement {
    constructor(){
        super();
        fetch('/components/footer.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        this.innerHTML = htmlContent;
      })
      .catch((error) => {
        console.error('Error loading HTML content:', error);
      });
    }
}

customElements.define('medic-footer', MedicFooter);