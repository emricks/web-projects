let menu = 'effects'
let pastmenu = ''
let ingredients = []
let results = ''
let noPowderChosen = false
let noTypeChosen = false
let i
x = document.getElementsByClassName("effects")

function menuSwitch() {
  if (menu=='effects') {
    document.getElementById("reset").style.display = "none"
    document.getElementById("back").style.display = "none"
    document.getElementById("effectsquestion").style.display = "block"
    document.body.style.backgroundColor = "rgb(180, 255, 180)"
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block"
    }
    if (pastmenu=='powders') {
      document.getElementById("powdersquestion").style.display = "none"
      document.getElementById("redstone").style.display = "none"
      document.getElementById("glowstone").style.display = "none"
      document.getElementById("stupidorbroke").style.display = "none"
      ingredients = []
    }
    if (pastmenu=='results') {
      document.getElementById("recipe").style.display = "none"
      ingredients = []
    }
  }
  if (menu=='powders') {
    document.getElementById("reset").style.display = "none"
    document.getElementById("back").style.display = "block"
    document.body.style.backgroundColor = "rgb(180, 180, 255)"
    if (ingredients[1]=='Magma Cream' || ingredients[1]=='Pufferfish' || ingredients[1]=='Golden Carrot' || ingredients[1]=='Phantom Membrane' || ingredients[0]=='Fermented Spider Eye') {
      document.getElementById("powdersquestion").style.display = "block"
      document.getElementById("redstone").style.display = "block"
      document.getElementById("stupidorbroke").style.display = "block"
    } else if (ingredients[1]=="Glistening Melon") {
      document.getElementById("powdersquestion").style.display = "block"
      document.getElementById("glowstone").style.display = "block"
      document.getElementById("stupidorbroke").style.display = "block"
    } else if (ingredients[1]=='Stone' || ingredients[1]=='Slime Block'|| ingredients[1]=='Cobweb' || ingredients[1]=='Breeze Rod') {
      document.getElementById("powdersquestion").style.display = "block"
      document.getElementById("stupidorbroke").style.display = "block"
    } else {
      document.getElementById("powdersquestion").style.display = "block"
      document.getElementById("redstone").style.display = "block"
      document.getElementById("glowstone").style.display = "block"
      document.getElementById("stupidorbroke").style.display = "block"
    }
    if (pastmenu=='effects') {
      document.getElementById("effectsquestion").style.display = "none"
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
      }
    }
    if (pastmenu=='types') {
      document.getElementById("reset").style.display = "none"
      document.getElementById("typesquestion").style.display = "none"
      document.getElementById("normal").style.display = "none"
      document.getElementById("splash").style.display = "none"
      document.getElementById("lingering").style.display = "none"
      if (noPowderChosen==true) {
      } else {
        ingredients.pop()
      }
    } 
  } 
  if (menu=='types') {
    document.getElementById("reset").style.display = "none"
    document.getElementById("back").style.display = "block"
    document.body.style.backgroundColor = "rgb(220, 180, 255)"
    document.getElementById("typesquestion").style.display = "block"
    document.getElementById("normal").style.display = "block"
    document.getElementById("splash").style.display = "block"
    document.getElementById("lingering").style.display = "block"  
    if (pastmenu=='powders') {
      document.getElementById("powdersquestion").style.display = "none"
      document.getElementById("redstone").style.display = "none"
      document.getElementById("glowstone").style.display = "none"
      document.getElementById("stupidorbroke").style.display = "none"
    }
    if (pastmenu=='results') {
      document.getElementById("recipe").style.display = "none"
      if (noTypeChosen==true) {
      } else {
        ingredients.pop()
      }
    }
  }
  if (menu=='results') {
    document.getElementById("back").style.display = "none"
    document.getElementById("reset").style.display = "block"
    document.getElementById("recipe").style.display = "block"
    document.body.style.backgroundColor = "rgb(255, 255, 180)"
    if (ingredients.length == 1) {
      document.getElementById("recipe").innerHTML = `Add these ingredients in this order: ${ingredients[0]}`
    }
    else if (ingredients.length == 2) {
      document.getElementById("recipe").innerHTML = `Add these ingredients in this order: ${ingredients[0]}, ${ingredients[1]}`
    }
    else if (ingredients.length == 3) {
      document.getElementById("recipe").innerHTML = `Add these ingredients in this order: ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`
    }
    else if (ingredients.length == 4) {
      document.getElementById("recipe").innerHTML = `Add these ingredients in this order: ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}`
    }
    else if (ingredients.length == 5) {
      document.getElementById("recipe").innerHTML = `Add these ingredients in this order: ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}`
      console.log('5isrunning')
    }
    else if (ingredients.length < 1 || ingredients.length > 5) {
      document.getElementById("recipe").innerHTML = 'If you are recieving this message, it means there is an error in the code.'
    }
    document.getElementById("typesquestion").style.display = "none"
    document.getElementById("normal").style.display = "none"
    document.getElementById("splash").style.display = "none"
    document.getElementById("lingering").style.display = "none"
  }
}

