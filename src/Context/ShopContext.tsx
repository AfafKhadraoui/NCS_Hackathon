// import React, { createContext, useState } from "react";
import products from "../Components/Assets/products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < 300; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };
// const makeEmpty = (cart) => {
//   for (let i = 0; i < 300; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // New modal-related state
//   const [modalImage, setModalImage] = useState(null);
//   const [modalMessage, setModalMessage] = useState("");
//   const [modalBtn, setModalBtn] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState(""); // 'cart' or 'wishlist'

//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     // Optional: Open cart modal when item is added
//     openModal(itemId, "cart");
//   };

//   const removeFromToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1,
//     }));
//   };

//   const deleteFromToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: 0,
//     }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;

//     if (!products || !Array.isArray(products) || products.length === 0) {
//       console.warn("Products array is empty or undefined");
//       return 0;
//     }

//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = products.find(
//           (product) => product.product_id === Number(item)
//         );

//         if (itemInfo && itemInfo.price) {
//           totalAmount += itemInfo.price * cartItems[item];
//         } else {
//           console.warn(`Product with ID ${item} not found or has no price`);
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       cartItems[item] > 0 && (totalItem += cartItems[item]);
//     }
//     return totalItem;
//   };

//   const addToWishlist = async (id) => {
//     const product = products.find((product) => product.product_id === id);

//     if (!wishlistItems.some((item) => item.product_id === id)) {
//       setWishlistItems((prev) => [...prev, product]);
//       // Optional: Open wishlist modal when item is added
//       openModal(id, "wishlist");
//     }
//   };

//   const RemoveFromWishlist = async (id) => {
//     setWishlistItems((prev) =>
//       prev.filter((product) => product.product_id !== id)
//     );
//   };

//   // New modal-related methods
//   const openModal = (itemId, type) => {
//     const product = products.find((product) => product.product_id === itemId);

//     if (product) {
//       setModalImage(product.image);
//       setModalMessage(
//         type === "cart"
//           ? "Item added to cart successfully!"
//           : "Item added to wishlist successfully!"
//       );
//       setModalBtn(type);
//       setModalType(type);
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage(null);
//     setModalMessage("");
//     setModalBtn("");
//     setModalType("");
//   };

//   const contextValue = {
//     products,
//     cartItems,
//     addToCart,
//     removeFromToCart,
//     getTotalCartAmount,
//     deleteFromToCart,
//     getTotalCartItems,
//     wishlistItems,
//     addToWishlist,
//     RemoveFromWishlist,
//     // Modal-related context values
//     modalImage,
//     modalMessage,
//     modalBtn,
//     isModalOpen,
//     modalType,
//     openModal,
//     closeModal,
//     makeEmpty
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
};

const makeEmpty = (cart) => {
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Fallback image URL in case the product image fails to load
const fallbackImageUrl = "../"; // Update this path

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null); // Add this line

  // Modal state
  const [modalImage, setModalImage] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [modalBtn, setModalBtn] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // Function to handle image loading errors
  const handleImageError = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === productId
          ? { ...product, image: fallbackImageUrl }
          : product
      )
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost/Train_Gain/php/get_products.php"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.success) {
          // Log for debugging
          console.log("Fetched products:", data);

          // Add image error handling to each product
          const productsWithErrorHandling = data.products.map((product) => ({
            ...product,
            onImageError: () => handleImageError(product.product_id),
          }));

          setProducts(productsWithErrorHandling);
        } else {
          throw new Error(data.message || "Failed to fetch products");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Rest of your existing context code remains the same
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    openModal(itemId, "cart");
  };

  const removeFromToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const deleteFromToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return 0;
    }

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(
          (product) => product.product_id === Number(item)
        );

        if (itemInfo && itemInfo.price) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      cartItems[item] > 0 && (totalItem += cartItems[item]);
    }
    return totalItem;
  };

  const addToWishlist = async (id) => {
    const product = products.find((product) => product.product_id === id);

    if (!wishlistItems.some((item) => item.product_id === id)) {
      setWishlistItems((prev) => [...prev, product]);
      // Optional: Open wishlist modal when item is added
      openModal(id, "wishlist");
    }
  };

  const RemoveFromWishlist = async (id) => {
    setWishlistItems((prev) =>
      prev.filter((product) => product.product_id !== id)
    );
  };
  // const addToWishlist = async (id, productType) => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost/Train_Gain/php/wishlist.php?user_id=" + userId,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           product_id: id,
  //           product_type: productType, // Add this
  //         }),
  //       }
  //     );
  //     const data = await response.json();

  //     if (data.success) {
  //       const product = products.find((product) => product.product_id === id);
  //       setWishlistItems((prev) => [
  //         ...prev,
  //         { ...product, product_type: productType },
  //       ]);
  //       openModal(id, "wishlist");
  //     }
  //   } catch (error) {
  //     console.error("Error adding to wishlist:", error);
  //   }
  // };

  // const RemoveFromWishlist = async (id, productType) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost/Train_Gain/php/wishlist.php?user_id=${userId}&product_id=${id}&product_type=${productType}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     const data = await response.json();

  //     if (data.success) {
  //       setWishlistItems((prev) =>
  //         prev.filter((product) => product.product_id !== id)
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error removing from wishlist:", error);
  //   }
  // };
  const setCurrentUser = (id) => {
    setUserId(id);
  };

  // Update your wishlist functions to use the userId from state
  // const addToWishlist = async (id, productType) => {
  //   if (!userId) {
  //     console.error("No user logged in");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       `http://localhost/Train_Gain/php/wishlist_operations.php?user_id=${userId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           product_id: id,
  //           product_type: productType,
  //         }),
  //       }
  //     );
  //     const data = await response.json();

  //     if (data.success) {
  //       const product = products.find((product) => product.product_id === id);
  //       setWishlistItems((prev) => [
  //         ...prev,
  //         { ...product, product_type: productType },
  //       ]);
  //       openModal(id, "wishlist");
  //     }
  //   } catch (error) {
  //     console.error("Error adding to wishlist:", error);
  //   }
  // };

  // const RemoveFromWishlist = async (id, productType) => {
  //   if (!userId) {
  //     console.error("No user logged in");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       `http://localhost/Train_Gain/php/wishlist_operations.php?user_id=${userId}&product_id=${id}&product_type=${productType}`,
  //       { method: "DELETE" }
  //     );
  //     const data = await response.json();

  //     if (data.success) {
  //       setWishlistItems((prev) =>
  //         prev.filter((product) => product.product_id !== id)
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error removing from wishlist:", error);
  //   }
  // };
  // New modal-related methods
  const openModal = (itemId, type) => {
    const product = products.find((product) => product.product_id === itemId);

    if (product) {
      setModalImage(product.image);
      setModalMessage(
        type === "cart"
          ? "Item added to cart successfully!"
          : "Item added to wishlist successfully!"
      );
      setModalBtn(type);
      setModalType(type);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalMessage("");
    setModalBtn("");
    setModalType("");
  };
  const contextValue = {
    products,
    isLoading,
    error,
    cartItems,
    handleImageError, // Make image error handling available to consumers

    addToCart,
    removeFromToCart,
    getTotalCartAmount,
    deleteFromToCart,
    getTotalCartItems,
    wishlistItems,
    addToWishlist,
    RemoveFromWishlist,
    modalImage,
    modalMessage,
    modalBtn,
    isModalOpen,
    modalType,
    openModal,
    closeModal,
    userId,
    makeEmpty,
  };

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
