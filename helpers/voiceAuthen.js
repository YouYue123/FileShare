var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var speech_to_text = new SpeechToTextV1({
  username: '40b2fee0-5da4-44bc-a4bc-12c8a538485b',
  password: 'yUZ4admXUtkh'
})


// fs.createStream('./test.wav')
//   .pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
//   .pipe(fs.createWriteStream('./transcipt.txt'))

voiceToText = function(voiceStream){
    voiceStream.pipe(speech_to_text.createRecognizeStream({ content_type: 'audio/l16; rate=44100' }))
               .pipe(fs.createWriteStream('./transcipt.txt'))
}

exports.voiceToText = voiceToText
