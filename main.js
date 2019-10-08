const paragraph = document.querySelector('p');
paragraph.style.color = 'lightblue'

paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const header = document.querySelector('h1');
header.style.fontSize = '10px'

const item13 = document.querySelector('#item-13');
item13.style.opacity = '.5'

const item3 = document.querySelector('#item-3');
item3.innerText= 'I say, "Hi!"'

const grabImage = document.querySelector('img')
grabImage.src ='http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
grabImage.style.height = '300px'
const newImage = document.createElement('img')
newImage.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
newImage.style.height = '300px'
newImage.style.padding = '50px'
const div = document.querySelector("div");                 
div.appendChild(newImage)

const li16 = document.createElement('li');
li16.class = 'item';
li16.id= 'item-16';
li16.innerText = "I won't be fooled again";
const list = document.querySelector('ul');
list.appendChild(li16); 

