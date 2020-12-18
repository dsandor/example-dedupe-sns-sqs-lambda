const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: 'us-east-1' });

async function sendMessages() {
	const params = {
		TopicArn: 'arn:aws:sns:us-east-1:973435562475:MyTopic.fifo',
		MessageGroupId: 'test-group',
		MessageDeduplicationId: 'abc123',
	};

	for (let i = 0; i < 10; i++) {
		params.Message = `Message number: ${i + 1}`;
		sns.publish(params).promise();
	}
}

sendMessages();