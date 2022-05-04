const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// переписать на промис (!!!!!!!не fetch !!!!!!!!!!)
// Далее НЕ ИСПОЛЬЗОВАТЬ В КОДЕ!
let getRequest = (url, cb) => {
 return new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        reject('Error');
      } else {
        resolve(xhr.responseText);
      }
    }
  };
  xhr.send();
 });
}
// ---------------------------------

class ProductList {
  constructor(container = '.products') {
    this.container = document.querySelector(container);
    this.goods = [];
    this.productObjects = [];

    // this.fetchGoods();
    // this.render();

    this.getProducts()
        .then((data) => {
          this.goods = data;
          this.render();
        });
  }

  // fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log(data);
  //     this.goods = JSON.parse(data);
  //     this.render();
  //   });
  // }

  getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(response => response.json())
        .catch(err => console.log(err));
  }

  render() {
    for (const good of this.goods) {
      const productObject = new ProductItem(good);
      console.log(productObject);
      this.productObjects.push(productObject);

      this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class Basket {
  constructor() {
    this.goods = []
  }

}

class BasketItem {
  constructor() {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
  }
  getHTMLString() {
    return <div class="basketRow" data-id="${this.id}">
    <div>${this.title}</div>
    <div>$${this.price}</div>
  </div>;
  }
}

BasketList.prototype.addItem = function(ProductItem) {
  this.goods.push(ProductItem);
  showBasket();
}

let basketEl = document.querySelector('.hidden');

document.querySelector('.btn-cart').addEventListener('click', () => {
  basketEl.classList.toggle('hidden');
});

function showBasket() {
  document.querySelector('.btn-cart').basketEl.classList.toggle('hidden');
};


class BasketList {
  constructor(product) {
    this.id = product.id_product;
    this.title = product.product_name;
    this.price = product.price;
  }
}


new ProductList();

