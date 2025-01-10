const people = [{
  name:'Shared Devid',
  image:'./images/Shared Devid.jpg',
  message:'I embarked on a mountain trek, seeking adventure and solitude. The challenging trails were demanding, but the breathtaking views made every step worthwhile. Camping under the stars and breathing in the fresh mountain air was a refreshing escape. Reaching high vantage points offered stunning panoramas of untouched wilderness. The combination of physical challenge and natural beauty made this journey incredibly rewarding. It was a perfect getaway for someone who loves outdoor adventures and awe-inspiring landscapes.'
},{
  name:'Meck Ronaldo',
  image:'./images/Meck Ronaldo.jpg',
  message:'I enjoyed a relaxing beach vacation, soaking up the sun and the beautiful ocean views. The golden sands and crystal-clear waters provided a perfect backdrop for my days of lounging and swimming. I tried snorkeling and kayaking, which were exhilarating and allowed me to explore hidden spots. The tranquil beach setting was a great way to unwind, and I loved watching the sunsets while enjoying fresh seafood by the shore. This trip was a serene escape, offering relaxation and natural beauty.'
},{
  name:'Sarah Olivia',
  image:'./images/Sarah Olivia.jpg',
  message:'My solo trip was all about the city is vibrant energy. I explored bustling markets, sampled delicious local foods, and visited historic landmarks. The citys lively atmosphere was infectious, and I enjoyed attending a festival with live music and local crafts. Dining at authentic restaurants was a highlight, and each meal offered a new culinary delight. The blend of modern and historical sights kept my days exciting and full of discovery. This urban adventure left me inspired and energized, making it an unforgettable experience.'
},{
  name:'Michael Daniel',
  image:'./images/Michael Daniel.jpg',
  message:'I immersed myself in the region’s cultural heritage, visiting museums and art galleries. Each exhibit and artwork offered insights into local history and traditions. Attending traditional performances was a highlight, giving me a deeper appreciation for the country’s artistic legacy. I also enjoyed a festival celebrating local crafts and cuisine, which was a wonderful cultural experience. This trip was an enriching exploration of art and history, making it a deeply rewarding experience.'
},{
  name:'Emily lifarr',
  image:'./images/Emily lifarr.jpg',
  message:'I spent my vacation in the tranquil countryside, far from the city is noise. I wandered through charming villages, enjoyed scenic landscapes, and felt completely at peace. The local people were incredibly friendly and eager to share their stories. One of my favorite moments was visiting a family-run farm where I learned about traditional farming methods and tasted homemade cheese. The slow pace and natural beauty were a perfect escape from everyday life. This trip was a wonderful reminder of how relaxing and fulfilling a simple, nature-focused retreat can be.'
}]

const pElement = document.querySelector('.js-message');
const imgElement = document.querySelector('.js-profile-photo');
const auther = document.querySelector('.auther');
const liveDate = document.querySelector('.js-date');
const time = document.querySelector('.js-time');

let index = 0;

changMessage();

function changMessage() {
  const{message,image,name} = people[index];

  pElement.innerHTML = message;
  imgElement.src = image;
  auther.innerText = name;

  index++;
  if(index === people.length){
    index = 0;
  }

  setTimeout(() => {
    changMessage();
  },3000);

}  


  /*
  for (let i = 0; i < people.length; i++) {
    newMessage = people[i].message;
  } 

  pElement.innerHTML = newMessage;
  console.log(newMessage);


  people.forEach((person) => {
    person.message = newMessage;
    pElement.innerHTML = newMessage;
    // console.log(newMessage);
  });
  */

let currentTime = new Date();

let year = currentTime.getFullYear();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();

liveDate.innerHTML = `${year} / ${month} / ${day}`;

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

time.innerHTML =`${hours}:${minutes}:${seconds}`;


function currantDate () {
  
}