fetch("./data.json")
  .then(res => res.json())
  .then(result => {
    let list1 = "";
    for (let i = 0; i < result.length; i += 4) {
      list1 += `<button class="link" onclick="location.href='./slideshow.html'">
      <div class="overlay" id=${i}>
      <p class="name fw-bold">
      ${result[i].name}
      </p>  
      <p class="name">
      ${result[i].artist.name}
      </p>
      </div>
      <img src=${result[i].images.thumbnail}  class="img" alt="${name}"/>
      </button>
      `;
    }
    let list2 = "";
    for (let i = 1; i < result.length; i += 4) {
      list2 += `<button class="link"  onclick="location.href='./slideshow.html'"><div class="overlay" id=${i}>
    <p class="title">
    ${result[i].name}
    </p>  
    <p class="name">
    ${result[i].artist.name}
    </p>
    
      </div>
      <img src=${result[i].images.thumbnail}  class="img" alt="${name}"/>
      </button>`;
    }
    let list3 = "";
    for (let i = 2; i < result.length; i += 4) {
      if (i !== 14) {
        list3 += `<button  class="link"  onclick="location.href='./slideshow.html'"><div class="overlay" id=${i}>
        <p class="title">
        ${result[i].name}
        </p>  
        <p class="name">
        ${result[i].artist.name}
        </p>
        </div>
        <img src=${result[i].images.thumbnail}  class="img" alt="${name}"/>
        </button>`;
      }
    }
    let list4 = "";
    for (let i = 3; i < result.length; i += 4) {
      list4 += `<button  class="link"  onclick="location.href='./slideshow.html'"><div class="overlay" id=${i}>
      <p class="title">
      ${result[i].name}
      </p>  
      <p class="name">
      ${result[i].artist.name}
      </p>
      </div>
      <img src=${result[i].images.thumbnail}  class="img" alt="${name}"/>
      </button>`;
    }
    list4 += `<button class="link"  onclick="location.href='./slideshow.html'">
    <div class="overlay" id="14">
    <p class="title">
    ${result[14].name}
    </p>  
    <p class="name">
    ${result[14].artist.name}
    </p>
    </div>
    <img src=${result[14].images.thumbnail}   class="img" alt="${name}"/>
    </button>`;

    document.querySelector(".col1").innerHTML = list1;
    document.querySelector(".col2").innerHTML = list2;
    document.querySelector(".col3").innerHTML = list3;
    document.querySelector(".col4").innerHTML = list4;

    document.querySelector(".col1").addEventListener("click", e => {
      console.log(e.target.id);
      window.localStorage.setItem("id", e.target.id);
    });
    // document.querySelector(".col3").addEventListener("click", e => {
    //   window.localStorage.setItem("id", e.target.id);
    // });
    // document.querySelector(".col4").addEventListener("click", e => {
    //   window.localStorage.setItem("id", e.target.id);
    // });
  });

const startSlideShow = () => {
  window.localStorage.setItem("id", 0);
  window.location.href = "./slideshow.html";
};
