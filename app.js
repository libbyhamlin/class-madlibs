function makeMadLib() {
    const nameOneInput = document.getElementById('name-one');
    const nameOneSpan = document.getElementById('name-one-span');
    nameOneSpan.textContent = nameOneInput.value;

    const friendNameInput = document.getElementById('friend-name');
    const friendNameSpan = document.getElementById('friend-name-span');
    friendNameSpan.textContent = friendNameInput.value;

    const animalInput = document.getElementById('animal');
    const animalSpan = document.getElementById('animal-span');
    animalSpan.textContent = animalInput.value;

    const adjectiveOneInput = document.getElementById('adjective-one');
    const adjectiveSpan = document.getElementById('adjective-span');
    adjectiveSpan.textContent = adjectiveOneInput.value;

    const monsterAnimalInput = document.getElementById('monster-animal');
    const monsterAnimalSpan = document.getElementById('monster-animal-span');
    monsterAnimalSpan.textContent = monsterAnimalInput.value;

    const verbOneInput = document.getElementById('verb-one');
    const verbOneSpan = document.getElementById('verb-one-span');
    verbOneSpan.textContent = verbOneInput.value;

    const nounOneInput = document.getElementById('noun-one');
    const nounOneSpan = document.getElementById('noun-one-span');
    nounOneSpan.textContent = nounOneInput.value;

    const nounTwoInput = document.getElementById('noun-two');
    const nounTwoSpan = document.getElementById('noun-two-span');
    nounTwoSpan.textContent = nounTwoInput.value;

    const pastVerbInput = document.getElementById('past-verb');
    const pastVerbSpan = document.getElementById('past-verb-span');
    pastVerbSpan.textContent = pastVerbInput.value;

    const aHomeInput = document.getElementById('a-home');
    const aHomeInputSpan = document.getElementById('home-span');
    aHomeInputSpan.textContent = aHomeInput.value;

    const showMadLibStory = document.getElementById('madlib-story');
    showMadLibStory.classList.remove('hidden');
}
