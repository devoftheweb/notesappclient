export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "serverless-notes-west"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://m3fmeyocch.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_NbwWUbHzr",
    APP_CLIENT_ID: "4ebl1r1nk44uhcspeo88vu5g44",
    IDENTITY_POOL_ID: "us-west-2:9c983105-c27b-4641-a265-f918e12db1ca"
  }
};
