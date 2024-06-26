const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const songListBtn = document.getElementById('songList');
const hiddenBtn = document.getElementById('hidden');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const doggo1 = document.getElementById('doggo1');
const doggo2 = document.getElementById('doggo2');
const doggo3 = document.getElementById('doggo3');
const doggo4 = document.getElementById('doggo4');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');

const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
let list1 = true;
let shuffleBool = false;
let repeatBool = false;
hiddenBool = false;
listPlaying = 1;


const OGSONGS1 = ['Sum 41 - Landmines', 'Sum 41 - Rise Up  [Lyrics]','Green Day  The American Dream is Killing Me (Lyrics)',
'Green Day  Look Ma, No Brains! (Lyrics)','Green Day  Dilemma (Lyrics)','Welcome to Paradise',
'Love From The Other Side (Edit)','Fall Out Boy - Heartbreak Feels So Good (Audio)',
'Fall Out Boy - Hold Me Like a Grudge (Official Audio)','Fall Out Boy - So Much (For) Stardust (Official Audio)',
'Simple Plan - Congratulations (Official Visualizer)','Simple Plan - Ruin My Life ft. Deryck Whibley (Lyric Video)',
'Sum 41 - Walking Disaster','Catching Fire (feat. nothing,nowhere.)','Sum 41 - Out For Blood (Audio)',
'Taylor Acorn - Psycho (Official Audio)','Taylor Acorn - Shape Shifting (Official Audio)',
'Taylor Acorn - Coma (Official Audio)','Taylor Acorn - twenty eight (official audio)','Taylor Acorn - I Think I\'m in Love (Official Audio)',
'Taylor Swift - Wildest Dreams (Taylor\'s Version) (Lyric Video)','Taylor Swift - Mean (Taylor\'s Version) (Lyric Video)',
'Taylor Swift - You Belong With Me (Taylor\'s Version) (Lyric Video)','Taylor Swift - You\'re On Your Own, Kid (Official Lyric Video)',
'Taylor Swift - Anti-Hero (Official Lyric Video)','Taylor Swift - Mastermind (Official Lyric Video)','10 for 10','A Little Less Sixteen Candles, A Little More _Touch Me_',
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
'You Belong With Me (Taylor’s Version)','You\'re Gonna Go Far, Kid','Modern Girl','Rollercoaster','Dont Take The Money','I Miss Those Days',
'I Wanna Get Better'
];

const OGSONGS2 =['Adam\'s Song','Addicted','All Alone',
                 'All The Small Things','Alone Together','Always',
                 'American Idiot','Basement','Calm Down',
                 'Cecilia And The Satellite','Crazy','DANCE WITH ME',
                 'Death Valley','Deep End','Drown In Your Misery',
                 'EDGING','Everything Sucks','Fire Escape',
                 'Go Away','Head in the Clouds','Heartbreak Feels So Good',
                 'Hello Cold World','Hold Me Like a Grudge','Homecoming',
                 'i can\'t get my shit together','I Miss You','I\'d Do Anything',
                 'I\'M IN THE MARKET TO PLEASE NO ONE','I\'m Just a Kid','Jesus of Suburbia',
                 'Keep It to Myself','Love From The Other Side','Mayday',
                 'Me Against the World','Mean People','Modern Girl',
                 'My Direction','My Songs Know What You Did In The Dark (Light Em Up)','Nobody Tells You When You’re Young',
                 'None Of My Business','OH!','Our Song',
                 'Over My Head (Better Off Dead)','Poison','Quarter Life Crisis',
                 'Reasons To Live','Roll Up','Shake It Out',
                 'So Much (For) Stardust','Some Say','Still Waiting',
                 'Tear It Out','Tell Me It\'s Okay - Demo','The Credits',
                 'The Hell Song','Thick Skull (Re_ Julien Baker)','To All My Friends Who Didn\'t Make It',
                 'Under the Influence(r)','Waiting On A Twist Of Fate','We Didn’t Start The Fire (Bonus Track)',
                 'We\'re All To Blame','When I Come Around','Who\'s Laughing Now',
                 'Worse Than This','You Are Not My Friend','You First (Re_ Remi Wolf)',
                 'Young Volcanoes','Your Love Is a Lie'
                 ];
