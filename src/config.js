//Set environment variables
const dev = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-9z7yxgnz3olr"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://0kb4q77qzh.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_TS568Ilvc",
    APP_CLIENT_ID: "7aha24pf06dg29ad173r1g7bq1",
    IDENTITY_POOL_ID: "us-west-2:de30eff0-6abd-484e-b6c8-60f884ae3125"
  }
};

const prod = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-5def57fy8mnx"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://exff5kis95.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_KmImr9lWH",
    APP_CLIENT_ID: "290kar05jan65vquu0m9jrmj3a",
    IDENTITY_POOL_ID: "us-west-2:be3b8911-4861-46dd-b72b-52d08fd00396"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
