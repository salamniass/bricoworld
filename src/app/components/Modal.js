class Modal {
  constructor() {
    this.modal = document.querySelector(".modale")
    this.clesoIcon = document.querySelector(".modale__close")
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
  }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
    // listen for close click
    this.clesoIcon.addEventListener("click", () => this.closeTheModal())
    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  openTheModal(e) {
    e.preventDefault()
    this.modal.classList.add("modale--is-visible")
  }
  closeTheModal() {
    this.modal.classList.remove("modale--is-visible")
  }
}

export default Modal
