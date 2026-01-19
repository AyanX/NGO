const { sign, verify } = require("jsonwebtoken");
const ACCESS_TOKEN_KEY= process.env.ACCESS_TOKEN_KEY

if (!ACCESS_TOKEN_KEY) throw new Error("ACCESS_TOKEN_KEY missing");

//generate access token
const accessToken = (adm) => {
  const username = adm;
  const signAccessToken = sign(
    { username },
    ACCESS_TOKEN_KEY,
    { expiresIn: "60m" }
  );
  return signAccessToken;
};


//verify access token
const verifyToken = (req, res, next) => {
  const cookie = req.cookies.access;
  if (!cookie) {
    console.log("no cookie found");
    return res.status(403).send({ message: "Log in first" });
  }
  //cookie found
  try {
    verify(cookie, ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).send({ message: " invalid token" });
      }
      //valid token
      return next();
    });
  } catch (e) {
    console.log("error verifying token:", e);
    return res
      .status(403)
      .send({ message: "an error occured validating the access token" });
  }
};

module.exports = {
  accessToken,
  verifyToken
};