const express = require("express");
const jsonfile = require('jsonfile');
var randomWords = require('better-random-words');


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/generateList", (req, res)  => {

  const file = 'data.json';
  const data = {};

  for(let i = 0; i < 1000; i++) {
    let word = randomWords();
    while(word.length < 5) {
      word = randomWords();
    }

    const start = word.substring(0,  Math.floor(1 + Math.random() * 2));
    const end = word.substring(word.length - Math.floor(1 + Math.random() * 2), word.length);

    const date = new Date();
    date.setDate(date.getDate() + i);

    const dateStr = date.toISOString().substring(0, 10);

    data[dateStr] = {start: start, end: end};
  }

  jsonfile.writeFile(file, data)
  .then(res => {
    res.send('Write complete')
  })
  .catch(error => res.send(error))

  res.send(data);

});

app.get("/generateOne", (req, res) => {

  let word = randomWords();
 while(word.length < 5) {
    word = randomWords();
  }

  const start = word.substring(0,  Math.floor(1 + Math.random() * 2));
  const end = word.substring(word.length - Math.floor(1 + Math.random() * 2), word.length);

  const date = new Date();
  date.setDate(date.getDate());

  const dateStr = date.toISOString().substring(0, 10);

  const entry = {start: start, end: end};

  res.send(entry);

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});