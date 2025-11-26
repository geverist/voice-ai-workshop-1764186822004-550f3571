/**
 * Voice Handler - TwiML Response
 *
 * Handles incoming/outbound calls with TwiML instructions.
 * Customized during the Twilio Voice AI Workshop.
 */

exports.handler = function(context, event, callback) {
  const twilio = require('twilio');
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Hello, thank you for your recent purchase. We would like to conduct a quick post-purchase satisfaction survey and collect your Net Promoter Score feedback.', { voice: 'Polly.Joanna' });

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 10
  });
  gather.say('If you are ready to start the survey, please press 1. If you would like to schedule the survey for a later time, please press 2.', { voice: 'Polly.Joanna' });

  twiml.say('Thank you for your time. Goodbye!', { voice: 'Polly.Joanna' });
  twiml.hangup();

  callback(null, twiml);
};

module.exports = { handler: exports.handler };
