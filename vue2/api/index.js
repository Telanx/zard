import request from 'request';
const handler = (req, res) => {
    if(req.query.url) {
        let reqjson = {
            url: req.query.url,
            method: 'GET',
        };
        request(reqjson, (err, res2, body) => {
            if(err) {
                return res.status(500).end(err);
            }
            res.end(body);
        });
    }
    res.status(404).end('<h1>404 Not Found</h1>');

}
module.exports = handler;