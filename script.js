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

const OGSONGS2 =['All I Want','All The Small Things','Another F.U. Song - Another F.U. Song',
                 'Anything Was Better','Bad Time','Bigger Than Kiss',
                 'Come Out and Play','DANCE WITH ME','Darby Crashing Your Party',
                 'EDGING','Feeling This','Forget It All',
                 'Fuck You','Here In Your Bedroom','Hey Driver',
                 'I Think We\'re Alone Now','I Was a Teenage Anarchist','I Was Wrong',
                 'Loser','Mercy Me','My Everything',
                 'My Own Worst Enemy','Not Today','Ocean Avenue',
                 'OTHER SIDE','Outrage','Rabbit Hole (Explicit)',
                 'Raised By Wolves','She Has a Girlfriend Now','She\'s Kerosene',
                 'SKATE','Somewhere On Fullerton','Stay Up All Night',
                 'Substitute','Take Back The Power','Ten Stories High',
                 'The American Scream','THE FIGHT OF OUR LIVES (feat. Tim McIlrath of Rise Against & Brian Baker of Bad Religion)','The High Cost of Low Living',
                 'The Man I Killed','The Middle','The Rock Show',
                 'Time Bomb','Unstoppable','Wallflower',
                 'Want You Bad','We Never Have Sex Anymore','Who\'s Laughing Now',
                 'Why Don\'t You Get A Job','You\'re Gonna Go Far, Kid',
                 '3 AM','Bad Intentions','Brick by Boring Brick',
                 'Calm Down','Check Yes, Juliet','College Kids',
                 'Complete Collapse','crushcrushcrush','C’est Comme Ça',
                 'Dandelions','Dear Maria, Count Me In','Dirty Little Secret',
                 'Everybody but You','Everything Is Alright','Faster Ride',
                 'Feel Good Drag','Go To Hell','Good Advice',
                 'hair out','Hold Me Like a Grudge','I MISS 2003',
                 'I\'ve Been Dead All Day','Jamie All Over','Just Like Home',
                 'Little Lion Man','Loved You A Little (with Taking Back Sunday and Charlotte Sands)','Memory',
                 'Misery Business','Mistake','Modern Love',
                 'One Of THOSE Nights','Punk Rock Songs','Red Light Kisser (with Jordan Pundik of New Found Glory)',
                 'Right Girl','Rose-Colored Boy','Running Out Of Time',
                 'Sleeping In','Sleepwalking','Some Kind of Disaster',
                 'sorry mom x','Strangest Faces','Take Your Jacket',
                 'Teenagers','Tell Me I\'m A Wreck','Tell Me I’m Alive',
                 'That\'s What You Get','The Best Of Me','The Best Thing (That Never Happened)',
                 'Voldemort','We Don\'t Get High Like We Used To',
                 ];
const OGSONGS3 =['1901','A-Punk','Ain\'t No Rest For The Wicked - Original Version',
                 'Alive','All My Friends Are Nobodies','Amber',
                 'American Idiot','Awake and Alive','Basket Case',
                 'Behind Blue Eyes','Bleed It Out','Blur',
                 'Body Bag','Boulevard of Broken Dreams','boy',
                 'Can\'t Stop','Choker','Could Have Been Me',
                 'Dark Days','Dog Days Are Over','Down with the Sickness',
                 'Every Morning','Faint','Fallen',
                 'Far Away','Feel It Still','Fighting Myself',
                 'First','Foxtrot Uniform Charlie Kilo','Good Riddance (Time of Your Life)',
                 'Happy Idiot','Hard Times','Hero',
                 'High Time','Holiday','House of Gold',
                 'How You Remind Me','I Bet My Life','I Dare You',
                 'I Will Follow You into the Dark','In the End','Island In The Sun',
                 'Left Hand Free','Lifeline','Lonely Boy',
                 'Lost','Miss Jackson (feat. LOLO)','Modern Girl',
                 'Monster','Mr. Brightside','My Songs Know What You Did In The Dark (Light Em Up)',
                 'Numb','One Day','One Last Breath',
                 'One More Light','Otherside','Our Love',
                 'Out of My League','Over','Overcome',
                 'Psycho In My Head','Pumped Up Kicks','Robbery',
                 'Rude','Run For Cover','Safe And Sound',
                 'Santeria','Savin\' Me - 2020 Remaster','Scar Tissue',
                 'Seaside','Sex on Fire','She Moves In Her Own Way',
                 'Sit Next to Me','Somebody Told Me','Someday',
                 'Someone To You','Something Good Can Work','Song 2 - 2012 Remaster',
                 'Such Great Heights - Remastered','Teenage Dirtbag','Teenagers',
                 'The Reason','The Tornado','The Walk Home',
                 'Those Days','Toxicity','Under the Bridge',
                 'Undercover Martyn','Vegas Lights','Viva La Vida',
                 'Wake Me','Waste A Moment','What You Know',
                 'When I Come Around','Worse Than This','You Give Love A Bad Name',
                 'You Shook Me All Night Long','Zombie'];


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
