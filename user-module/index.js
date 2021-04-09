require("dotenv").config();

const express = require("express");
const cors = require("cors");
const {
  registerNewCustomUser,
  customUserLogin,
  fetchLinkedinAccessToken,
  fetchLinkedinProfileJwt,
  generateGoogleLoginUrl,
  fetchGoogleProfileJwt,
  storeContactUs,
} = require("./controller");
const validator = require("./middlewares/validator");
const {
  NewCustomUserSchema,
  UserLoginSchema,
  ContactUsSchema,
} = require("./schemas");

const app = express();

// Middlewares to parse request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Defining the routes
 */
// Healthcheck
app.get("/healthcheck", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
// Get login URL for LinkedIn
app.get("/login/linkedin", (req, res) => {
  res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.LINKEDIN_REDIRECT_URI}&scope=r_emailaddress%20r_liteprofile`
  );
});
// Exchange Linkedin login token for JWT
app.get("/redirect/linkedin", async (req, res) => {
  try {
    const { code } = req.query;
    if (code === undefined) {
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "*",
      });
      return res.status(403).json({
        status: false,
        message: "We could not log you in with LinkedIn.",
      });
    }
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.json({
      success: true,
      token: await fetchLinkedinProfileJwt(
        await fetchLinkedinAccessToken(code)
      ),
    });
  } catch (error) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.status(error.code).json({ success: false, message: error.message });
  }
});
// Get login URL for Google
app.get("/login/google", async (re, res) => {
  res.redirect(generateGoogleLoginUrl());
});
// Exchange Google login token for JWT
app.get("/redirect/google", async (req, res) => {
  try {
    const { code } = req.query;
    if (code === undefined) {
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "*",
      });
      return res.status(403).json({
        status: false,
        message: "We could not log you in with Google.",
      });
    }
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.json({
      success: true,
      token: await fetchGoogleProfileJwt(code),
    });
  } catch (error) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.status(error.code).json({ success: false, message: error.message });
  }
});

// Register new custom user
app.post(
  "/register",
  validator("body", NewCustomUserSchema),
  async (req, res) => {
    try {
      const { name, email, password, occupation, phone } = req.body;
      await registerNewCustomUser(name, email, password, occupation, phone);
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "*",
      });
      res.json({
        success: true,
        message: "User has been registered successfully.",
      });
    } catch (error) {
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "*",
      });
      res.status(error.code).json({ success: false, message: error.message });
    }
  }
);
// Login for custom user
app.post("/login", validator("body", UserLoginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.json({
      success: true,
      token: await customUserLogin(email, password),
    });
  } catch (error) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.status(error.code).json({ success: false, message: error.message });
  }
});
// Accept contact us query
app.post("/contactus", validator("body", ContactUsSchema), async (req, res) => {
  try {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    await storeContactUs(req.body);
    res.json({
      success: true,
      message: "Your query has been successfully stored in the database.",
    });
  } catch (error) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "*",
    });
    res.status(error.code).json({ success: false, message: error.message });
  }
});

// App export for Claudia
module.exports = app;

// Listening on Port for development
app.listen(4000, () => {
  console.log("Started on Port 4000");
});
