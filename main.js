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
    color: "Green",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://i.redd.it/vek3nbfena491.jpg",
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
      "https://media.istockphoto.com/id/1440359502/photo/portrait-of-scottish-straight-stupefied-cat.jpg?s=612x612&w=0&k=20&c=indZ8YA5nQ6fWrW9uB6S3nApvpX6l1zyNikL1p_KiKY=",
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
    type: "dino",
    imageUrl:
      "https://cdn.theatlantic.com/media/img/photo/2019/01/photos-terrible-lizards-dinosaur-st/t04_515284840/main_1500.jpg",
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
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2023/05/dinosaur-statues3.jpg",
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
      "https://live-production.wcms.abc-cdn.net.au/11ab9022db2ec5acd4afd9c00c86806b?impolicy=wcms_crop_resize&cropH=329&cropW=584&xPos=0&yPos=28&width=862&height=485",
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
    type: "cat",
    imageUrl:
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2023/05/dinosaur-statues2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Green",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2023/05/dinosaur-statues12.jpg",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl:
      "https://keaiart.com/cdn/shop/files/4_d80c3d46-6f41-4a1a-ae08-bacf67458141.jpg?v=1686550143",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://sadanduseless.b-cdn.net/wp-content/uploads/2023/05/dinosaur-statues9.jpg",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/550x/18/e1/6f/18e16f24b77477dd2918cbad9d683cda.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://i0.wp.com/jaxpsychogeo.com/wp-content/uploads/2012/06/sentinel-at-beach-and-peach-2.jpg",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fiiz973959vmqy6nt9a3ng/public",
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
    type: "dog",
    imageUrl: "https://live.staticflickr.com/7442/14148358814_5e61f969ae_z.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/19ed6120-ee56-4be3-bcac-2c1ba0ec2c44/d4oljtl-7dd4ee91-a3e7-4efa-a2c4-926b7e573e8c.jpg/v1/fill/w_600,h_400,q_75,strp/stupid_red_cat_by_rheis_d4oljtl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvMTllZDYxMjAtZWU1Ni00YmUzLWJjYWMtMmMxYmEwZWMyYzQ0XC9kNG9sanRsLTdkZDRlZTkxLWEzZTctNGVmYS1hMmM0LTkyNmI3ZTU3M2U4Yy5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FBNewyKzDAL_jr0aOBHr-HgPpprrOl89XOXPBoIsgPY",
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
    cat: true,
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://i.cbc.ca/1.4811166.1536161083!/fileImage/httpImage/dinosaur.jpg",
  },
];

// const form = [{}];
// fat arrow function below, most used in actual workplaces

const renderToDom = (array) => {
  let domString = "";
  for (pet of array) {
    domString += `<div class="cardcontainer">
    <div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <header class="card-text">${pet.color}</header>
      <p class="card-text">${pet.specialSkill}</p>
      <footer class="card-text">${pet.type}</footer>
      
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
      </div>
  </div>`;
  }
  const app = document.querySelector("#app");
  app.innerHTML = domString;
};

const app = document.querySelector("#app");

const deletePet = (event) => {
  // note that .target.id needs to be id of button. previously was not working because in card above, delete was a class, not id
  if (event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");
    const index = pets.findIndex((obj) => obj.id === Number(id));
    pets.splice(index, 1);
    renderToDom(pets);
  }
  console.log("clicked");
};

app.addEventListener("click", deletePet);

// app.addEventListener("click", (e) => {
// if(e.target.id.includes("delete")) {
// const [, id] = e.target.id.split("--";)

// const index = pets.findIndex(e => e.id === Number(id));

// pets.splice(index, 1);
// renderToDom(pet)

// }

// })

renderToDom(pets);

// app.innerHTML = domString;

const typeCat = document.querySelector("#cats");

const typeDog = document.querySelector("#dog");

const typeDino = document.querySelector("#dino");
const showAll = document.querySelector("#show-all");

const filter4 = () => {
  renderToDom(pets);
};

showAll.addEventListener("click", filter4);

const filter1 = () => {
  console.log("clicked");
  let newCatArray = [];
  for (pet of pets) {
    if (pet.type === "cat") {
      newCatArray.push(pet);
    }
  }
  console.log(newCatArray);
  renderToDom(newCatArray);
};
typeCat.addEventListener("click", filter1);

const filter2 = () => {
  console.log("clicked");
  let newDinoArray = [];
  for (pet of pets) {
    if (pet.type === "dino") {
      newDinoArray.push(pet);
    }
  }
  console.log(newDinoArray);
  renderToDom(newDinoArray);
};
typeDino.addEventListener("click", filter2);

const filter3 = () => {
  console.log("clicked");
  let newDogArray = [];
  for (pet of pets) {
    if (pet.type === "dog") {
      newDogArray.push(pet);
    }
  }
  console.log(newDogArray);
  renderToDom(newDogArray);
};
typeDog.addEventListener("click", filter3);

const form = document.querySelector("form");

const createPet = (e) => {
  e.preventDefault();
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#petName").value,
    // type: document.querySelector("#").value,
    type: document.querySelector("#type").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    image: document.querySelector("#imageUrl").value,

    // do query selectors for other parts of the form. Will look like example above, with different id.
    // for checkbox, use document.querySelector("#checkboxname").checked
  };
  pets.push(newPetObj);
  renderToDom(pets);
  form.reset();
};

form.addEventListener("submit", createPet);
