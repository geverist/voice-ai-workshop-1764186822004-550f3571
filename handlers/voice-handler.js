/**
 * Voice Handler - TwiML Response
 *
 * Handles incoming/outbound calls with TwiML instructions.
 * Customized during the Twilio Voice AI Workshop.
 */

exports.handler = function(context, event, callback) {
  const twilio = require('twilio');
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Hello! Thank you for calling our technical support.', { voice: 'Polly.Joanna' });

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 10
  });
  gather.say('If you are calling for software issues, press 1. If you need to reset your password, press 2. For troubleshooting common problems, press 3.', { voice: 'Polly.Joanna' });

  twiml.say('Thank you for calling our technical support. Goodbye!', { voice: 'Polly.Joanna' });
  twiml.hangup();

  callback(null, twiml);
};

module.exports = { handler: exports.handler };
