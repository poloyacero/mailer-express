const honeypot = async (req, res, next) => {
  const { honeypot } = req.body;
  try {
    if(honeypot === '') {
      return next();
    }else{
      return res.status(400).json({
        success: false,
        message: 'Email not sent.'
      })
    }
  }catch(err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const origin = async (req, res, next) => {
  const allowed = ['http://stouge.dk', 'http://www.nolimitsolution.dk']
  const origin = req.headers.origin;
  try {
    if(allowed.includes(origin)) {
      return next();
    }else{
      return res.status(400).json({
        success: false,
        message: 'Email not sent.'
      })
    }
  }catch(err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

module.exports = {
  honeypot,
  origin
}