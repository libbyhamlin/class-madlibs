function madLibIt() {
    const nameOneInput = document.getElementById('name-one').value;
    const friendNameInput = document.getElementById('friend-name').value;
    const animalInput = document.getElementById('animal').value;
    const adjectiveInput = document.getElementById('adjective').value;
    const monsterAnimalInput = document.getElementById('monster-animal').value;
    const verbOneInput = document.getElementById('verb-one').value;
    const nounOneInput = document.getElementById('noun-one').value;
    const nounTwoInput = document.getElementById('noun-two').value;
    const pastVerbInput = document.getElementById('past-verb').value;
    const homeInput = document.getElementById('home').value;

    const nameOneSpan = document.getElementById('name-one-span');
    nameOneSpan.textContent = nameOneInput;
    const friendNameSpan = document.getElementById('friend-name-span');
    friendNameSpan.textContent = friendNameInput;
    const animalSpan = document.getElementById('animal-span');
    animalSpan.textContent = animalInput;
    const adjectiveSpan = document.getElementById('adjectiveSpan');
    adjectiveSpan.textContent = adjectiveSpan;
    const monsterAnimalSpan = document.getElementById('monster-animal-span');
    monsterAnimalSpan.textContent = monsterAnimalInput;
    const verbOneSpan = document.getElementById('verb-one-span');
    verbOneSpan.textContent = nameOneInput;
    const nounOneSpan = document.getElementById('noun-one-span');
    nounOneSpan.textContent = nounOneInput;
    const nounTwoSpan = document.getElementById('noun-two-span');
    nounTwoSpan.textContent = nounOneInput;
    const pastVerbSpan = document.getElementById('past-verb-span');
    pastVerbSpan.textContent = pastVerbInput;
    const homeInputSpan = document.getElementById('home-Input-Span');
    homeInputSpan.textContent = homeInput;

    const madLibSection = document.getElementById('mad-lib');
}
