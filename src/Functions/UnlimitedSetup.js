const UnlimitedNormalSetup = async () => {
	if(!localStorage.getItem('unlimited-answers') && !localStorage.getItem('unlimited-found') && !localStorage.getItem('unlimited-given-up')) {
		let letters = await fetch("https://agreeable-jade-swordfish.cyclic.app/generateOne");
		letters = await letters.json();
      	localStorage.setItem('unlimited-start', letters['start']);
      	localStorage.setItem('unlimited-end', letters['end']);
      	localStorage.setItem('unlimited-given-up', 'no');
      	let data = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json');
      	data = await data.json();
		const answer = Object.keys(data)
	      .filter((key) => key.startsWith(localStorage.getItem('unlimited-start')) && key.endsWith(localStorage.getItem('unlimited-end')));
		localStorage.setItem('unlimited-answers', JSON.stringify(answer));
		localStorage.setItem('unlimited-found', JSON.stringify([]));
	 }
}

export { UnlimitedNormalSetup };