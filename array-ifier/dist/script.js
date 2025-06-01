function arrayify() {
  let input = document.querySelector(".input").value
  let output = []
  let mark = 0
  let store = ''
  for (i=0;i<input.length;i++) {
    if (input[i] == ' ') {
      //console.log('space!')
      output.push(store)
      store = ''
    } else {
      store = store + input[i]
      //console.log(store)
    }
    if (i+1 == input.length) {
      output.push(store)
      store = ''
    }
  }
  console.log(output)
}