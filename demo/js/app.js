const mainBtn = document.querySelector(".main__btn")



 const data =  [{name:"NewsExplore",
gitLink:"https://github.com/aviran6709/final-project",
pageLink:"https://aviran.students.nomoredomainssbs.ru/",
cardImageLink:"https://gcdnb.pbrd.co/images/T3bETHpUeviY.jpg?o=1"
},
{name:"AroundUS",
gitLink:"https://github.com/aviran6709/react-around-api-full",
pageLink:"https://aroundus.students.nomoreparties.sbs",
cardImageLink:"https://gcdnb.pbrd.co/images/nxBQpS3WKsCb.jpg?o=1"
}]




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
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);