function speed() {
  ingredients.push('Nether Wart')
  ingredients.push('Sugar')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function slowness() {
  ingredients.push('Nether Wart')
  ingredients.push('Sugar')
  ingredients.push('Fermented Spider Eye')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function jumpboost() {
  ingredients.push('Nether Wart')
  ingredients.push('Rabbit\'s Foot')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function strength() {
  ingredients.push('Nether Wart')
  ingredients.push('Blaze Powder')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function healing() {
  ingredients.push('Nether Wart')
  ingredients.push('Glistening Melon')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function harming() {
  ingredients.push('Nether Wart')
  ingredients.push('Glistening Melon')
  ingredients.push('Fermented Spider Eye')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function poison() {
  ingredients.push('Nether Wart')
  ingredients.push('Spider Eye')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function regeneration() {
  ingredients.push('Nether Wart')
  ingredients.push('Ghast Tear')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function fireresistance() {
  ingredients.push('Nether Wart')
  ingredients.push('Magma Cream')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function waterbreathing() {
  ingredients.push('Nether Wart')
  ingredients.push('Pufferfish')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function nightvision() {
  ingredients.push('Nether Wart')
  ingredients.push('Golden Carrot')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function invisibility() {
  ingredients.push('Nether Wart')
  ingredients.push('Golden Carrot')
  ingredients.push('Fermented Spider Eye')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function turtlemaster() {
  ingredients.push('Nether Wart')
  ingredients.push('Turtle Shell')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function slowfalling() {
  ingredients.push('Nether Wart')
  ingredients.push('Phantom Membrane')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function weakness() {
  ingredients.push('Fermented Spider Eye')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function infested() {
  ingredients.push('Nether Wart')
  ingredients.push('Stone')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function oozing() {
  ingredients.push('Nether Wart')
  ingredients.push('Slime Block')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function weaving() {
  ingredients.push('Nether Wart')
  ingredients.push('Cobweb')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function windcharged() {
  ingredients.push('Nether Wart')
  ingredients.push('Breeze Rod')
  pastmenu = 'effects'
  menu = 'powders'
  menuSwitch()
}
function redstone() {
  ingredients.push('Redstone Dust')
  pastmenu = 'powders'
  menu = 'types'
  menuSwitch()
}
function stupidorbroke() {
  noPowderChosen = true
  pastmenu = 'powders'
  menu = 'types'
  menuSwitch()
}
function glowstone() {
  ingredients.push('Glowstone Dust')
  pastmenu = 'powders'
  menu = 'types'
  menuSwitch()
}
function normal() {
  noTypeChosen = true
  pastmenu = 'types'
  menu = 'results'
  menuSwitch()
}
function splash() {
  ingredients.push('Gunpowder')
  pastmenu = 'types'
  menu = 'results'
  menuSwitch()
}
function lingering() {
  ingredients.push('Dragon\'s Breath')
  pastmenu = 'types'
  menu = 'results'
  menuSwitch()
}
function back() {
  if (menu=='powders') {
    menu = 'effects'
    pastmenu = 'powders'
    menuSwitch()
  } else if (menu=='types') {
    menu = 'powders'
    pastmenu = 'types'
    menuSwitch()
  }
}
function reset() {
  ingredients = []
  menu = 'effects'
  pastmenu = 'results'
  menuSwitch()
}
document.getElementById("powdersquestion").style.display = "none"
document.getElementById("redstone").style.display = "none"
document.getElementById("stupidorbroke").style.display = "none"
document.getElementById("glowstone").style.display = "none"
document.getElementById("typesquestion").style.display = "none"
document.getElementById("normal").style.display = "none"
document.getElementById("splash").style.display = "none"
document.getElementById("lingering").style.display = "none"
document.getElementById("recipe").style.display = "none"
document.getElementById("reset").style.display = "none"
document.getElementById("back").style.display = "none" /* 649 lines of code! */