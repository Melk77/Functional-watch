const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "YouTuber", "Blogger", "Freelancer"];
let careersIndex = 0;
let characterIndex = 0;
createCareer();
function createCareer() {
    containerEl.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0, characterIndex)}</h1>`;
    characterIndex++;
    if (characterIndex > careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
        if (careersIndex >= careers.length) {
            careersIndex = 0;
        }
    }
    setTimeout(createCareer, 500);
}
