function match() {
  let s = 0;

  for (let colour = 1; colour < 7; colour++) {
    for (let shape = 1; shape < 137; shape++) {
      const n = Math.random() / 10;
      const p = n.toFixed(2);
      s++;
      console.log(`(${s}, ${colour}, ${shape}, ${getRndInt(1, 10000)}, ${p}),`);
    }
  }
}

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

match();
