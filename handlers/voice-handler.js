/**
 * Voice Handler - TwiML Response
 *
 * Handles incoming/outbound calls with TwiML instructions.
 * Customized during the Twilio Voice AI Workshop.
 */

exports.handler = function(context, event, callback) {
  const twilio = require('twilio');
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Hello! Thank you for calling our medical practice.', { voice: 'Polly.Joanna' });

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 10
  });
  gather.say('Press 1 to schedule a doctor appointment. Press 2 to cancel an existing appointment. Press 3 to receive an appointment reminder.', { voice: 'Polly.Joanna' });

  twiml.say('Thank you for calling our medical practice. Have a healthy day!', { voice: 'Polly.Joanna' });
  twiml.hangup();

  callback(null, twiml);
};

module.exports = { handler: exports.handler };
