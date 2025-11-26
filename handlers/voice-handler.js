/**
 * Voice Handler - TwiML Response
 *
 * Handles incoming/outbound calls with TwiML instructions.
 * Customized during the Twilio Voice AI Workshop.
 */

exports.handler = function(context, event, callback) {
  const twilio = require('twilio');
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Hello, this is a call from our store service.', { voice: 'Polly.Joanna' });

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 10
  });

  gather.say('Press 1 to find a store location. Press 2 to know about store hours. Press 3 to check product availability.', { voice: 'Polly.Joanna' });

  twiml.say('If you want to repeat the menu, please stay on the line.', { voice: 'Polly.Joanna' });

  twiml.redirect({
    method: 'POST'
  }, '/ivr');

  twiml.say('Thank you. Goodbye!', { voice: 'Polly.Joanna' });
  twiml.hangup();

  callback(null, twiml);
};

module.exports = { handler: exports.handler };
