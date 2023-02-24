const fetch = require('node-fetch');

export default async function handler(req, res) {
	try {
		const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
		const data = await response.json();
		res.status(200).send(data.text);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error fetching useless fact.');
	}
}

/**
 * {
id: "3281767f77eec4f7babc92abbd2464b4",
text: "In every episode of Seinfeld there is a Superman somewhere.",
source: "djtech.net",
source_url: "http://www.djtech.net/humor/useless_facts.htm",
language: "en",
permalink: "https://uselessfacts.jsph.pl/api/v2/facts/3281767f77eec4f7babc92abbd2464b4"
}
 */