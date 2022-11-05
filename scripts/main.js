
// below this is the beluga code

let bigImage = document.querySelector('#beluga')
let bigCaption = document.querySelector('#captionb')
const bigLink = document.querySelector('#linkb')
const smallLink = document.querySelector('#linka')

smallLink.style.display = 'none';

const altcaption = "<p>Photo by Stan Shebs, CC BY-SA 3.0 https://creativecommons.org/licenses/by-sa/3.0, via Wikimedia Commons</p>"
const maincaption = "<p>Photo by Javier Yaya Tur (CAC, S. A.), CC BY 2.0 https://creativecommons.org/licenses/by/2.0, via Wikimedia Commons."

bigImage.onclick = () => {
	if (bigImage.getAttribute('src') ===
   'images/beluga.jpeg')
	 {
		 bigImage.setAttribute('src', 'images/beluga_2.jpeg');
		 bigCaption.innerHTML = altcaption;
		 bigLink.style.display = 'none';
		 smallLink.style.display = 'block';
} else {
		bigImage.setAttribute('src',
        'images/beluga.jpeg');
				bigCaption.innerHTML = maincaption
				 bigLink.setAttribute('href', 'https://commons.wikimedia.org/wiki/File:Oceanogr%C3%A0fic_29102004.jpg')
				 bigLink.style.display = 'block';
				 smallLink.style.display = 'none';
}
}
//

const clicker = document.querySelector('#clickMe');
const image = document.querySelector('#vaquita');
const text = document.querySelector('#captionv')
// hide the image
image.style.display = 'none';
text.style.display = 'none';
const div = document.querySelector('#clickMe');

// event handler
 clicker.onclick = () => {
   image.style.display = 'block';
	 text.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
image.onclick = () => {
   image.style.display = 'none';
	 text.style.display = 'none';
   div.style.display = 'block';
};
