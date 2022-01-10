class RestaurantTitle extends HTMLElement {

    static get observedAttributes() {
        return ["restaurant-id"];
    }

    connectedCallback() {
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback() {
        const restaurantId = +this.getAttribute("restaurant-id");
        fetch(`//localhost:5000/restaurants/${restaurantId}`)
        .then(response => response.json())
        .then(data => {
            this.shadowRoot.innerHTML =  `<div class="text-center">${data.name}</div>`;
        });
    }
}

window.customElements.define("discover-restaurant-title", RestaurantTitle);