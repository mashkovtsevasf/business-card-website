class NavBar extends HTMLElement {

  headerNavFilled = false;

  constructor () {
    super();
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if ((!this.headerNavFilled && scrollTop > 0) || (this.headerNavFilled && scrollTop === 0)) {
      this.classList.toggle("nav-filled");
      this.headerNavFilled = !this.headerNavFilled;
    }
  }
}

customElements.define("nav-bar", NavBar);

class HamburgerMenu extends HTMLElement {
  constructor () {
    super();
    const toggleBtn = this.querySelector(".menu__btn");
    const items = this.querySelectorAll(".menu__item");
    toggleBtn.addEventListener("click", () => {
      this.classList.toggle("open");
    });
    items.forEach((item)=> {
      item.addEventListener("click", () => {
        this.classList.remove("open");
      });
    });
  }
}

customElements.define("hamburger-menu", HamburgerMenu);

class ImgModal extends HTMLElement {
  constructor () {
    super();
    const closeBtn = this.querySelector("button");
    const openBtn = document.querySelector('button[data-for="diplomas_modal"]');

    closeBtn.addEventListener("click", this.toggleModal);
    openBtn.addEventListener("click", this.toggleModal);
  }

  toggleModal = () => {
    this.classList.toggle("visible");
  }
}

customElements.define("img-modal", ImgModal);

