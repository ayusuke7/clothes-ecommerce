const aws = require("aws-sdk");

const options = {
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
};

console.log("AWS Config", options);
aws.config.update(options);

module.exports = aws;
