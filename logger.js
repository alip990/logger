axios = require('axios')

class Logger {
	constructor(url, token) {
		this.url = url
		this.token = token
	}

	async log(content, level = 'info') {
		try {
			axios.post(this.url+'/log', {
				content: content,
				level: level
			}, {
				headers: {
					"Authorization": this.token,
				},
			})
		}
		catch (err) {
			console.log('Error', err)
		}
	}

	async queryInfo(domain) {
		try {
			axios.post(this.url + '/query', {
				domain: domain
			}, {
				headers: {
					"Authorization": this.token,
				},
			})

		} catch (err) {
			console.log("Error", err)
		}
	}
}

module.exports = Logger
