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
{name:"Coope-Fashion",
// gitLink:"https://github.com/aviran6709/react-around-api-full",
pageLink:"https://coope-fashion.store/",
cardImageLink:"https://lh3.googleusercontent.com/pw/AL9nZEVz_JcR7F0yX3HSGTzJIeo44XhDUg-sHVBIwMt_QxKDKtV09dVxcodrJdaI3Qv8rzqCRfY8q6sRWawjgRTLpTiN4eJ6L6tKDpJ9BcBlgD3dCMVvl0__lsqYfPrbPszkNfSOVeTGXG6pncjAXohQgpFKfKja1XRwUecm8NlrQBEVEMIfIC3zo2JI-ZAJPrQ8EOwhRtNhUZBsx02_ajbsq9yde9il7WrXUqpLWKeFwnvEcyjFdGDU0OWgkX0eJDwAumKtK-FdTaGvIDocg7Sb50ShDX4CWOQZEQb1swI_7x0q4sab0C_17tRmy50WdPTswG3iOUuMFxxDtcrmwBBXfBqvoyjXJ3v1z6oo_Wvlwphg3ER1gcUX8cY-Gv8a7-_HDUqkYWnPUCEv3X_2ArCqQiKy8KxixG9rlh0pmD45r9ej8vf3PgixdZZ8uTRUXwQpYGQOyeXuXZGB35mP_TBLPrNcExHbk6Jekr8mQuB5NWcviMV07GqLs7JcQsC0uyPrLYQiOF2uXv7jHS3u4Xs5AFPktSW9s44cg2DqZVmHhn3ZUX4YNmVXTA9dw58F2QFiR3e4x8GyPRusKrN5CblVGHov1LE9cqm6DvjSg239VLxxAxsJLHq10KVS4yFISIC9ZjafqS_znZ0asjLvLcAAccTLfOqTFKI71fMZXbMTqf4ZFi73rCmIiB36xyTTuU7CPKku47gIkVOGmZMWFU7zc7o8yATNGJJ_myXmWOr1LMd_IUZkikz-9uN6VqTP3Hslcz-T1vJweuJ3cAkoZO02ORn76gfw6k2zq4aTb16aoeOwAVUtgVIwq4rrdMkFRLAKfZbcSFOZTwVAYt3n9voFX92WzMxg59noO12DtoHvA56kRzBDJnjuQkkZRMEayuQGYf5YDKMO7G3VWsPHWRlD34irFym505FgvDkslCpKctcOFKi_GW8K0yVFq7HwpudkClnB=w467-h257-no?authuser=0"

},
{name:"US-TRIP",
gitLink:"https://github.com/aviran6709/web_project_3",
pageLink:"https://aviran6709.github.io/web_project_3/index.html",
cardImageLink:"https://lh3.googleusercontent.com/zI2OIkyqcN4XBHiUimxi8ItScaxOA_YkoDHxxaJZUu1JysclH4j2PBRfPRzZvs6Ra0jvl6rsaTPNRJ9TaawG_jqaqrsUnuCri6LaK1bXx0BaUeAPRhYpx6dbccartMsiAEBkLpDUSjHh_UugUwmTfb2pcII26cg3v4eXqI2jPFCly5XGdsUYvmNEywOINtndXbcnVEskOi5Npb5Slakzq0UyASEvbddQ-BOnD-Z58RwA-MQTM1reuP1X4ERcxZArNP3LYVrMc77FZMYIwe5N1Ms4IUPOJw6WHiV-31P7caQvwTDrIIW7w2mb6KazGchCyknlJZwm08jQRpdSn1sM85iyh9NvK6SztSgMkSQpWwKyKr5h14tviX9HKP-lRXY_ABUu9IzTGr5MT2Ppi2hCZ8g9WLz7FeHI8FAOcR35cyVjmmJBJViwk7Ps5Gw02QP9_x0m0zc-jaAtb38MbMAPS8tF72cMnFOmU-IkgTMFketu1styGQX3mw5sYUXf2FY7-E-lhJSn75i2zcoDKYo--emgbs3zC2aPNOHsJpaOwNTHG55a6b1yWtRSt9ddFbAye-7RDA1N2AKfnmULqbRWQTe0ozHF0MTftKHCO5szLMNO1N0M1n_-VEL2-fbvKqPF_EIcD6cKKhQ8qNeCOzSfuPXPG_oTaF2Wpxnh8TUe1OlmEluGsDjnt1KoCOaQGpzhAV5O76Fgzm8y-wdJKPrUPgpRtnibs_n16pkE9qT4XOjUBTDglJp1kFMqyAlXCUZb8LfPtfvcnoN7ELVxNi0faZoFPhW6xIwUN1ZZwTLQfoc5xVhXAmhAWUOzEHlfPoY0b-lovrhPI7eD0emTYpB947awl9ehV184XvQJSyG0ItNs1ZGVwO3L1pqNN7cR9Vm84fsVmaBz8znjyp0LlLdRUEf-dlHLVdKkN2X0Awk_F6-YcA=w2514-h1642-no?authuser=0"

},
{name:"Synagogue-prayer-time",
gitLink:"https://github.com/aviran6709/frontend",
pageLink:"https://zemira-k.github.io/frontend/",
cardImageLink:"https://lh3.googleusercontent.com/q5IJl8np5-SdKS-TO8Kn_7FKOAmaIodljdoVlD5aNqMpvxBpatrO-LAfrdyJ5xCUOZa__f9TMIJwQuXgtUPVkk7ECOG0SY7TfmKVgkG5H4uRyqjWZA7DeRTqbW2tVMnYD7gHouk6Y2ChBCY9PlsWq9RJ6n2R5bIi7cxVkBYzCh0rI_i3WbtS6QRYWi-ReHyAtFeUESXAhNcUm57Xxk5QJpTFQgGhxO1VGJQK4UeBSrfBXfWVPGFIHKIQXGhmwRLHLo6AbQHTWrv8Mwd-Vv-c2D_JiZZRJQlbGJCcGexe-NPb5KHs-_rwvWuDpJ4TuBgI_IuJKzJMXx2r0zdA36jp5GSXVmNyCGc5fdoP-rSWV-CCnbG9UZY-UguGkOlqXAeV_1xSfazUWRdEaN5BKZF5Yon4MgcKIelXa171ILpIMePFO7mEU5VURLKIDfbETF0Wzv0TKYaiOOwUodkUv5ZDdzzPeZIJyCHRGgS0pWJg_Pm1yHlSQl92grCi4ylIAT7aRv6bkonWWvO8VTdGoCOn5hmORObYk3f3JAT66VaQRxnAFn4k44WLhY84bmvt_YhLWmIgv6wdQ8J4SN5wOj6I9uBdc6OTUZ8FqRaOzhh5yDfJaHGiGEo_cojKPf1D-LG2n6khrA9AnP8lK5pJQJq6YqwqqsgXuijndbFXRWg98lus9VfxNErwjz-6Op2LKZiRBAVjCo5W96qQAGLhnDIkjDlz2App12rdKhDW1EeGWliLmn-eq7C5znOrSxU9ZMwL9OtUmzifif7cdajvb49NeMAiqI5_Csd2TY2fxwTdjPc389SWDpqYSsb9Dfcff8qnKOmVLzJrU8sMBiFWpm0zIqQRpBEMH7bufqwdAZAdO49GRc3Ioi5kE1mVricUKw7MtraWMKbIc4Se9ftvrmLa5yP9SxeRCMc1CP9r2_YYn89vlQ=w1820-h1419-no?authuser=0"
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