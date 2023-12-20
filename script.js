const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const doggo1 = document.getElementById('doggo1');
const doggo2 = document.getElementById('doggo2');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
let shuffleBool = false;


var songs = ['Sum 41 - Landmines', 'Sum 41 - Rise Up  [Lyrics]','Green Day  The American Dream is Killing Me (Lyrics)',
'Green Day  Look Ma, No Brains! (Lyrics)','Green Day  Dilemma (Lyrics)','Welcome to Paradise',
'Love From The Other Side (Edit)','Fall Out Boy - Heartbreak Feels So Good (Audio)',
'Fall Out Boy - Hold Me Like a Grudge (Official Audio)','Fall Out Boy - So Much (For) Stardust (Official Audio)',
'Simple Plan - Congratulations (Official Visualizer)','Simple Plan - Ruin My Life ft. Deryck Whibley (Lyric Video)',
'Sum 41 - Walking Disaster','Catching Fire (feat. nothing,nowhere.)','Sum 41 - Out For Blood (Audio)',
'Taylor Acorn - Psycho (Official Audio)','Taylor Acorn - Shape Shifting (Official Audio)',
'Taylor Acorn - Coma (Official Audio)','Taylor Acorn - twenty eight (official audio)','Taylor Acorn - I Think I\'m in Love (Official Audio)',
'Taylor Swift - Wildest Dreams (Taylor\'s Version) (Lyric Video)','Taylor Swift - Mean (Taylor\'s Version) (Lyric Video)',
'Taylor Swift - You Belong With Me (Taylor\'s Version) (Lyric Video)','Taylor Swift - You\'re On Your Own, Kid (Official Lyric Video)',
'Taylor Swift - Anti-Hero (Official Lyric Video)','Taylor Swift - Mastermind (Official Lyric Video)','Modern Girl',
'Bleachers - Rollercoaster (Audio)','Bleachers - Dont Take The Money (Gone Now 2017)','Bleachers - I Miss Those Days',
'Bleachers - I Wanna Get Better (Official Audio)','10 for 10','A Little Less Sixteen Candles, A Little More _Touch Me_',
'A Long Way Down','Airplanes (feat. Hayley Williams of Paramore)','All My Friends Are Nobodies','All Signs Point To Lauderdale',
'All The Small Things','Ancient History','Anti-Hero','Beacon','Beverly Hills','Bite Me','Bored','Break The Glass','broken',
'Congratulations','C’est Comme Ça','Dandelions','Dear Maria, Count Me In','Death Wish','Different','Dirty Little Secret',
'Don\'t Lose Touch','EDGING','Everybody but You','Evil Anonymous','Feel Something','Ghost Story','Heartbreak Feels So Good',
'Hero','Hold Me Like a Grudge','Hollywood','I Think I\'m in Love','In Too Deep','It\'s Time','Jackson, You Are Dying','Keep Swinging',
'Know Your Enemy','Lay Me to Rest','Lisztomania','Longview','Lost','Love From The Other Side',
'Loved You A Little (with Taking Back Sunday and Charlotte Sands)','Mercy Me','Middle Seat Blues',
'Misery Business','Modern Love','Mr. Brightside','My Songs Know What You Did In The Dark (Light Em Up)','Novocaine',
'Now','Oh Love','Out For Blood','Outta My Head','Pages','Pollyanna','Pour Decisions','Psycho','Punk Rock Songs','Raised By Wolves',
'Rock N Roll','Roomer','Ruin My Life (feat. Deryck Whibley)','Running Out Of Time','Shapeshifting','She\'s Kerosene','She',
'So What','Some Say','Somebody Told Me','sorry mom x','Still Breathing','Still into You','Sugar, We\'re Goin Down','Thanks for Nothing','That\'s What You Get',
'The Anthem','The Hard Way','The Kids Aren\'t Alright','The News','The Phoenix','Think Of You','This Is Why','Thnks fr th Mmrs','U + Ur Hand','Waiting',
'Wake Me Up (When This Nightmare’s Over)','Wake Me Up','Wallflower','We Are Never Ever Getting Back Together (Taylor\'s Version)',
'Welcome to Paradise','What the Hell','Why Worry','Wishing You Hell','Wolf in Sheep\'s Clothing','Worse Than This',
'You Belong With Me (Taylor’s Version)','You\'re Gonna Go Far, Kid'
];
const originalSongs = [...songs.sort()];
var shuffledSongs = [...songs];

//shuffle(songs);

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

//randomize array elements function
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/workout.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	}

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	}

	// define seconds duration

	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = ' / '+min_d +':'+ sec_d;

};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
shuffleBtn.addEventListener('click', () => {
   shuffleBtn.classList.toggle('pressed');

   shuffleBool = !shuffleBool;
   if(shuffleBool){
   shuffle(shuffledSongs);
   songs = [...shuffledSongs];
   }else{
   songs = [...originalSongs];
   }
   songIndex = songs.indexOf(title.innerText);
   });

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);



// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);


document.addEventListener('DOMContentLoaded', function () {
    doggo1.src = `images/doggo1.jpeg`;
    doggo2.src = `images/doggo2.jpeg`;

    id="currTime"
    songs.sort();
    // Your existing code...

    // Get the container and the list
    var container = document.getElementById('scrollable-list-container');
    var list = document.getElementById('scrollable-list');

    // Array of items to be added to the list
    var itemsToAdd = songs;

    // Loop through the array and create a new <li> element for each item
    itemsToAdd.forEach(function (itemText, index) {
        var listItem = document.createElement('li');
        listItem.textContent = itemText;

        // Add a click event listener to the list item
        listItem.addEventListener('click', function () {
            // Load and play the selected song
               if(shuffleBool){
               shuffle(shuffledSongs);
               songs = [...shuffledSongs];
               }

            songIndex= songs.indexOf(originalSongs[index]);
            loadSong(songs[songIndex]);
            playSong();
        });

        // Append the list item to the list
        list.appendChild(listItem);
    });

});