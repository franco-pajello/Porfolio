let ubicacionScrollInicial = window.scrollY;
let header = document.getElementById("header");
let logo = document.getElementById("header-logo-i");
const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
window.addEventListener("scroll", function scrollY() {
  let ubicacionScroll = window.scrollY;
  ubicacionScrollInicial >= ubicacionScroll
    ? ((header.style.top = "0px"),
      nav.classList.remove("visible"),
      abrirMenu.classList.remove("visible"))
    : ((header.style.top = "-60px"),
      nav.classList.remove("visible"),
      abrirMenu.classList.remove("visible"));

  ubicacionScrollInicial = ubicacionScroll;
});
window.addEventListener("resize", () => {
  let ubicacionWidth = window.innerWidth;
  ubicacionWidth <= 1024
    ? (logo.classList.remove("fa-solid", "fa-code"),
      logo.classList.add("oculto"))
    : (logo.classList.add("fa-solid", "fa-code"),
      logo.classList.remove("oculto"));
});
const ProyectoHTML = document.getElementById("container-proyectos");
const conocimientos = [
  {
    tecnologia: "NODE JS",
    img: "./web/src/asset/img/conocimientos/NODE2.svg ",
  },
  { tecnologia: "JAVA", img: "./web/src/asset/img/conocimientos/java2.svg" },
  {
    tecnologia: "JAVASCRIPT",
    img: "./web/src/asset/img/conocimientos/js2.svg ",
  },
  { tecnologia: "REACT", img: "./web/src/asset/img/conocimientos/react2.svg " },
  { tecnologia: "HTML", img: "./web/src/asset/img/conocimientos/HTML2.svg " },
  { tecnologia: "CSS", img: "./web/src/asset/img/conocimientos/CSS2.svg " },
  { tecnologia: "SASS", img: "./web/src/asset/img/conocimientos/SASS2.svg " },
  { tecnologia: "GIT", img: "./web/src/asset/img/conocimientos/GIT2.svg " },
  /*   { tecnologia: "EJS", img: "./asset/img/conocimientos/EJS.svg " }, */
  {
    tecnologia: "EXPRESS",
    img: "./web/src/asset/img/conocimientos/EXPRESS.svg ",
  },
  {
    tecnologia: "POSTMAN",
    img: "./web/src/asset/img/conocimientos/POSTMAN2.svg ",
  },
  {
    tecnologia: "MONGO DB",
    img: "./web/src/asset/img/conocimientos/MONGO2.svg ",
  },
  { tecnologia: "SQL", img: "./web/src/asset/img/conocimientos/SQL2.png " },
];
const diplomas = [
  {
    diploma: "Full Stack Nodejs",
    img: "./web/src/asset/img/diplomas/nodejs.png",
    url: "https://www.coderhouse.com/certificados/64583960e785bf00029bc3d8?lang=es",
  },
  {
    diploma: "Frontend",
    img: "./web/src/asset/img/diplomas/front.png",
    url: "https://www.coderhouse.com/certificados/62cb12726771e90024e7932a?lang=es",
  },
  {
    diploma: "Backend",
    img: "./web/src/asset/img/diplomas/backend.png",
    url: "https://www.coderhouse.com/certificados/6458395fe785bf00029bc3d6?lang=es",
  },
  /*   { diploma: "Data analitics", img: "./web/src/asset/img/diplomas/data-analitics.png" }, */

  {
    diploma: "Java",
    img: "./web/src/asset/img/diplomas/oracle-java.png",
    url: "./web/src/asset/img/diplomas/oracle-java.png",
  },
  {
    diploma: "Javascript",
    img: "./web/src/asset/img/diplomas/JavaScript.png",
    url: "https://www.coderhouse.com/certificados/6279914b34529e00192d8edc?lang=es",
  },
  {
    diploma: "React js",
    img: "./web/src/asset/img/diplomas/ReactJs.png",
    url: "https://www.coderhouse.com/certificados/62bf5fa246cbeb00190007a8?lang=es",
  },
  {
    diploma: "Desarrollo Web",
    img: "./web/src/asset/img/diplomas/DesarrolloWeb.png",
    url: "https://www.coderhouse.com/certificados/6222075962437f0025dc5291?lang=es",
  },
];
const proyecto = [
  {
    img: "./web/src/asset/img/foto-cv.jpg",
    titulo: "Registro de Reparto",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    enlace: '<i class="fa-solid fa-link fa-2x"></i> Enlace',
    codigo: '<i class="fa-brands fa-square-github fa-2x"></i> Codigo',
    tecnologias: [
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
    ],
  },
  {
    img: "./web/src/asset/img/foto-cv.jpg",
    titulo: "Registro de Reparto",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    enlace: '<i class="fa-solid fa-link fa-2x"></i> Enlace',
    codigo: '<i class="fa-brands fa-square-github fa-2x"></i> Codigo',
    tecnologias: [
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
    ],
  },
  {
    img: "./web/src/asset/img/foto-cv.jpg",
    titulo: "Registro de Reparto",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    enlace: '<i class="fa-solid fa-link fa-2x"></i> Enlace',
    codigo: '<i class="fa-brands fa-square-github fa-2x"></i> Codigo',
    tecnologias: [
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
    ],
  },
  {
    img: "./web/src/asset/img/foto-cv.jpg",
    titulo: "Registro de Reparto",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    enlace: '<i class="fa-solid fa-link fa-2x"></i> Enlace',
    codigo: '<i class="fa-brands fa-square-github fa-2x"></i> Codigo',
    tecnologias: [
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
    ],
  },
  {
    img: "./web/src/asset/img/foto-cv.jpg",
    titulo: "Registro de Reparto",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    enlace: '<i class="fa-solid fa-link fa-2x"></i> Enlace',
    codigo: '<i class="fa-brands fa-square-github fa-2x"></i> Codigo',
    tecnologias: [
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
    ],
  },
  {
    img: "./web/src/asset/img/foto-cv.jpg",
    titulo: "Registro de Reparto",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    enlace: '<i class="fa-solid fa-link fa-2x"></i> Enlace',
    codigo: '<i class="fa-brands fa-square-github fa-2x"></i> Codigo',
    tecnologias: [
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
      {
        icon: ' <i class="fa-brands fa-linkedin"></i>',
        tituloIcon: "Linkedin",
      },
    ],
  },
];
const conocimientoHTML = document.getElementById(
  "container_main_section_conocimientos_card"
);
const diplomaHTML = document.getElementById(
  "container_main_section_diplomas_card"
);

