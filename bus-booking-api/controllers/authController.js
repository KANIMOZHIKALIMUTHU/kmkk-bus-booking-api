const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const generateToken = (user, isRefresh = false) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    isRefresh ? process.env.REFRESH_SECRET : process.env.JWT_SECRET,
    { expiresIn: isRefresh ? '7d' : '15m' }
  );
};

exports.register = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: 'User registered' });
};

exports.login = async (req, res) => {
  console.log('BODY:', req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const accessToken = generateToken(user);
  const refreshToken = generateToken(user, true);

  res.json({ accessToken, refreshToken });
};

exports.refreshToken = (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.REFRESH_SECRET);
    const accessToken = generateToken(decoded);
    res.json({ accessToken });
  } catch {
    res.status(403).json({ message: 'Invalid refresh token' });
  }
};
