const nav = document.querySelector("nav");
const filterLinks = document.querySelectorAll(".filterLinks");

const filterPort = document.querySelectorAll(".filterPort");
// Portfolio Filter Links
const portfolio = document.querySelector(".portfolio-container");
const mainContent = document.querySelectorAll(".main-cont");
const testimonials = document.querySelectorAll(".testi");
const overlayDiv = document.querySelector(".overlay");

const portfolioInfo = [
  {
    a:"https://github.com/SamuelProgrammingBest/My-Portfolio-Page",
    img: "public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "BD",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/next-15-duolingo-clone-app-",
    img: "public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "BD",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/Sing-In-page-for-Facebook-clone",
    img: "public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "BD",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/Level-One-Assignments",
    img: "cr7 THE G.O.A.T.jpg",
    h3: "Architecture",
    p: "Architecture",
    filter: "3D",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/My-Portfolio-Page",
    img: "public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "3D",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/next-15-duolingo-clone-app-",
    img: "public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "3D",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/Sing-In-page-for-Facebook-clone",
    img: "/public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "HB",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/Level-One-Assignments",
    img: "public/portfo.jpeg",
    h3: "Architecture",
    p: "Architecture",
    filter: "HB",
  },

  {
    a:"https://github.com/SamuelProgrammingBest/My-Portfolio-Page",
    img: "cr7 THE G.O.A.T.jpg",
    h3: "Architecture",
    p: "Architecture",
    filter: "HB",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  filterLinks[0].classList.add("active"); 
  mainContent[0].classList.add("show"); 
  let html = "";

portfolioInfo.forEach((portfolio) => {
  html += `
    <a href="${portfolio.a}" target="_blank">
        <div class="portfolio">
          <div class="img">
            <img src="${portfolio.img}" alt="">
            <div class="overlayImg"></div>
            <div class="eye"><i class="fa-solid fa-eye"></i></div>
          </div>
          <div class="wordsPort">
            <h3>${portfolio.h3}</h3>
            <p>${portfolio.p}</p>
          </div>
        </div>
      </a>
    `;
});

portfolio.innerHTML = html;
});


filterLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    links.classList.remove("active");

    filterLinks.forEach((link) => {
      link.classList.remove("active");
      e.currentTarget.classList.add("active");
      mainContent.forEach((cont) => {
        if (e.currentTarget.dataset.id === cont.dataset.group) {
          cont.classList.add("show");
        } else {
          cont.classList.remove("show");
        }
      });
    });
  });
});

function overlay(e) {
  let overlayInner = e.currentTarget.cloneNode(true);
  overlayInner.querySelector("p").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eos facilis? Sapiente nostrum velit ipsam eveniet est voluptatum obcaecati libero fuga, repellat consequatur itaque voluptas minima ipsa, quaerat inventore, vero aperiam. Impedit temporibus commodi nam, minima porro at optio a quasi, enim cumque, nemo laboriosam? Fugit, molestias non earum quos reiciendis cum quia alias accusamus?";
  let closeX = document.createElement("div");
  closeX.classList.add("close");
  closeX.innerHTML = "×";
  overlayDiv.innerHTML = "";
  overlayDiv.classList.add("show");
  overlayInner.appendChild(closeX);
  overlayDiv.appendChild(overlayInner);

  closeX.addEventListener("click", () => {
    overlayDiv.classList.remove("show");
    overlayDiv.classList.add("animateShow");
  });
}

testimonials.forEach((testimonial) => {
  testimonial.addEventListener("click", (e) => {
    overlay(e);
  });
});



filterPort.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    // Remove "active" from all filters
    filterPort.forEach((link) => link.classList.remove("active"));

    // Add "active" to current clicked filter
    e.currentTarget.classList.add("active");

    // Get dataset value
    const filterValue = e.target.dataset.filter;

    // Reset html string
    let html = "";

    if (filterValue === "all") {
      portfolioInfo.forEach((portfolio) => {
        html += `
        <a href="${portfolio.a}" target="_blank">
        <div class="portfolio">
          <div class="img">
            <img src="${portfolio.img}" alt="">
            <div class="overlayImg"></div>
            <div class="eye"><i class="fa-solid fa-eye"></i></div>
          </div>
          <div class="wordsPort">
            <h3>${portfolio.h3}</h3>
            <p>${portfolio.p}</p>
          </div>
        </div>
        </a>
        `;
      });
    } else {
      portfolioInfo
        .filter((port) => port.filter === filterValue)
        .forEach((sort) => {
          html += `
            <a href="${portfolio.a}" target="_blank">
        <div class="portfolio">
          <div class="img">
            <img src="${sort.img}" alt="">
            <div class="overlayImg"></div>
            <div class="eye"><i class="fa-solid fa-eye"></i></div>
          </div>
          <div class="wordsPort">
            <h3>${sort.h3}</h3>
            <p>${sort.p}</p>
          </div>
        </div>
        </a>
          `;
        });
    }

    // Inject the new HTML
    portfolio.innerHTML = html;
  });
});