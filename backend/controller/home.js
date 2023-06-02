// Import necessary dependencies and models
// ...

export const superdashboard = (req, res) => {
    // Access the user's role from req.user
    const { role } = req.user;
  
    // Handle the superdashboard logic
    // ...
  
    // Return the response with the user's role
    const response = {
      success: true,
      message: 'Superdashboard',
      data: {
        role: role
      }
    };
    res.status(200).json(response);
  };
  
  export const venderdashboard = (req, res) => {
    // Access the user's role from req.user
    const { role } = req.user;
  
    // Handle the venderdashboard logic
    // ...
  
    // Return the response with the user's role
    const response = {
      success: true,
      message: 'Venderdashboard',
      data: {
        role: role
      }
    };
    res.status(200).json(response);
  };
  
  export const userDashboard = (req, res) => {
    // Access the user's role from req.user
    const { role } = req.user;
  
    // Handle the userDashboard logic
    // ...
  
    // Return the response with the user's role
    const response = {
      success: true,
      message: 'User Dashboard',
      data: {
        role: role
      }
    };
    res.status(200).json(response);
  };