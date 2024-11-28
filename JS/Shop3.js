const product = [
    {
      id: 0,
      image: "../img/T1.png",
      title: "SPARHIPHYLLUM PEACE LILY PLANT",
      price: 50,
    },
    {
      id: 1,
      image: "../img/T2.png",
      title: "MONEY TREE PLANT",
      price: 60,
    },
    {
      id: 2,
      image: "../img/T3.png",
      title: "SPARHIPHYLLUM PLANT",
      price: 80,
    },
    {
      id: 3,
      image: "../img/T4.png",
      title: "MONSTREA PLANT",
      price: 71,
    },
  
    {
      id: 4,
      image: "../img/T5.png",
      title: "WHITE GLOSS SUCCULENT",
      price: 65,
    },
    {
      id: 5,
      image: "../img/T6.png",
      title: "MID-CENTURY GARDEN",
      price: 35,
    },
  
    {
      id: 6,
      image: "../img/T7.png",
      title: "BALLA PALM",
      price: 69,
    },
    {
      id: 7,
      image: "../img/T8.png",
      title: "BLOOMING STONE GARDEN",
      price: 70,
    },
    {
      id: 8,
      image: "../img/T9.png",
      title: "MONSTRA SWISS CHEESE",
      price: 39,
    },
    {
      id: 9,
      image: "../img/T10.png",
      title: "SUCCELENT BOAT WHITE",
      price: 60,
    },
    {
      id: 10,
      image: "../img/T11.png",
      title: "PONYRAIL PALM",
      price: 46,
    },
    {
      id: 11,
      image: "../img/T12.png",
      title: "SANSEVIERIA PLANT",
      price: 30,
    },
    {
      id: 12,
      image: "../img/T13.png",
      title: "PEACE LILY BOWL",
      price: 50,
    },
    {
      id: 13,
      image: "../img/PP1.png",
      title: "SPOIL ME GIFT SET",
      price: 150,
    },
    {
      id: 14,
      image: "../img/PP2.png",
      title: "TUB TIME GIFT SET",
      price: 130,
    },
    {
      id: 15,
      image: "../img/PP3.png",
      title: "HOME SPA GIFT COLLECTION",
      price: 150,
    },
    {
      id: 16,
      image: "../img/PP4.png",
      title: "COMFORT LUCXURY GIFT BASKET",
      price: 140,
    },
    {
      id: 17,
      image: "../img/PP5.png",
      title: "RELAXING RETREAT GIFT BASKET",
      price: 125,
    },
    {
      id: 18,
      image: "../img/PP6.png",
      title: "TOUCH OF GOLD",
      price: 100,
    },
    {
      id: 19,
      image: "../img/P20.png",
      title: "GARDEN OF WELLNESS",
      price: 30,
    },
  ];
  const categories = [
    ...new Set(
      product.map((item) => {
        return item;
      })
    ),
  ];
  let i = 0;
  document.getElementById("root2").innerHTML = categories
    .map((item) => {
      var { image, title, price } = item;
      return (
        `
        <div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div>
          <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + i++ +")'>Add to cart</button>" +
        `</div>
          </div>`
      );
    })
    .join("");
  
  var cart = [];
  
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0,
      total = 0;
    document.getElementById("count2").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById("cartItem2").innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
      document.getElementById("cartItem2").innerHTML = cart
        .map((items) => {
          var { image, title, price } = items;
          total = total + price;
          document.getElementById("total").innerHTML = "$ " + total + ".00";
          return (
            `<div class='cart-item'>
                  <div class='row-img'>
                      <img class='rowimg' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}</p>
                  <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement(" +
            j++ +
            ")'></i></div>"
          );
        })
        .join("");
    }
  }
  