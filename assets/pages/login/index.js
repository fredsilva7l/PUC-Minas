import {
  footer,
  nav
} from '../../js/navHeader/index.js'


window.onload = function () {

  const paths = {
    controle: "../../img/icone.png",
    ead: "../../img/ead.png",
    store: "../../img/store.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "",
    inputShow: false
  }

  nav(paths);
  footer(paths);
}