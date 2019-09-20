function madLibIt() {
    const nameOneInput = document.getElementById('name-one');
    const nameOne = nameOneInput.Value;
    const nameOneSpan = document.getElementById('nameOne');
    nameOneSpan.textContent = nameOne;

    const friendNameInput = document.getElementById('friend-name');
    const friendName = friendNameInput.Value;
    const friendNameSpan = document.getElementById('friendName');
    friendNameSpan.textContent = friendName;

    const animalInput = document.getElementById('a-animal');
    const aAnimal = animalInput.Value;
    const animalSpan = document.getElementById('aAnimal');
    animalSpan.textContent = aAnimal;

    const adjectiveInput = document.getElementById('adjective-one');
    const adjectiveOne = adjectiveInput.value;
    const adjectiveSpan = document.getElementById('adjectiveOne');
    adjectiveSpan.textContent = adjectiveOne;

    const monsterAnimalInput = document.getElementById('monster-animal');
    const monsterAnimal = monsterAnimalInput.value;
    const monsterAnimalSpan = document.getElementById('monsterAnimal');
    monsterAnimalSpan.textContent = monsterAnimal;

    const verbOneInput = document.getElementById('verb-one');
    const verbOne = verbOneInput.value;
    const verbOneSpan = document.getElementById('verbOne');
    verbOneSpan.textContent = verbOne;

    const nounOneInput = document.getElementById('noun-one');
    const nounOne = nounOneInput.value;
    const nounOneSpan = document.getElementById('nounOne');
    nounOneSpan.textContent = nounOne;

    const nounTwoInput = document.getElementById('noun-two');
    const nounTwo = nounTwoInput.value;
    const nounTwoSpan = document.getElementById('nounTwo');
    nounTwoSpan.textContent = nounTwo;

    const pastVerbInput = document.getElementById('past-verb');
    const pastVerb = pastVerbInput.value;
    const pastVerbSpan = document.getElementById('pastVerb');
    pastVerbSpan.textContent = pastVerb;

    const homeInput = document.getElementById('a-home');
    const aHome = homeInput.value;
    const homeInputSpan = document.getElementById('aHome');
    homeInputSpan.textContent = aHome;

    const showMadLibStory = document.getElementById('madlib-story');
    showMadLibStory.classList.remove('hidden');
}
