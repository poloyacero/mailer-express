require('dotenv').config();
const { stougeMailService, nlsMailService } = require('../services/mailService')

const mailService = {
  NLS: process.env.NLS_MAIL_ID,
  STOUGE: process.env.STOUGE_MAIL_ID
}

const nls = async (req, res) => {
  try {
    await nlsMailService(req.body);
    return res.status(200).json({
      success: true,
      message: 'Email sent'
    })
  }catch(err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const stouge = async (req, res) => {
  try {
    await stougeMailService(req.body);
    return res.status(200).json({
      success: true,
      message: 'Email sent'
    })
  }catch(err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const sendEmail = async (req, res) => {
  const { mailID } = req.body;
  try {
    switch(mailID) {
      case mailService.NLS:
        nls(req, res)
        break;
      case mailService.STOUGE:
        stouge(req, res)
        break;
      default:
        throw new Error('Mail id not valid')
    }
  }catch(err) {
    return res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

module.exports = {
  sendEmail
}