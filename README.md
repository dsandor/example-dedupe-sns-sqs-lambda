# example-dedupe-sns-sqs-lambda

This is the code for my blog article located here:

https://medium.com/build-succeeded/deduplicating-sns-and-sqs-messages-using-awss-new-fifo-sns-topics-and-a-fifo-sqs-queue-df0e11fc2f0d


## Example AWS Commands as used in the Blog Post

```
aws s3 mb s3://example-dedupe-sns-sqs-lambda

sam package --s3-bucket example-dedupe-sns-sqs-lambda --region us-east-1

sam deploy --stack-name example-stack --s3-bucket example-dedupe-sns-sqs-lambda -t template.yaml --region us-east-1 --capabilities CAPABILITY_IAM

aws cloudformation describe-stack-resources --stack-name example-stack
```
