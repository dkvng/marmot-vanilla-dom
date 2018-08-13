// Immediately Invoked Function Expression

(function() {
  let modalHTML = "";

  if (document.querySelector("div.mini-cart-products")) {
    var productCount = document.querySelector("div.mini-cart-products").children
      .length;

    var cartTotalEstCost = Number(
      document.querySelector("td.order-value").innerText.slice(1)
    );

    var cartProductImages = [];
    document.querySelectorAll("div.mini-cart-image").forEach(el => {
      cartProductImages.push(el.querySelector("img").src);
    });

    let imagesHTML = "";

    cartProductImages.forEach(el => {
      imagesHTML += `<img src="${el}"/> `;
    });

    modalHTML = `<p>Product Count: ${productCount}</p>
    <p>Cart Total Estimated Cost: $${cartTotalEstCost}</p>
    ${imagesHTML}`;
  } else {
    modalHTML = "No items in cart";
  }

  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  let scrollAboveNinety = false;

  window.addEventListener("scroll", () => {
    if (
      (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100 > 90 &&
      scrollAboveNinety === false
    ) {
      scrollAboveNinety = true;

      if (document.querySelector(".custom-modal") === null) {
        document.querySelector(
          "body"
        ).innerHTML += `<section class="custom-modal" style="
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 200;
        left: 0;
        top: 0;">
        </section>`;
      }

      if (document.querySelector(".custom-modal").innerText === "") {
        document.querySelector(".custom-modal").style = `
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 200;
        left: 0;
        top: 0;`;

        document.querySelector(".custom-modal").innerHTML += `
        <div
        style="
        width: 50%;
        min-height: 60%;
        background: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        font-family: ars_maquette_probold,sans-serif;
        font-size: 16px;
        "
        >
        <a class="custom-modal-close-button">Close</a>
        <a href="https://www.marmot.com/cart">Go To Cart</a>
        ${modalHTML}
        </div>`;

        document
          .querySelector(".custom-modal-close-button")
          .addEventListener("click", () => {
            document.querySelector(".custom-modal").style = "";
            document.querySelector(".custom-modal").innerHTML = "";
          });

        document.querySelectorAll(".custom-modal a").forEach(el => {
          el.style = `
          background: #cc0001;
          border: 1px solid #cc0001;
          color: #fff;
          font-family: ars_maquette_probold,sans-serif;
          font-size: 13px;
          padding: 10px 0 10px 0;
          width: 80%;
          text-align: center;`;
        });
      }
    } else if (
      (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100 <=
      90
    ) {
      scrollAboveNinety = false;
    }
  });
})();
