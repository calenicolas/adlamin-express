const https = require('http');

class HttpClient {
    get(endpoint) {
        return new Promise((resolve, reject) => this.makeGetRequest(resolve, reject, endpoint));
    }

    makeGetRequest(resolve, reject, endpoint) {
        https.get(endpoint, (res) => this.handleResponse(res, resolve))
            .on('error', reject);
    }

    handleResponse(res, resolve) {
        let data = [];
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', headerDate);

        res.on('data', chunk => {
            data.push(chunk);
        });

        res.on('end', () => {
            console.log('Response ended: ');
            const users = JSON.parse(Buffer.concat(data).toString());

            resolve(users)
        });
    }
}

module.exports = HttpClient;