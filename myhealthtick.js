  // Get the video element
  const  video = document.getElementById("infiniteVideo");

  // Listen for the 'ended' event and restart the video
  video.addEventListener("ended", () => {
    video.currentTime <= 0; // Reset the video to the beginning
    video.play(); // Start playing again
  });
const LandingPage = document.getElementById('LandingPage');
LandingPage.addEventListener('click', () => {
    video.currentTime <= 0; 
    video.play();
})


const nameUser = document.getElementById('nameUser');
const howMuchKgLoss = document.getElementById('howMuchKgLoss');
const HabiteChange = document.getElementById('HabiteChange');
const UserFeddBackChanger = document.getElementById('UserFeddBackChanger');
const LocationButton = document.querySelectorAll('.LocationButton');
const UserOfImage = document.querySelectorAll('#UserOfImage');
const Back = document.getElementById('Back');
const Next = document.getElementById('Next');

let InformOfObjectsUserImage = {
    imageUserOneMeadia:UserOfImage[0],
    imageUserOneMeadia1:UserOfImage[1],
}
let LocationButtonInjava = {
    one: LocationButton[0],
    two: LocationButton[1],
    three: LocationButton[2],

    four: LocationButton[3],
    five: LocationButton[4],
    six: LocationButton[5],
}
console.log(LocationButton)

function animation() {
    const userInnerRateContainer = document.querySelector('.userInnerRateContainer');
    userInnerRateContainer.style.animationName = "animationUserRate";
}

function ManpreetKaur() {
    nameUser.innerHTML = "Manpreet Kaur";
    howMuchKgLoss.innerHTML = "11 KG in a 3.5 months";
    HabiteChange.innerHTML = "Better Sleep";
    UserFeddBackChanger.innerHTML = "HealthTick is an EXCELLENT program that helps you evaluate your relationship with food and make positive improvements to overall health. I'm sure I'm going to change my health and life forever. Thanks team, really grateful to you all!"

    InformOfObjectsUserImage.imageUserOneMeadia.style.backgroundImage = "url(images/userOne.webp)"
    InformOfObjectsUserImage.imageUserOneMeadia1.style.backgroundImage = "url(images/userOne.webp)"

    LocationButtonInjava.four.style.backgroundColor = "rgba(0, 255, 255, 0.313)";
    LocationButtonInjava.five.style.backgroundColor = "";
    LocationButtonInjava.six.style.backgroundColor = "";

    LocationButtonInjava.one.style.backgroundColor = "rgba(0, 255, 255, 0.313)";
    LocationButtonInjava.two.style.backgroundColor = "";
    LocationButtonInjava.three.style.backgroundColor = "";

    Next.addEventListener('click', () => {
        AkshatGarg();
        animation()
    })
    Back.addEventListener('click',  () => {
        rithvikRThamy();
        animation()
    })
    
}ManpreetKaur();

function AkshatGarg() {
    nameUser.innerHTML = "Akshat Garg";
    howMuchKgLoss.innerHTML = "7 KG";
    HabiteChange.innerHTML = "Improved relationship with foods";
    UserFeddBackChanger.innerHTML = "It is a good program. I am able to be observant about what I eat by now  and eat less easily.Now over time I can change choices in food. I also shared it with my friend, she also liked it, the byte sized content delivery which is usable."

    InformOfObjectsUserImage.imageUserOneMeadia.style.backgroundImage = "url(images/userThree.webp)"
    InformOfObjectsUserImage.imageUserOneMeadia1.style.backgroundImage = "url(images/userThree.webp)"

    LocationButtonInjava.five.style.backgroundColor = "rgba(0, 255, 255, 0.313)";
    LocationButtonInjava.four.style.backgroundColor = "";
    LocationButtonInjava.six.style.backgroundColor = "";

    LocationButtonInjava.two.style.backgroundColor = "rgba(0, 255, 255, 0.313)";
    LocationButtonInjava.three.style.backgroundColor = "";
    LocationButtonInjava.one.style.backgroundColor = "";

    Next.addEventListener('click', () => {
        rithvikRThamy();
        animation()
    })
    Back.addEventListener('click',  () => {
        ManpreetKaur();
        animation()
    })
}

function rithvikRThamy () {
    nameUser.innerHTML = " Rithvik R. Thamy";
    howMuchKgLoss.innerHTML = "11KG";
    HabiteChange.innerHTML = "Better Eating Habits";
    UserFeddBackChanger.innerHTML = "Have been using the app for last couple of days. The lessons are good easy to follow and not overwhelming."

    InformOfObjectsUserImage.imageUserOneMeadia.style.backgroundImage = "url(images/userImageTwo.webp)"
    InformOfObjectsUserImage.imageUserOneMeadia1.style.backgroundImage = "url(images/userImageTwo.webp)"

    LocationButtonInjava.six.style.backgroundColor = "rgba(0, 255, 255, 0.313)";
    LocationButtonInjava.five.style.backgroundColor = "";
    LocationButtonInjava.four.style.backgroundColor = "";

    LocationButtonInjava.three.style.backgroundColor = "rgba(0, 255, 255, 0.313)";
    LocationButtonInjava.two.style.backgroundColor = "";
    LocationButtonInjava.one.style.backgroundColor = "";

    Next.addEventListener('click', () => {
        ManpreetKaur();
        animation()
    })
    Back.addEventListener('click',  () => {
        AkshatGarg();
        animation()
    })
}




const NewBrandImage = document.getElementById('NewBrandImage');
const DescribeAboutApp = document.getElementById('DescribeAboutApp');
const innerWhichNewsContainer = document.querySelector('.innerWhichNewsContainer');

setInterval(() => {
    NewBrandImage.src = "images/imageForNew1.webp";
    innerWhichNewsContainer.style.animationName = "animation";
    DescribeAboutApp.innerHTML = "HealthTick Brings  pschology to fitness and Wellness"
}, 4000);
setInterval(() => {
    NewBrandImage.src = "images/imageForNew2.webp";
    innerWhichNewsContainer.style.animationName = "animation";
    DescribeAboutApp.innerHTML = "This app help you how to eat, fell, sleep and move"

}, 5000);
setInterval(() => {
    NewBrandImage.src = "images/imageForNew3.webp";
    innerWhichNewsContainer.style.animationName = "animation";
    DescribeAboutApp.innerHTML = "HeatTick helps user Trick their mind into losing Weight"

}, 6000);