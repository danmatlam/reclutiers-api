var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '1065937',
    key: '3b49318cc8a294ab90cd',
    secret: 'ecb06403dc2805fd969e',
    cluster: 'us2',
    useTLS: true
});


class CandidatesController {
    async candidatesPush(req, res) {
        const {body}= req
        console.log(body)
        try {
            const response = await pusher.trigger('my-channel', 'my-event', body);
            return res.status(200).json({ mensaje:'ok' })
        } catch (error) {
            console.log(error)
            return res.status(503).json({ error })
        }
    }
};


export default new CandidatesController();
