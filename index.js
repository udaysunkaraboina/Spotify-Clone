console.log("Welcome to Spotify");
let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let mastersongname=document.getElementById('mastersongname');
let songs=[
    {songname:'Adiga Adiga',filepath:'songs/1.mp3', coverpath:'covers/1.jfif'},
    {songname:'Marhaba',filepath:'songs/2.mp3', coverpath:'covers/2.jfif'},
    {songname:'Andangalena',filepath:'songs/3.mp3', coverpath:'covers/3.jfif'},
    {songname:'Jersey',filepath:'songs/4.mp3', coverpath:'covers/4.jfif'},
    {songname:'Nuvvena',filepath:'songs/5.mp3', coverpath:'covers/5.jfif'},
    {songname:'Satyam Emito',filepath:'songs/6.mp3', coverpath:'covers/6.jfif'},
    {songname:'Neeve',filepath:'songs/7.mp3', coverpath:'covers/7.jfif'},
    {songname:'Thanemandho',filepath:'songs/8.mp3', coverpath:'covers/8.jfif'},
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;

})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeallplays()
        songindex = parseInt(e.target.id)+1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioelement.currentTime=0;
        
        audioelement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText=songs[songindex-1].songname;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-circle-pause");
    })
});

document.getElementById('next').addEventListener('click', ()=>
    {
    if (songindex>=8)
    {
        songindex=1;
    }
    else{
        songindex+=1;
    }
    audioelement.currentTime=0;
    audioelement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex-1].songname;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-circle-pause");
    }
)

document.getElementById('previous').addEventListener('click', ()=>{
    if (songindex<=1)
        {
            songindex=8;
        }
    else{
        songindex-=1;
        }
        audioelement.currentTime=0;
        audioelement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText =songs[songindex-1].songname;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-circle-pause");
    }
    
)