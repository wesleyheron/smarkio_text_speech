const config = require('../config/global-config');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1.js');
const {
  IamAuthenticator
} = require('ibm-watson/auth');
const fs = require('fs');

const textToSpeech = new TextToSpeechV1({
  version: '2020-05-16',
  authenticator: new IamAuthenticator({
    apikey: config.apikey,
  }),
  url: config.ibmUrl
});

exports.getAudio = async (textToAudio) => {
  textToSpeech
    .synthesize({
      text: textToAudio.comment,
      accept: 'audio/ogg',
      voice: config.voice,
    })
    .then(response => {
      const audio = response.result;
      var write_stream = fs.createWriteStream('./app/public/audios/' + textToAudio.id + '.ogg')
      audio.pipe(write_stream);
    })
    .catch(err => {
      console.log('error:', err);
    });
}