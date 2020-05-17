const repository = require('../repositories/comment');
const textToSpeedService = require('../services/textToSpeech');

exports.get = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
};

exports.post = async (req, res) => {
    try {
        var data = await repository.post({
            comment: req.body.comment
        });

        let textToAudio = {
            id: data.id,
            comment: data.comment
        }
        await textToSpeedService.getAudio(textToAudio);

        res.status(201).send({
            message: 'Novo comentário adicionado!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
};