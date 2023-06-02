import jwt  from "jsonwebtoken";

export const superuserMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    const response = {
      success: false,
      message: 'No token provided',
    };
    return res.status(401).json(response);
  }

  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      const response = {
        success: false,
        message: 'Invalid token',
      };
      return res.status(401).json(response);
    }

    // Check if the user is a superuser
    if (decoded.role !== 'superuser') {
      const response = {
        success: false,
        message: 'Unauthorized access',
      };
      return res.status(403).json(response);
    }

    req.user = { id: decoded.userId, role: decoded.role };
    next();
  });
};

export const venderMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    const response = {
      success: false,
      message: 'No token provided',
    };
    return res.status(401).json(response);
  }

  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      const response = {
        success: false,
        message: 'Invalid token',
      };
      return res.status(401).json(response);
    }

    // Check if the user is a vendor
    if (decoded.role !== 'vendor' && decoded.role !== 'superuser') {
      const response = {
        success: false,
        message: 'Unauthorized access',
      };
      return res.status(403).json(response);
    }

    req.user = { id: decoded.userId, role: decoded.role };
    next();
  });
};

export const userMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    const response = {
      success: false,
      message: 'No token provided',
    };
    return res.status(401).json(response);
  }

  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      const response = {
        success: false,
        message: 'Invalid token',
      };
      return res.status(401).json(response);
    }

    // Check if the user is a customer
    if (decoded.role !== 'customer' && decoded.role !== 'superuser') {
      const response = {
        success: false,
        message: 'Unauthorized access',
      };
      return res.status(403).json(response);
    }

    req.user = { id: decoded.userId, role: decoded.role };
    next();
  });
};
