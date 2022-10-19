const togglebtn = document.getElementById('toggle');
// const openbtn = document.getElementById('open');
const menuclosebtn = document.getElementById('menuclose');
const nav = document.getElementById('nav');


const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close-btn');

// const music = document.getElementById('music');



menuclosebtn.addEventListener('click',()=>{
	document.body.classList.toggle('shownav')
});

togglebtn.addEventListener('click',()=>{
	// console.log('hay');
	document.body.classList.toggle('shownav');
})


openbtn.addEventListener('click',()=>{
	modal.classList.add('showmodal');
});


closebtn.addEventListener('click',()=>{
	modal.classList.remove('showmodal');
});


window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') :'');




const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title');


const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
	playbtn = document.getElementById('play'),
	nextbtn = document.getElementById('next');

let songindex = 0;

const songs = ['song1','song2','song3'];

loadsong(songs[songindex]);

function loadsong(music){
	title.innerText = "Blackpink-Don\'t know what to do";
	audio.src = `${music}.mp3`;
	cover.src= `${music}.jpg`;
}

playbtn.addEventListener('click',()=>{
	// console.log('hay');
	// musiccontainer.classList.add('play');
	const isplaying = musiccontainer.classList.contains('play');

	if(isplaying){
		pausesong();
	}else{
		playsong();
	}
});

// Play song
function playsong(){
	musiccontainer.classList.add('play');

	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}

// Pause song
function pausesong(){
	musiccontainer.classList.remove('play');

	playbtn.querySelector('i.fas').classList.add('fa-play');
	playbtn.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();

}

const musicclick = document.getElementById('musicclick');

musicclick.addEventListener('click',()=>{
	musiccontainer.style.transform = "translate(0)";
})






