import {
  lista
} from '../../js/fakeAPI/index.js'
import {
  containerCards,
  updateList
} from '../../js/index.js'
import {
  footer,
  nav
} from '../../js/navHeader/index.js'

const productInfo = (produto) => {
  const productInfos = document.querySelector('[data-product]')

  const html = `
  <div class="product__img" id="teste" style="background-image: url('${produto.img}');background-size: contain ;"></div>
  <div class="product__infos">
    <h1>${produto.nome}</h1>
    <p>R$ ${produto.preco}</p>
    <p>${produto.descricao}</p>
  </div>
  `
  productInfos.innerHTML = html;
}


window.onload = function () {


  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const id = url.searchParams.get('id')

  updateList();

  const paths = {
    icone: "../../img/icone.png",
    ead: "../../img/ead.png",
    store: "../../img/store.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgSeta: "../../img/seta.png",
    imgSlider: "../../img/setaSlider.png",
    allProducts: "../allproducts/index.html",
    productList: lista[listIndex],
    productAmount: '',
    listIndex: listIndex,
    url: "",
    login: "../login/login.html",
    inputShow: true,
  }

  // const path = '../../img/setaSlider.png'
  // const seta = '../../img/seta.png'
  
  const productURL = ''
  containerCards(paths);
  const title = document.querySelector('[data-title]')
  title.innerHTML = "Produtos similares"


  // const paths = {
  //   icone: "assets/img/icone.png",
  //   ead: "assets/img/ead.png",
  //   store: "assets/img/store.png",
  //   lupa: "assets/img/lupa.png",
  //   home: "#",
  //   imgSeta: "assets/img/seta.png",
  //   imgSlider: "assets/img/setaSlider.png",
  //   allProducts: "assets/pages/allproducts/index.html",
  //   productList: lista,
  //   productAmount: lista.length,
  //   listIndex: '',
  //   url: "./assets/pages/product/index.html"
  // }


  nav(paths);
  productInfo(lista[listIndex].produtos[id - 1].infos)
  footer(paths);

}