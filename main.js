const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuZwXQJVa-SPJ6apGnURzsHhYsFb0OTKVlg&s",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dog",
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/61b1f75e9bdd78e1c08fdd64/A-funny-labrador-dog-with-a-curiously-placed-bubble-in-its-behind-/0x0.jpg?format=jpg&crop=922,956,x0,y279,safe&width=960",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Camila",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dog",
    imageUrl:
      "https://images.unsplash.com/photo-1570122942985-bca0a44624da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnklMjBkb2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "https://i.chzbgr.com/thumb1200/4188421/h5830E2E1/funny-face-with-picture-snapped-at-the-worst-moment-or-best-moment-depending-on-how-you-look-at-it",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "dino",
    imageUrl:
      "https://media.istockphoto.com/id/986720632/photo/close-up-snowy-owl-eye-with-wooden-background.jpg?s=612x612&w=0&k=20&c=R3vjYLh-LtH41kSdVW1Ndr_4mdE8Z2AQwDPXGW34ZhI=",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://media.istockphoto.com/id/1512660697/photo/close-up-funny-capybara.jpg?s=612x612&w=0&k=20&c=vmlq2gUqDDTYuNUkEB-Tfrc-mJkjonKWtCrprUKbBVA=",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://i.ytimg.com/vi/4olSy5UXO_M/maxresdefault.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://i.pinimg.com/originals/80/be/c7/80bec74a1b3aabee6400c30958d0e807.jpg",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://media.istockphoto.com/id/1281893590/photo/tiger-and-butterfly.jpg?s=612x612&w=0&k=20&c=mFT_4fFdWJ1kxRA9LJQoc8U1u4j_ZqQz1gZJVzt0Z1I=",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "dino",
    imageUrl:
      "https://i.pinimg.com/474x/0c/77/d8/0c77d8243be988b8006cd462134614a6.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://s.yimg.com/ny/api/res/1.2/7Of6w5EED8rerREVwzR.CA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUzOQ--/https://media.zenfs.com/en-US/homerun/news.mashable/00423d35745dd60554c3fea04415ca48",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "dog",
    imageUrl:
      "https://animalsmatter.com/cdn/shop/articles/dog-science-series-why-do-dogs-stare-at-you-when-they-poop-409737.jpg?v=1673907917",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/550x/07/a0/28/07a0283b3848adc96b2ec42868904305.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/12/salemwater.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://wwfgifts-files.worldwildlife.org/wwfgifts/images/great-white-shark-large-photo.jpg",
  },
];

let getApp = document.querySelector("#app");
let domCats = document.querySelector(".cats");
let domDogs = document.querySelector(".dogs");
let domOthers = document.querySelector(".others");
let domHome = document.querySelector(".home");
let domAnimal = document.querySelector(".animal");
let domOther = document.querySelector(".others");
let domNew = document.querySelector(".new");
let suB = document.querySelector("form");
let about = document.querySelector(".nav-item")

let renderToDom = (arr) => {
  let domString = "";
  for (pet of arr) {
    domString += `
    <div class="card">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nameOf" class="card-text">${pet.name}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p id='footer' class="card-text">Color: ${pet.color}</p>
    </div>
  </div>`;
  }
  getApp.innerHTML = domString;
};
renderToDom(pets);
let getAll = () => {
  renderToDom(pets);
};

let getCats = () => {
  let newArr = [];
  for (pet of pets) {
    if (pet.type === "cat") {
      newArr.push(pet);
    }
  }
  renderToDom(newArr);
};

let getDogs = () => {
  let newArr = [];
  for (pet of pets) {
    if (pet.type === "dog") {
      newArr.push(pet);
    }
  }
  renderToDom(newArr);
};

let getOthers = () => {
  let newArr = [];
  for (pet of pets) {
    if (pet.type === "dino") {
      newArr.push(pet);
    }
  }
  renderToDom(newArr);
};

const createPet = (e) => {
  e.preventDefault();
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#petName").value,
    // type: document.querySelector("#").value,
    type: document.querySelector("#type").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    imageUrl: document.querySelector("#imageUrl").value,

    // do query selectors for other parts of the form. Will look like example above, with different id.
    // for checkbox, use document.querySelector("#checkboxname").checked
  };
  pets.push(newPetObj);
  renderToDom(pets);
  document.querySelector("form").reset()
};


let aboutUS = () => {
  let domString = '';
  domString += `
  <div>
  <h1>Ben's Pet Adoption was created in January of 2025. <br>We accept animals of any kind. </h1>
  <br>
  <h2>For more resources, please visit <span><a href="https://github.com/Ben-John-son/LAB-pet-adoption">This Link</a></span></h2>
  </div>`
  getApp.innerHTML = domString
}

domHome.addEventListener("click", getAll);
domCats.addEventListener("click", getCats);
domDogs.addEventListener("click", getDogs);
domOther.addEventListener("click", getOthers);
suB.addEventListener("submit", createPet);
about.addEventListener("click", aboutUS)
