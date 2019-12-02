const content = require('../assets/text');

export function displayContent(lang, index, field) {
	try {
		// return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
		if (index < 0) {
			return (content.filter(obj => obj.lang === lang)[0].pages[field])
		}
		return (content.filter(obj => obj.lang === lang)[0].pages[field][index])
	} catch (e) {
		console.log(`An error occurred with following values: language: ${lang} | index: ${index} | field: ${field}`);
		return null
	}
}