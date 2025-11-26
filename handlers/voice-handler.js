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
  gather.say('Press 1 for software issues. Press 2 for password resets. Press 3 for troubleshooting common problems.', { voice: 'Polly.Joanna' });

  twiml.say('If you know your party’s extension, you can enter it at any time. Otherwise, please wait for the next available agent.', { voice: 'Polly.Joanna' });
  twiml.hangup();

  callback(null, twiml);
};

module.exports = { handler: exports.handler };
