import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { IoMdArrowRoundBack, IoIosCheckmarkCircle, IoIosArrowBack, IoIosArrowForward, IoMdBarcode, IoIosRadioButtonOff, IoIosClose } from "react-icons/io";
import { MdImageSearch } from "react-icons/md";
import { BsStars } from "react-icons/bs";

import './AddProduct.css';

function AddProduct() {
  const [currentStep, setCurrentStep] = useState(1);

  // Toggle for Advance section
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Toggle for Price Include GST
  const [isToggled2, setIsToggled2] = useState(false);
  const handleToggle2 = () => {
    setIsToggled2(!isToggled2);
  };

  // Toggle states for variant buttons
  const variantButtons = useMemo(() => [
    "Color",
    "Size",
    "Expire",
    "Material",
    "Model",
    "Weight",
    "Skin Type",
    "Packing Type",
    "Flavour",
    "Gender",
  ], []);
  const [variantToggles, setVariantToggles] = useState(
    variantButtons.reduce((acc, button) => ({ ...acc, [button]: false }), {})
  );

  // Set Color as active by default
  useEffect(() => {
    if (currentStep === 4) {
      setVariantToggles(
        variantButtons.reduce(
          (acc, button) => ({ ...acc, [button]: button === "Color" }),
          {}
        )
      );
    }
  }, [currentStep, variantButtons]);

  // Toggle handler for variant buttons
  const toggleVariantContent = (button) => {
    setVariantToggles(
      variantButtons.reduce(
        (acc, btn) => ({ ...acc, [btn]: btn === button ? !variantToggles[button] : false }),
        {}
      )
    );
  };

  // Navigation handlers - next
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Navigation handlers - previous
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Rendering steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-container">
            <div>

              {/* General Information heading */}
              <div className="heading-container">
                <h1 className="heading">
                  <IoMdArrowRoundBack className="back-icon" />
                  Add New Products
                </h1>
              </div>

              {/* Tools */}
              <div className="tools-container">

                {/* Progress bar */}
                <div className="progress-bar">
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step">
                    <IoIosCheckmarkCircle className="progress-icon" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step">
                    <IoIosCheckmarkCircle className="progress-icon" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step">
                    <IoIosCheckmarkCircle className="progress-icon" />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="progress-details">
                  <b>General Information</b>
                  <p className="progress-description">
                    Basic info + Categories + Supplier + Inventory + Product Type
                  </p>
                </div>

                {/* Form */}
                <div className="form1-container">
                  <div className="form1-box">

                    {/* Item Type */}
                    <div className="form-group">
                      <p><b>Item Type</b></p>
                      <p className="info-icon">?</p>
                    </div>

                    {/* items button */}
                    <div className="radio-group">
                      <div>
                        <input type="radio" id="goods" name="goods" value="goods" /> Goods
                      </div>
                      <div>
                        <input type="radio" id="services" name="goods" value="services" /> Services
                      </div>
                    </div>

                    {/* Product Name and SKU */}
                    <div className="form1-row">
                      <div className="form-col">
                        <p><b>Product Name</b></p>
                        <input
                          type="text"
                          placeholder="Enter New Product name"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <p><b>SKU</b></p>
                        <input
                          type="text"
                          placeholder="Enter SKU"
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Barcode */}
                    <div className="form1-row">
                      <div>
                        <p><b>Barcode</b></p>
                        <div className="input-with-icon">
                          <input
                            type="text"
                            placeholder="Enter 12 Digit Code"
                            className="input-field barcode"
                          />
                          <IoMdBarcode className="icon" />
                        </div>
                      </div>
                      <div>
                        <div className="generate-barcode">
                          <p className="generate-label">Generate Barcode</p>
                        </div>
                        <div className="input-with-icon">
                          <input
                            type="text"
                            placeholder="Enter 12 Digit Code"
                            className="input-field barcode"
                          />
                          <IoMdBarcode className="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="form1-row">
                      <div>
                        <p><b>Category</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                      <div>
                        <p><b>Sub Category</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Brand - manufacturer */}
                    <div className="form1-row">
                      <div>
                        <p><b>Brand/Manufacturer</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Product Type */}
                    <div className="form-group product-type">
                      <p><b>Product Type</b></p>
                      <p className="info-icon">?</p>
                    </div>

                    {/* product button */}
                    <div className="radio-group">
                      <div>
                        <input type="radio" id="simple" name="type" value="simple" /> Simple
                      </div>
                      <div>
                        <input type="radio" id="variant" name="type" value="variant" /> Variant
                      </div>
                      <div>
                        <input type="radio" id="bundle" name="type" value="bundle" /> Bundle
                      </div>
                    </div>

                    {/* Select Supplier */}
                    <div className="form1-row">
                      <div>
                        <p><b>Select Supplier</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                      <div>
                        <p><b>Supplier SKU</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Warehouse */}
                    <div className="form1-row">
                      <div>
                        <p><b>Warehouse/Location</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Advance */}
                    <div className="advance-section">

                      {/* advance toggling */}
                      <div className="toggle-group">
                        <p><b>Advance</b></p>
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            className="toggle-input"
                            checked={isToggled}
                            onChange={handleToggle}
                          />
                          <div className="toggle-switch">
                            <div
                              className={`toggle-knob ${isToggled ? "toggled" : ""}`}
                            ></div>
                          </div>
                        </label>
                      </div>

                      {isToggled && (
                        <div className="advance-content">
                          {/* Lead Time */}
                          <div className="form-row">
                            <div>
                              <div className="label-group">
                                <p><b>Lead Time</b></p>
                                <p className="info-icon">?</p>
                              </div>
                              <select
                                name="category"
                                id="category"
                                className="select-field"
                              >
                                <option value="">Select Category</option>
                              </select>
                            </div>
                            <div>
                              <div className="label-group">
                                <p><b>Recorder Level</b></p>
                                <p className="info-icon">?</p>
                              </div>
                              <select
                                name="category"
                                id="category"
                                className="select-field"
                              >
                                <option value="">Select Category</option>
                              </select>
                            </div>
                          </div>

                          {/* Initial Stock */}
                          <div className="form-row stock-section">
                            {/* initial stock quantity*/}
                            <div>
                              <p><b>Initial Stock Quantity</b></p>
                              <select
                                name="category"
                                id="category"
                                className="select-field"
                              >
                                <option value="">Select Category</option>
                              </select>
                            </div>

                            {/* Track */}
                            <div className="track-section">
                              <div className="label-group track">
                                <p><b>Track</b></p>
                                <p className="info-icon">?</p>
                              </div>
                              <div className="radio-group track">
                                <div>
                                  <input type="radio" id="serialno" name="track" value="serialno"/> Serial No.
                                </div>
                                <div>
                                  <input type="radio" id="batchno" name="track" value="batchno"/> Batch No.
                                </div>
                              </div>
                            </div>

                            {/* Status */}
                            <div className="status-section">
                              <div className="label-group status">
                                <p><b>Status</b></p>
                                <p className="info-icon">?</p>
                              </div>
                              <div className="radio-group status">
                                <div>
                                  <input type="checkbox" id="returnable" name="status" value="returnable"/> Returnable
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-container">
            <div>

              {/* Pricing & Tax heading */}
              <div className="heading-container">
                <h1 className="heading">
                  <IoMdArrowRoundBack className="back-icon" />
                  Pricing & Tax
                </h1>
              </div>

              {/* Tools */}
              <div className="tools-container">

                {/* Progress bar */}
                <div className="progress-bar">
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step active">
                    <IoIosRadioButtonOff className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step">
                    <IoIosCheckmarkCircle className="progress-icon" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step">
                    <IoIosCheckmarkCircle className="progress-icon" />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="progress-details pricing">
                  <b>Pricing & Tax</b>
                  <p className="progress-description">All Price and tax-related</p>
                </div>

                {/* Form */}
                <div className="form1-container">
                  <div className="form1-box">

                    {/* Purchase Price */}
                    <br></br>
                    <div className="form1-row">
                      <div>
                        <p><b>Purchase Price</b></p>
                        <input
                          type="text"
                          placeholder="Enter New Product name"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <p><b>Selling Price</b></p>
                        <input
                          type="text"
                          placeholder="Enter SKU"
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Wholesale */}
                    <div className="form1-row">
                      <div>
                        <p><b>Wholesale Price / Bulk Price</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="form1-row">
                      <div>
                        <p><b>Quantity</b></p>
                        <input
                          type="text"
                          placeholder="In no."
                          className="input-field"
                        />
                      </div>
                      <div>
                        <p><b>Unit</b></p>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Discount Price */}
                    <div className="form1-row">
                      <div>
                        <div className="label-group">
                          <p><b>Discount Price</b></p>
                          <p className="info-icon">?</p>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter New Product name"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <div className="label-group">
                          <p><b>Discount Period</b></p>
                          <p className="info-icon">?</p>
                        </div>
                        <div className="date-group">
                          <input
                            type="date"
                            placeholder="From"
                            className="input-field date-from"
                          />
                          <input
                            type="date"
                            placeholder="To"
                            className="input-field date-to"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tax Rate */}
                    <div className="form1-row">
                      <div>
                        <div className="label-group">
                          <p><b>Tax Rate</b></p>
                          <p className="info-icon">?</p>
                        </div>
                        <select
                          name="category"
                          id="category"
                          className="select-field"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* HSN / SAC */}
                    <div className="form1-row">
                      <div>
                        <div className="label-group">
                          <p><b>HSN / SAC</b></p>
                          <p className="info-icon">?</p>
                        </div>
                        <select
                          name="category"
                          id="category"
                          className="select-field hsn-sac"
                        >
                          <option value="" className="placeholder-option">
                            HSN Code
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Price Include GST */}
                    <div className="advance-section">
                      <div className="toggle-group">
                        <p><b>Price Include GST</b></p>
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            className="toggle-input"
                            checked={isToggled2}
                            onChange={handleToggle2}
                          />
                          <div className="toggle-switch">
                            <div
                              className={`toggle-knob ${isToggled2 ? "toggled" : ""}`}
                            ></div>
                          </div>
                        </label>
                      </div>

                      {isToggled2 && (
                        <div className="form-row">
                          <div>
                            <div className="label-group">
                              <p><b>GST Rate</b></p>
                              <p className="info-icon">?</p>
                            </div>
                            <select
                              name="category"
                              id="category"
                              className="select-field hsn-sac"
                            >
                              <option value="" className="placeholder-option">
                                0%
                              </option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-container">
            <div>

              {/* Description & Media heading */}
              <div className="heading-container">
                <h1 className="heading">
                  <IoMdArrowRoundBack className="back-icon" />
                  Description & Media
                </h1>
              </div>

              {/* Tools */}
              <div className="tools-container">

                {/* Progress bar */}
                <div className="progress-bar">
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step active">
                    <IoIosRadioButtonOff className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step">
                    <IoIosCheckmarkCircle className="progress-icon" />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="progress-details description">
                  <b>Description & Media</b>
                  <p className="progress-description">Image + Description + Documents + SEO</p>
                </div>

                {/* Form top */}
                <div className="form1-container">
                  <div className="form1-box description-box">

                    {/* Description box */}
                    <div>
                      <br></br>
                      <div className="label-group">
                        <p><b>Description</b></p>
                        <p className="info-icon">?</p>
                      </div>
                      <textarea
                        placeholder="Write description about products..."
                        className="textarea-field"
                      />
                    </div>

                    {/* Image box */}
                    <div className="image-upload">
                      <div className="image-upload-icon">
                        <MdImageSearch className="upload-icon" />
                      </div>
                      <div className="image-upload-input">
                        <label>Drag your image here, or </label>
                        <input type="file" placeholder="browse" className="file-input" />
                      </div>
                      <div className="image-upload-support">
                        <label className="support-text">Support JPEG, PNG, JPG</label>
                      </div>
                    </div>

                    <br></br>

                  </div>
                </div>

                {/* Form bottom */}
                <div className="form1-container">
                  <div className="form1-box seo-box">

                    {/*SEO Meta Title */}
                    <div className="form1-row">
                      <div>
                        <div className="label-group">
                          <p><b>SEO Meta Title</b></p>
                          <p className="info-icon">?</p>
                        </div>
                        <input
                          type="text"
                          placeholder="Add Title"
                          className="input-field seo-title"
                        />
                      </div>
                      <div>
                        <div className="label-group">
                          <p><b>SEO Meta Description</b></p>
                          <p className="info-icon">?</p>
                        </div>
                        <input
                          type="text"
                          placeholder="Write description"
                          className="input-field seo-description"
                        />
                      </div>
                    </div>

                    {/* AI Keywords */}
                    <div className="ai-keywords">
                      <div className="keywords-header">
                        <BsStars className="star-icon" />
                        <p>AI Keywords</p>
                      </div>
                      <div className="keywords-description">
                        <label className="keywords-info">
                          Based on your input data we've identified 5 keywords that may be a good fit
                          for your product.
                        </label>
                        <br></br><br></br>
                      </div>

                      <div className="keywords-list">
                        <div>
                          <div className="keyword-item">
                            <IoIosCheckmarkCircle /> Fittings <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="keyword-item active">
                            <IoIosCheckmarkCircle className="keyword-icon" /> Hinges
                            <IoIosClose className="keyword-icon" />
                          </div>
                        </div>
                        <div>
                          <div className="keyword-item construction">
                            <IoIosCheckmarkCircle /> Construction hardware <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="keyword-item door-windows">
                            <IoIosCheckmarkCircle /> Door and Windows <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="keyword-item">
                            <IoIosCheckmarkCircle /> Buildings <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="keyword-item">
                            <IoIosCheckmarkCircle /> Blocks <IoIosClose />
                          </div>
                        </div>
                      </div>
                      
                      <div className="keywords-input">
                        <input
                          type="text"
                          placeholder="Type Keywords"
                          className="input-field keywords"
                        />
                      </div>
                    </div>

                    <br></br>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-container">
            <div>
              {/* Variants Heading */}
              <div className="heading-container">
                <h1 className="heading">
                  <IoMdArrowRoundBack className="back-icon" />
                  Variants
                </h1>
              </div>

              {/* Tools */}
              <div className="tools-container">
                {/* Progress bar */}
                <div className="progress-bar">
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step active">
                    <IoIosCheckmarkCircle className="progress-icon active" />
                    <button className="progress-line"></button>
                  </div>
                  <div className="progress-step active">
                    <IoIosRadioButtonOff className="progress-icon active" />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="progress-details variants">
                  <b>Variants</b>
                  <p className="progress-description">Product Type & Variants</p>
                </div>

                {/* Form */}
                <div className="form1-container">
                  {/* Buttons */}
                  <div className="variant-buttons">
                    {variantButtons.map((button, index) => (
                      <button
                        key={button}
                        className={`variant-button ${index === 0 ? "first" : ""} ${
                          variantToggles[button] ? "active" : ""
                        }`}
                        onClick={() => toggleVariantContent(button)}
                      >
                        {button}
                      </button>
                    ))}
                    <button className="variant-button add-more">
                      <p className="add-more-text">+ Add More</p>
                    </button>
                  </div>

                  {/* Button Content */}
                  <div className="variant-content">
                    {variantButtons.map((button) =>
                      variantToggles[button] ? (
                        <div key={button} className="variant-section">
                          Select {button}
                          <div className="variant-select">
                            <select
                              name={`variant-${button.toLowerCase()}`}
                              id={`variant-${button.toLowerCase()}`}
                              className="select-field full-width"
                            >
                              <option value="">Select {button}</option>
                            </select>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* rendering steps */}
      {renderStep()}

      {/* Buttons */}
      <div className="button-bar">
        {currentStep === 1 ? (
          <Link
            to="/Inventory"
            className="nav-button previous"
          >
            <IoIosArrowBack className="nav-icon" /> Previous
          </Link>
        ) : (
          <button
            className="nav-button previous"
            onClick={handlePrevious}
          >
            <IoIosArrowBack className="nav-icon" /> Previous
          </button>
        )}

        <button className="nav-button draft">
          Save as draft
        </button>
        <button className="nav-button save">
          Save
        </button>

        {currentStep < 4 && (
          <button
            className="nav-button next"
            onClick={handleNext}
          >
            Next <IoIosArrowForward className="nav-icon" />
          </button>
        )}
      </div>
    </>
  );
}

export default AddProduct;