const { Lambda, Credentials } = require("aws-sdk");

const lambda = new Lambda({
  apiVersion: "2015-03-31",
  region: "ap-south-1",
  credentials: new Credentials({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  }),
});

/**
 * Sign a new JWT
 * @param {*} username
 * @returns Lambda Promise
 */
const signUserJwt = (username) => {
  return lambda
    .invoke({
      FunctionName: "jwt-function",
      Payload: JSON.stringify({
        operation: "sign",
        username: username,
      }),
    })
    .promise();
};

/**
 * Verify a JWT
 * @param {*} token
 * @returns Lambda Promise
 */
const verifyUserJwt = (token) => {
  return lambda
    .invoke({
      FunctionName: "jwt-function",
      Payload: JSON.stringify({
        operation: "verify",
        token: token,
      }),
    })
    .promise();
};

module.exports = {
  signUserJwt: signUserJwt,
  verifyUserJwt: verifyUserJwt,
};
