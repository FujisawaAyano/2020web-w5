const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏94度もあったので:insertx:たちは散歩に出かけました。彼らが:inserty:に到着した時、彼らはとても驚きました。なぜなら:insertz:からです。しかしボブはそれを見ても驚くことはありませんでした。それは:insert:ではよく起きる事だからです。';
let insertX = ['くまモン','ふなっしー','ひこにゃん'];
let insertY = ['熊本城','ディズニーランド','彦根城'];
let insertZ = ['宇宙人に会った','流れ星を見た','魔法を使えるようになった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