const OGSONGS3 =['1901','1990something','23',
                 'A Fistful O\' Roses','AFTER THERAPY (feat. Hot Mulligan)','All Signs Point To Lauderdale',
                 'All Too Well (10 Minute Version) (Taylor\'s Version) (From The Vault)','Anti-Hero','Back and Forth',
                 'Basement','Bobby Sox','BURNOUT',
                 'Call Me Never','Candy','Comatose',
                 'Congratulations','Cool Kids','Dancing with You',
                 'debbie downer','Dog Days Are Over','Dollhouse',
                 'Drown In Your Misery','Evil Anonymous','Fallen',
                 'Feel Something','Forever in the Friendzone','Friendzone',
                 'FUNERAL GREY','Get A Job','Goodnight Adeline',
                 'Hey Ben','High Definition','House of Gold',
                 'I Bet My Life','i can\'t get my shit together','I Hate Everybody',
                 'Jackson, You Are Dying','Love Rush','Love Story (Taylor\'s Version) - Elvira Remix',
                 'Loved You A Little (with Taking Back Sunday and Charlotte Sands)','Mastermind','Mercy Me',
                 'Mistake','my ex','My Therapist Knows All About You',
                 'OH!','One Eyed Bastard','Overcome',
                 'Paralyzed','Pour Decisions','Punks Don\'t Dance',
                 'Rise, Naianasha (Cut The Cord)','Ruin My Life (feat. Deryck Whibley)','Run For Cover',
                 'Shapeshifting','Some Nights','Still Breathing',
                 'Still into You','Stupid for You','Talking to Myself',
                 'The Hard Way','The Liars Club','The Suffering',
                 'The Tornado','Think Of You','UNCOMPLICATED',
                 'Under the Influence(r)','We Are Never Ever Getting Back Together (Taylor\'s Version)','We Are Young (feat. Janelle Monáe)',
                 'We Didn’t Start The Fire','Who\'s Laughing Now','Wolf in Sheep\'s Clothing',
                 'You\'re So Fucking Pretty'];


var songs = [...OGSONGS1.sort()];
var originalSongs =[...songs];
var shuffledSongs = [...shuffle(songs)];


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
    audio.src = `music/Songs${listPlaying}/${song}.mp3`;


}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
    const listItems = document.querySelectorAll('#scrollable-list li');
    highlightIndex = originalSongs.indexOf(songs[songIndex]);
    listItems.forEach((item, i) => {
  if (i === highlightIndex) {
    item.classList.add('active-song');
  } else {
    item.classList.remove('active-song');
  }
});
  audio.play();

}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  const listItems = document.querySelectorAll('#scrollable-list li');
  listItems.forEach((item, i) => {

    item.classList.remove('active-song');

});
  audio.pause();
}

// Previous song
function prevSong() {
if(!repeatBool){
  songIndex--;
}


  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  if(!repeatBool){
  songIndex++;
}
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

repeatBtn.addEventListener('click', () => {
   repeatBtn.classList.toggle('pressed');
   repeatBool = !repeatBool;
   });

songListBtn.addEventListener('click', () => {
    pauseSong();
    if(listPlaying<3){
    listPlaying += 1;
    }
    else{
    listPlaying =1
    }
    switch(listPlaying){
        case 1:
          songListBtn.querySelector('i.fas').classList.remove('fa-heart');
          songListBtn.querySelector('i.fas').classList.add('fa-circle');
          originalSongs = [...OGSONGS1.sort()];
          shuffledSongs= [...shuffle(OGSONGS1)];
          songs = [...originalSongs];
          break
        case 2:
          songListBtn.querySelector('i.fas').classList.remove('fa-circle');
          songListBtn.querySelector('i.fas').classList.add('fa-star');
          originalSongs = [...OGSONGS2.sort()];
          shuffledSongs= [...shuffle(OGSONGS2)];
          songs = [...originalSongs];
          break;
        case 3:
          songListBtn.querySelector('i.fas').classList.remove('fa-star');
          songListBtn.querySelector('i.fas').classList.add('fa-heart');
          originalSongs = [...OGSONGS3.sort()];
          shuffledSongs= [...shuffle(OGSONGS3)];
          songs = [...originalSongs];
          break;
          default:
          }
       clearList();
       fillList(songs);
       if(shuffleBool){
                     shuffle(songs);
                     }
       songIndex = 0;
       loadSong(songs[songIndex]);

    });

    hiddenBtn.addEventListener('click', () => {
       musicContainer.classList.toggle('pressed');
       document.getElementById('scrollable-list-container').classList.toggle('pressed');
       hiddenBool = !hiddenBool;
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


function fillList(array) {
    // Your existing code...
    array.sort();
    // Get the container and the list

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
}

function clearList() {
    const list = document.getElementById('scrollable-list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    doggo1.src = `images/doggo1.jpeg`;
    doggo2.src = `images/doggo2.jpeg`;
    doggo3.src = `images/doggo3.jpeg`;
    doggo4.src = `images/doggo4.jpeg`;

    id="currTime"
    fillList(songs);

    const audio = document.getElementById('audio');
                const volumeControl = document.getElementById('volume-control');

                // Set initial volume to 1 (100%)
                audio.volume = 1;

                // Update volume when the slider is changed
                volumeControl.addEventListener('input', function () {
                    audio.volume = this.value;
                });
                loadSong(songs[songIndex]);

});
