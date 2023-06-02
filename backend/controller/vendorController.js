import Product from "../model/productModel.js";

// Add a product
export const addProduct = (req, res) => {
  const { name, price, description } = req.body;
  const { id } = req.user;

  // Create a new product instance
  const newProduct = new Product({
    name,
    price,
    description,
    user: id, // Associate the product with the vendor (user)
  });

  // Save the new product to the database
  newProduct
    .save()
    .then((savedProduct) => {
      const response = {
        success: true,
        message: "Product added successfully",
        data: {
          product: savedProduct,
        },
      };
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error adding product:", error);
      const response = {
        success: false,
        message: "An error occurred while adding the product",
      };
      res.status(500).json(response);
    });
};

// Update a product
export const updateProduct = (req, res) => {
  const { productId } = req.params;
  const updateFields = req.body;
  const { id } = req.user;

  // Find the product by ID and update its properties
  Product.findOneAndUpdate(
    { _id: productId, user: id }, // Only allow updating products associated with the vendor (user)
    updateFields,
    { new: true }
  )
    .then((updatedProduct) => {
      if (!updatedProduct) {
        // Product not found or not associated with the vendor
        const response = {
          success: false,
          message: "Product not found or not associated with the vendor",
        };
        return res.status(404).json(response);
      }

      const response = {
        success: true,
        message: "Product updated successfully",
        data: {
          product: updatedProduct,
        },
      };
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error updating product:", error);
      const response = {
        success: false,
        message: "An error occurred while updating the product",
      };
      res.status(500).json(response);
    });
};

// Delete a product
export const deleteProduct = (req, res) => {
  const { productId } = req.params;
  const { userId } = req.user;

  // Find the product by ID and delete it
  Product.findOneAndDelete({ _id: productId, user: userId })
    .then((deletedProduct) => {
      if (!deletedProduct) {
        // Product not found or not associated with the vendor
        const response = {
          success: false,
          message: "Product not found or not associated with the vendor",
        };
        return res.status(404).json(response);
      }

      const response = {
        success: true,
        message: "Product deleted successfully",
      };
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
      const response = {
        success: false,
        message: "An error occurred while deleting the product",
      };
      res.status(500).json(response);
    });
};

// Manage inventory
export const manageInventory = (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const { userId } = req.user;

  // Find the product by ID and update its inventory
  Product.findOneAndUpdate(
    { _id: productId, user: userId }, // Only allow managing inventory of products associated with the vendor (user)
    { inventory: quantity },
    { new: true }
  )
    .then((updatedProduct) => {
      if (!updatedProduct) {
        // Product not found or not associated with the vendor
        const response = {
          success: false,
          message: "Product not found or not associated with the vendor",
        };
        return res.status(404).json(response);
      }

      const response = {
        success: true,
        message: "Inventory updated successfully",
        data: {
          product: updatedProduct,
        },
      };
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error managing inventory:", error);
      const response = {
        success: false,
        message: "An error occurred while managing the inventory",
      };
      res.status(500).json(response);
    });
};
