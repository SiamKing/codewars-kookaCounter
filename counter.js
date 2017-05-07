var kookaCounter = function(laughing) {
  let results = 1
  if (laughing === '') {
    return 0;
  }

  laughing = laughing.split('').filter(c => c == 'h' || c == 'H')
  let first = laughing.splice(0, 1).toString()

  laughing.forEach(c => {
    if (c !== first) {
      results += 1;
    }
    first = c;
  })
  
  return results
}
