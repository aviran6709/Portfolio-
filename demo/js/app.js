const mainBtn = document.querySelector(".main__btn")



 const data =  [{name:"NewsExplore",
gitLink:"https://github.com/aviran6709/final-project",
pageLink:"https://aviran.students.nomoredomainssbs.ru/",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEUyKs53O-tTJmVDpsTagMGCB8BGNczdjoGAx5wa4KQnha2X8iN3hZkBGBvQhdEsl-kZGcST4-RzgoOeWlpRp9pmO5ROrtbnysoZbm_iSUi4KxjCZcyF3iq4GXdS6i4guba-9eMTYPfBOzgdCKXBNDxB1w=w2374-h1358-no"
},
{name:"AroundUS",
gitLink:"https://github.com/aviran6709/react-around-api-full",
pageLink:"https://aroundus.students.nomoreparties.sbs",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEVeyX_SLMUVwpC3IT09zHzC4JxxORHZJs8I882o1mc9kL8alkZy1EiMqc4codn5pHpuyis4hUwR7DfNhOl3vjpHN5Sn3l9epg5TR17x07oDEayjrHgScV-WJ9RbP17-vh6YGSw2MBdLK2gnHpHrVslcvg=w612-h1008-no"
},

{name:"US-TRIP",
gitLink:"https://github.com/aviran6709/web_project_3",
pageLink:"https://aviran6709.github.io/web_project_3/index.html",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEXTCZoDx9fzgpaMhnrW89pgIbxHKrEfC3231vBlgws5o7J1MdOkF-5A-0k67jorj7MBbp9JXiEsCyY6kFkaf02FvH2fPwEWaXM6Ox-YWhB92x3AxPexsNGoCIZivWYqW2ibVMXEKQ7xOcyX9xqgRFN-Rw=w2160-h1410-no"

},
{name:"Synagogue-prayer-time",
gitLink:"https://github.com/aviran6709/frontend",
pageLink:"https://zemira-k.github.io/frontend/",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEVsaEpvR7dxirxhdkXEAJWAgTZeKD-nzqXL-y0lsDbQO-d175y0J5NUMcia9OUBFTV6Pw0700D0EBxdNDNMPt2hDA838Qw-qQHUX054OdBd1ZQuzYrsASnENs0NEbQui0SR7zK-srritPQbK4YkSE7m-w=w1810-h1410-no"
},
{name:"Coope-Fashion",
// gitLink:"https://github.com/aviran6709/react-around-api-full",
pageLink:"https://coope-fashion.store/",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEU5hyGHqlZSs0odj72hTT_Ap74iNUklgjm86cgz52zWevoNfCxwwGlbvgwWg9CiKdvOJp__-ubDkSkB3vfgOD43isN4z3myDKvaTsTmkgbTmG1vTNxia1JkVOrZPHXB3HzlAC3NQtab5KHHgDN9uAal3g=w2374-h1310-no"
},
{name:"Woocommerce-script",
gitLink:"https://github.com/aviran6709/woocommerce-script",
// pageLink:"https://coope-fashion.store/",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEV4z48_0eAsCI2FxGxFB0UIOOQeGsHkjt0AUwJ879Q1lbAvdcIre-EHTU6jWVqD8R1X9wiKPG0ktH9maO3Rk0GH_CQpjIW_oF5FSEtMsXaajw4cNcHJa3xEy5NRm78WTNdIkLbP98tnQhQsR2PK1l0q1Q=w2116-h1410-no"
}

]




 const getTemplate =( )=> {
  const cardElement = document
    .querySelector(".card-tmp")
    .content.querySelector(".card")
    .cloneNode(true);
  return cardElement;
}
 const generateCard=()=> {
 data.forEach((obj) =>{
  const cardElement = getTemplate();
  cardElement.querySelector(".card__title").textContent =obj.name;
  cardElement.querySelector(".card__image").src =obj.cardImageLink;
  document
  .querySelector(".cards").append(cardElement)
  const gitBtn = cardElement.querySelector(".social")
  gitBtn.addEventListener('click',()=>{
    window.open(obj.gitLink);

  })
  const webBtn = cardElement.querySelector(".web")
  webBtn.addEventListener('click',()=>{
    window.open(obj.pageLink);


  })
 })

}

mainBtn.addEventListener("click",()=>{

})


generateCard()
 


 const maximumWealth = function(accounts) {
  const newArray = accounts
  .map(arr => arr.reduce((sum, item) => sum += item, 0));

return( Math.max(...newArray));
 
};


maximumWealth([[1,2,3],[3,2,1]])

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#FFD700"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFD700",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 100,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "repulse" },
          resize: true
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": true,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);