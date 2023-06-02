import Product from "../model/productModel.js";
import User from "../model/UserModel.js";

export const viewProducts = (req, res) => {
    // Retrieve the list of products from the database
    Product.find()
      .then((products) => {
        // Return the list of products as the response
        const response = {
          success: true,
          message: "Products retrieved successfully",
          data: {
            products: products,
          },
        };
        res.status(200).json(response);
      })
      .catch((error) => {
        console.error("Error retrieving products:", error);
        const response = {
          success: false,
          message: "An error occurred while retrieving products",
        };
        res.status(500).json(response);
      });
  };


  export const addToCart = (req, res) => {
    const { productId } = req.body;
    const { userId } = req.user;
  
    // Retrieve the product from the database based on productId
    Product.findById(productId)
      .then((product) => {
        if (!product) {
          // Product not found
          const response = {
            success: false,
            message: "Product not found",
          };
          return res.status(404).json(response);
        }
  
        // Retrieve the user from the database based on userId
        User.findById(userId)
          .then((user) => {
            if (!user) {
              // User not found
              const response = {
                success: false,
                message: "User not found",
              };
              return res.status(404).json(response);
            }
  
            // Add the product to the user's cart
            user.cart.push(product);
            user.save();
  
            // Return a response indicating the product was added to the cart
            const response = {
              success: true,
              message: "Product added to cart successfully",
              data: {
                product: product,
              },
            };
            res.status(200).json(response);
          })
          .catch((error) => {
            console.error("Error retrieving user:", error);
            const response = {
              success: false,
              message: "An error occurred while retrieving user",
            };
            res.status(500).json(response);
          });
      })
      .catch((error) => {
        console.error("Error retrieving product:", error);
        const response = {
          success: false,
          message: "An error occurred while retrieving product",
        };
        res.status(500).json(response);
      });
  };
  

  export const checkout = (req, res) => {
    const { userId } = req.user;
  
    // Retrieve the user's cart from the database
    User.findById(userId)
      .populate("cart") // Populate the cart field with the actual product objects
      .then((user) => {
        if (!user) {
          // User not found
          const response = {
            success: false,
            message: "User not found",
          };
          return res.status(404).json(response);
        }
  
        // Perform the necessary actions to complete the checkout process
        // For example, calculate the total price, process payment, update inventory, etc.
        const cart = user.cart;
        const totalPrice = calculateTotalPrice(cart);
  
        // Clear the user's cart after successful checkout
        user.cart = [];
        user.save();
  
        // Return a response indicating the successful checkout
        const response = {
          success: true,
          message: "Checkout successful",
          data: {
            totalPrice: totalPrice,
          },
        };
        res.status(200).json(response);
      })
      .catch((error) => {
        console.error("Error retrieving user's cart:", error);
        const response = {
          success: false,
          message: "An error occurred while retrieving user's cart",
        };
        res.status(500).json(response);
      });
  };