function conocimientosCard(conocimientos) {
  let card = "";
  conocimientos.forEach((element) => {
    card += `
    <div class='container_main_section_conocimientos_card-div'>
  
      <div class='tecnologias'>
       <img class='tecnologias_img' src=${element.img}> </img>
      </div>
      <h6 class='tecnologias_titulo'>
       <spam>${element.tecnologia}</spam>
      </h6>
  
    </div>
       `;
  });

  conocimientoHTML.innerHTML = card;
}
function diplomasCard(diplomas) {
  let card = "";
  diplomas.forEach((element) => {
    card += `
    <div class='diplomas-wd'>
      <div class='diplomas'>
          <div class='diplomas_container_img' >
            <a href="${element.url}" target="_blank">
              <img class='diplomas_img' src=${element.img}> </img>
              <div class='diploma-icon-enlace'><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            </a>
          </div>
          <h6 class='diplomas_titulo'><spam>${element.diploma}</spam></h6>
      </div>
    </div>
       `;
  });

  diplomaHTML.innerHTML = card;
}
function tecnoDelProyecto(tecnologias) {
  let card = "";
  tecnologias.forEach((element) => {
    card += `
    <li class="icon-tecnologias-del-proyecto-li">
      <button>
        ${element.icon}
        <span> ${element.tituloIcon}</span>
      </button>
    </li>
       `;
  });

  return card;
}
function Proyectos(proyecto) {
  let card = "";
  proyecto.forEach((element) => {
    card += `

    <div class="main-proyectos-card">
    <img src="${element.img}" alt="...">
    <div class="container-body">
      <div class="main-proyectos-card-body">
        <h5 class="main-proyectos-card-title">${element.titulo}</h5>
        <div class="tecnologias-del-proyecto">
          <ul id="tecnologias-del-proyecto-ul">
              ${tecnoDelProyecto(element.tecnologias)}
          </ul>
        </div>
        <p class="main-proyectos-card-text">${element.descripcion}</p>
      </div>
      <div class="main_section_proyecto_icon-contacto">
        <ul>
          <li class="icon-proyecto">
            <button>
            ${element.enlace}
            </button>
          </li>
          <li class="icon-proyecto">
            <button>
              ${element.codigo}
            </button>
          </li>

      </ul>
    </div>
    </div>
  </div>
       `;
  });
  ProyectoHTML.innerHTML = card;
}
abrirMenu.addEventListener("click", () => {
  nav.classList.add("visible");
  abrirMenu.classList.add("visible");
});
cerrarMenu.addEventListener("click", () => {
  nav.classList.remove("visible");
  abrirMenu.classList.remove("visible");
});
conocimientosCard(conocimientos);
diplomasCard(diplomas);
Proyectos(proyecto);
