const product = [
  {
    id: 0,
    image: "../img/P1.png",
    title: " GLORIOUS STOCK BOUQUET",
    price: 20,
  },
  {
    id: 1,
    image: "../img/P2.png",
    title: "SUCCULENT SUNSET",
    price: 35,
  },
  {
    id: 2,
    image: "../img/P3.png",
    title: "FLORAL EMBRACE",
    price: 40,
  },
  {
    id: 3,
    image: "../img/P4.png",
    title: "CELEBRATE",
    price: 60,
  },

  {
    id: 4,
    image: "../img/P5.png",
    title: "RED LONGSTEM ROSES",
    price: 50,
  },
  {
    id: 5,
    image: "../img/P6.png",
    title: "COLOURED LONG STEM",
    price: 29,
  },

  {
    id: 6,
    image: "../img/P7.png",
    title: "BOHO BEAUTY",
    price: 48,
  },
  {
    id: 7,
    image: "../img/P8.png",
    title: "BOLD & BEAUTIFUL",
    price: 80,
  },
  {
    id: 8,
    image: "../img/P9.png",
    title: "REGAL TROPICAL PLANTER",
    price: 90,
  },
  {
    id: 9,
    image: "../img/P10.png",
    title: "LARGE ANTHURIUM PLANTER",
    price: 84,
  },
  {
    id: 10,
    image: "../img/P11.png",
    title: "HANG-TIED COLOURED",
    price: 100,
  },
  {
    id: 11,
    image: "../img/P12.png",
    title: "DOZEN COLORFUL",
    price: 48,
  },
  {
    id: 12,
    image: "../img/P13.png",
    title: "ETERNAL SINGLE ROSES",
    price: 69,
  },
  {
    id: 13,
    image: "../img/P14.png",
    title: "KENDAL ORCHID",
    price: 76,
  },
  {
    id: 14,
    image: "../img/P15.png",
    title: "PURPLE PHALEONPSIS",
    price: 85,
  },
  {
    id: 15,
    image: "../img/P16.png",
    title: "MINI PURPLE ORCHID COLLECTION ",
    price: 23,
  },
  {
    id: 16,
    image: "../img/P17.png",
    title: "WHITE PHALEONOPSIS ORCHID",
    price: 46,
  },
  {
    id: 17,
    image: "../img/P18.png",
    title: "LOVING RETREAT CANDLE SET",
    price: 30,
  },
  {
    id: 18,
    image: "../img/P19.png",
    title: "SUCCESLENT SUNSET",
    price: 90,
  },
  {
    id: 19,
    image: "../img/P20.png",
    title: "MINI PURPLE ORCHID",
    price: 100,
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
document.getElementById("root").innerHTML = categories
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
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart
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

console.log('count')
