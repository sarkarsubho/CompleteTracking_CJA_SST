import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductsDetails = () => {
  const { id } = useParams();
  let product = (JSON.parse(localStorage.getItem("products")) || []).find(
    (e) => e.id == id,
  );

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    quantity: 1,
    color: "",
    size: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "credit-card",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Default product data
  const defaultProduct = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    image: "https://via.placeholder.com/300",
    colors: ["Black", "Silver", "Blue"],
    sizes: ["One Size"],
    ...product,
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    //the datalayer should only pushed once, when user starts filling the form.

    window.dataLayer.push({
      event: "product_buynow_form_started",
      product_name: defaultProduct.name,
      product_price: defaultProduct.price,
      product_id: defaultProduct.id,
    });
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.quantity < 1)
      newErrors.quantity = "Quantity must be at least 1";
    if (!formData.color && defaultProduct.colors.length > 0) {
      newErrors.color = "Please select a color";
    }
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          quantity: 1,
          color: "",
          size: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          zipCode: "",
          country: "",
          paymentMethod: "credit-card",
          agreeTerms: false,
        });
        setSubmitSuccess(false);
        window.dataLayer.push({
          event: "product_buynow_form_submitted",
          product_name: defaultProduct.name,
          product_price: defaultProduct.price,
          product_id: defaultProduct.id,
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      window.dataLayer.push({
        event: "product_buynow_form_submission_failed",
        product_name: defaultProduct.name,
        product_price: defaultProduct.price,
        product_id: defaultProduct.id,
        error_message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = (defaultProduct.price * formData.quantity).toFixed(2);

  useEffect(() => {
    window.dataLayer.push({
      event: "product_buynow_form_opened",
      product_name: defaultProduct.name,
      product_price: defaultProduct.price,
      product_id: defaultProduct.id,
    });
  }, []);

  return (
    <div>
      <div
        key={product.id}
        // onClick={() => navigate(`/products/${product.id}`)}
        className="flex flex-col md:flex-row w-[95vw] md:w-[70vw] m-auto product-cart dark:bg-slate-700  overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        {/* Product Image */}
        <div className="relativeh-auto md:h-[90vh] w-full md:w-[50%]   bg-gray-200 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold  mb-2">{product.name}</h3>
          <p className="text-sm mb-4">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">★</span>
            <span className="text-sm element-600 dark:element-300 ml-2 duration-300">
              {product.rating} / 5
            </span>
          </div>

          {/* Price and Button */}
          <div className="flex flex-col flex-start gap-8">
            <span className="text-2xl font-bold ">${product.price}</span>

            {!showForm && (
              <div className="flex flex-row justify-end w-full gap-2">
                <button
                  // onClick={() => addToCart(product)}
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <FaCartPlus size={18} />
                  Add to cart
                </button>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black text-sm px-5 rounded-lg transition-colors duration-200   flex flex-col"
                >
                  <span>Buy now</span>
                  <span className="text-[10px] mt-[-3px]">
                    at ${product.price}{" "}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* // create a form for details */}

          {/* <div>
            <form>
              <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="address"></label>
                <textarea
                  type="text"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div>
                <label htmlFor="name"></label>
                <input type="number" id="name" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
            </form>
          </div> */}
          {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8"> */}
          {/* {showForm && ( */}

          {/* overlay close button its works for z index is lower */}
          <div
            className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-xs transition-opacity duration-300       
              ${
                showForm
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            onClick={() => setShowForm(false)}
          />
          <div
            // className="max-w-3xl rounded mx-auto  top-20 bg-gray-600"
            className={`fixed top-36 left-0 h-[calc(100vh-9rem)] w-full md:w-[70%] m-auto overflow-y-auto right-0 z-50 rounded-t-xl bg-gray-700 shadow-2xl transition-transform duration-500 ease-in-out ${
              showForm ? "translate-y-0" : "translate-y-full"
            }`}
            // className={`fixed bottom-0 left-0  overflow-scroll right-0 z-50 rounded-t-3xl bg-gray-700 shadow-2xl transition-transform duration-300 ease-in-out ${
            //   showForm ? "translate-y-0" : "translate-y-full"
            // }`}
          >
            <h2 className="text-center text-3xl pt-2 underline">
              Enter Details to Continue.
            </h2>
            {/* Success Message */}
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-green-800 font-medium">
                  Order placed successfully! Check your email for confirmation.
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="shadow-lg overflow-hidden">
              {/* Product Options Section */}
              <div className="border-b border-gray-200 p-6">
                <h3 className="text-lg font-semibold element-900 mb-6">
                  Product Options
                </h3>

                <div className="space-y-6">
                  {/* Quantity */}
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium element-700 mb-2"
                    >
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.quantity
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.quantity && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.quantity}
                      </p>
                    )}
                  </div>

                  {/* Color */}
                  {defaultProduct.colors.length > 0 && (
                    <div>
                      <label
                        htmlFor="color"
                        className="block text-sm font-medium  mb-2"
                      >
                        Color <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                          errors.color
                            ? "border-red-500bg -red-50"
                            : "border-gray-300"
                        }`}
                      >
                        <option value="" className="dark:text-black">
                          Select a color
                        </option>
                        {defaultProduct.colors.map((color) => (
                          <option
                            key={color}
                            value={color}
                            className="dark:text-black"
                          >
                            {color}
                          </option>
                        ))}
                      </select>
                      {errors.color && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.color}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Size */}
                  {defaultProduct.sizes.length > 0 && (
                    <div>
                      <label
                        htmlFor="size"
                        className="block text-sm font-medium element-700 mb-2"
                      >
                        Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      >
                        <option value="" className="dark:text-black">
                          Select a size
                        </option>
                        {defaultProduct.sizes.map((size) => (
                          <option
                            key={size}
                            value={size}
                            className="dark:text-black"
                          >
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="border-b border-gray-200 p-6">
                <h3 className="text-lg font-semibold element-900 mb-6">
                  Personal Information
                </h3>

                <div className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium element-700 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                          errors.firstName
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium element-700 mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                          errors.lastName
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium element-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium element-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.phone
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address Section */}
              <div className="border-b border-gray-200 p-6">
                <h3 className="text-lg font-semibold element-900 mb-6">
                  Shipping Address
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium element-700 mb-2"
                    >
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.address
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  {/* City & Zip Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium element-700 mb-2"
                      >
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                          errors.city
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium element-700 mb-2"
                      >
                        Zip Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                          errors.zipCode
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium element-700 mb-2"
                    >
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition ${
                        errors.country
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="border-b border-gray-200 p-6">
                <h3 className="text-lg font-semibold element-900 mb-6">
                  Payment Method
                </h3>

                <div className="space-y-4">
                  {[
                    { value: "credit-card", label: "Credit Card" },
                    { value: "paypal", label: "PayPal" },
                    { value: "bank-transfer", label: "Bank Transfer" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600 cursor-pointer"
                      />
                      <span className="ml-3 element-700 font-medium">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="border-b border-gray-200 p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className={`w-5 h-5 mt-0.5 rounded cursor-pointer ${
                      errors.agreeTerms
                        ? "border-red-500 text-red-600"
                        : "border-gray-300 text-green-600"
                    }`}
                  />
                  <span className="element-700">
                    I agree to the Terms & Conditions{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.agreeTerms}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="p-6 bg-gray-50 flex flex-col md:flex-row gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white text-lg transition duration-200 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 active:bg-green-800"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Buy Now - $${totalPrice}`
                  )}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-red-600 w-full rounded-lg text-xl text-semibold py-3 cursor-pointer "
                >
                  Close
                </button>
              </div>
            </form>
          </div>

          {/* )} */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProductsDetails;
