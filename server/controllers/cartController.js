import User from "../models/User.js";
import Product from "../models/Product.js"; // Add this import

// Update User CartData : /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.user.id;

    // Optional: Validate that products in cartItems still exist
    if (cartItems && Object.keys(cartItems).length > 0) {
      const productIds = Object.keys(cartItems);
      const existingProducts = await Product.find({
        _id: { $in: productIds },
      }).select("_id");

      const existingProductIds = existingProducts.map((p) => p._id.toString());

      // Filter out deleted products from cartItems
      const validCartItems = {};
      for (const [productId, quantity] of Object.entries(cartItems)) {
        if (existingProductIds.includes(productId)) {
          validCartItems[productId] = quantity;
        }
      }

      await User.findByIdAndUpdate(userId, { cartItems: validCartItems });
    } else {
      await User.findByIdAndUpdate(userId, { cartItems });
    }

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
