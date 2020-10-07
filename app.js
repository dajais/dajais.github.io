var character = {
  position: 9,
  
  hp: 100,
  mana: 100, 
};

var tile1 = document.querySelector(".tile1")
tile1.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile2 = document.querySelector(".tile2")
tile2.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile3 = document.querySelector(".tile3")
tile3.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile4 = document.querySelector(".tile4")
tile4.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile5 = document.querySelector(".tile5")
tile5.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile6 = document.querySelector(".tile6")
tile6.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile7 = document.querySelector(".tile7")
tile7.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile8 = document.querySelector(".tile8")
tile8.addEventListener("click", function(event){
  moveCharacter(event.target)
})

var tile9 = document.querySelector(".tile9")
tile9.addEventListener("click", function(event){
  moveCharacter(event.target)
})


function moveCharacter(tile){
  switch(tile.classList[0]) {
    case "tile1":
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 1;
      tile1.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile2":
      tile1.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 2;
      tile2.classList.add("isCharacter")
      console.log(character.position)
      break;
    case "tile3":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 3;
      tile3.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile4":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 4;
      tile4.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile5":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 5;
      tile5.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile6":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 6;
      tile6.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile7":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 7;
      tile7.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile8":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile9.classList.remove("isCharacter")
      character.position = 8;
      tile8.classList.add("isCharacter")
      console.log(character.position)
    break;
    case "tile9":
      tile1.classList.remove("isCharacter")
      tile2.classList.remove("isCharacter")
      tile3.classList.remove("isCharacter")
      tile4.classList.remove("isCharacter")
      tile5.classList.remove("isCharacter")
      tile6.classList.remove("isCharacter")
      tile7.classList.remove("isCharacter")
      tile8.classList.remove("isCharacter")
      character.position = 9;
      tile9.classList.add("isCharacter")
      console.log(character.position)
    break;
    }






}
