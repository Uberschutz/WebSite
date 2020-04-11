const content = require('../assets/text');

export function displayContent(lang, index, field) {
	try {
		// return(<div dangerouslySetInnerHTML={ {__html: content} }/>)
		if (index < 0) {
			return (content.filter(obj => obj.lang === lang)[0].pages[field])
		}
		return (content.filter(obj => obj.lang === lang)[0].pages[field][index])
	} catch (e) {
		console.log(e);
		console.log(`An error occurred with following values: language: ${lang} | index: ${index} | field: ${field}`);
		return null
	}
}

export function displayHttpMessages(lang, code, message) {
	try {
		return (content.filter(obj => obj.lang === lang)[0].httpResponses.filter(obj => +obj.code === code)[0].messages.filter(msg => msg.key === message)[0].translate);
	} catch (e) {
		console.log(e);
		console.log(`An error occurred with following values (http): language: ${lang} | code: ${code} | message: ${message}`);
		return null
	}
}