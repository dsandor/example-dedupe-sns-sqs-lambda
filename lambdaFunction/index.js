module.exports.handler = async (event) => {
	console.log(JSON.stringify(event, null, 2));

	// event is an SQS Message 

	// The SNS message is JSON serialized in the body property of the SQS record.
	const snsMessage = JSON.parse(event.Records[0].body);
	const snsPayload = snsMessage.Message;

	console.log('snsPayload is:', snsPayload);
};