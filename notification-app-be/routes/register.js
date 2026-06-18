const axios = require("axios");

const register = async (req, res) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email: req.body.email,
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        githubUsername: req.body.githubUsername,
        rollNo: req.body.rollNo,
        accessCode: req.body.accessCode,
      }
    );

    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      success: false,
      message: error.response?.data || error.message,
    });
  }
};

module.exports = { register };