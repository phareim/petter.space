const fetch = require('node-fetch');

module.exports = async (req, res) => {
	response.status(200).json({
		id: "3281767f77eec4f7babc92abbd2464b4",
		text: "In every episode of Seinfeld there is a Superman somewhere.",
		source: "djtech.net",
		source_url: "http://www.djtech.net/humor/useless_facts.htm",
		language: "en",
		permalink: "https://uselessfacts.jsph.pl/api/v2/facts/3281767f77eec4f7babc92abbd2464b4"
	});
};
/*
export default function handler(req, res) {
	fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
		.then(response => {
			//res.status(200).send(response.json());
			return response.json();
		})
		.then(data => res.status(200).send(data.text))
		.catch(error => {
			console.error(error);
			res.status(500).send('Error fetching useless fact.');
		});

}
*/

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
