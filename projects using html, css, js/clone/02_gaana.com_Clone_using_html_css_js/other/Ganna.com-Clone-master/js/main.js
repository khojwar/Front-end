const musicLibsContainer = document.getElementById('music-libs');

const audioPlayer = document.getElementById('audio_player');
const playingBtn = document.getElementById('playing')
const pausedBtn = document.getElementById('paused')
const songCurrentTime = document.getElementById('songTimeStart');
const songTotalTime = document.getElementById('songTotalTime');

var currentSongObj = {};
var defaultImage = "assests/images/ppk2.jpg"

window.addEventListener('load', bootUpApp);

function bootUpApp() {
    fetchAndRenderAllSections();
    setInterval(()=>{
        updatePlayerTime();
    },1000)
}
function fetchAndRenderAllSections() {
    fetch('/js/gaana.json')
        .then(res => res.json())
        .then(res => {
            console.table('response', res);
            const { cardbox } = res;
            if (Array.isArray(cardbox) && cardbox.length) {
                cardbox.forEach(section => {
                    const { songsbox, songscards } = section;
                    renderSection(songsbox, songscards);
                })
            }
        })
        .catch((err) => {
            console.error(err);
            alert('fetching failed');
        })

}

function renderSection(title, songsList) {
    const songsSection = makeSectionDom(title, songsList);
    musicLibsContainer.appendChild(songsSection)
}

function makeSectionDom(title, songsList) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'songs-sections';

    //add songs to html
    sectionDiv.innerHTML =
        `
    <h2 class="section-heading">${title}</h2>
                <div class="songs-cont">
                ${songsList.map(songObj =>
            buildSongCardDom(songObj)).join('')}
                </div>
                `

    console.log(sectionDiv);
    return sectionDiv;
}

function buildSongCardDom(songObj) {
    return `
    <div class="song-card" onclick="playSong(this)" data-songobj='${JSON.stringify(songObj)}'>
    <div class="img-cont">
        <img src="/${songObj.image_source}" alt="${songObj.song_name}">
        <div class="overlay">
        </div>
    </div>
    <p class="song-name">${songObj.song_name}</p>
</div>
    `
}

function playSong(songCardEl) {
    document.getElementById("music-player").classList.remove("hidden");
    const songObj = JSON.parse(songCardEl.dataset.songobj);
    console.log(songObj);
    setAndPlayCurrentSong(songObj);

   
}

function setAndPlayCurrentSong(songObj) {
    currentSongObj = songObj;
    audioPlayer.pause();
    audioPlayer.src = songObj.quality.low;
    audioPlayer.currentTime = 0;
    audioPlayer.play();

    updatePlayerUi(songObj);
}

function updatePlayerUi(songObj) {
    const songImg = document.getElementById('song-img')
    const songName = document.getElementById('song-name')

    pausedBtn.style.display='none';
    playingBtn.style.display='block';

    songImg.src = songObj.image_source;
    songName.innerHTML = songObj.song_name;
    songCurrentTime.innerHTML = audioPlayer.currentTime;
}

function togglePlayer()
{
    if(audioPlayer.paused) 
    {
        audioPlayer.play();
      

    }
    else 
    
    {audioPlayer.pause();}
    pausedBtn.style.display=audioPlayer.paused?'block':'none'
    playingBtn.style.display=audioPlayer.paused?'none':'block'
       
}


function updatePlayerTime()
{
if(!audioPlayer || audioPlayer.paused) return;

const songCurrentTime=document.getElementById('songTimeStart')
songCurrentTime.innerHTML=getTimeString(audioPlayer.currentTime);

songTotalTime.innerHTML =getTimeString(audioPlayer.duration);
}


function getTimeString(time)
{
return  isNaN(audioPlayer.duration)?"0:00":Math.floor(time/60)+":"+parseInt((((time/60)%1)*100).toPrecision(2));

}