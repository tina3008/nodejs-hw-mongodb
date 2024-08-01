import {
  registerUser,
  loginUser,
  logoutUser,
  refreshSession,

} from '../services/auth.js';
import { ONE_DAY } from '../constants/index.js';

async function register(req, res) {
  const registeredUser = await registerUser(req.body);

  res.status(200).json({
    status: 200,
    message: 'User registered',
    data: registeredUser,
  });
}

async function login(req, res) {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

res.json({
  status: 200,
  message: 'Successfully logged in an user!',
  data: {
    accessToken: session.accessToken,
  },
});
};

async function logout(req, res) {
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  };

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.status(204).send();
};

const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
};

export const refreshSessionController = async (req, res) => {
  const session = await refreshSession({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export { register, login, logout };
