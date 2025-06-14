import { Link } from "react-router-dom";
import { IoMdSettings, IoIosNotifications, IoIosCube, IoIosArrowForward, IoIosArrowDown, IoIosShare, IoIosAddCircle, IoMdArrowRoundBack } from "react-icons/io";
import './Inventory.css';

function Inventory() {
    return (
        <>
          {/* search bar & add product button */}
          <div className="search-container">
            <input type="text" placeholder="🔍search..." className="search-input" />
            <span><IoIosShare className="share-icon" /></span>
            <Link to="/AddProduct" className="add-product-button">
              <IoIosAddCircle className="add-icon" />
              <span className="add-product-text">Add Product</span>
            </Link>
          </div>

          {/* back & all product heading */}
          <div className="heading-container">
            <h1 className="products-heading">
              <IoMdArrowRoundBack className="back-icon" />
              All Products (981)
            </h1>
          </div>

          {/* tools */}
          <div className="tools-container">
            {/* 1st row */}
            <div className="tools-row">
              {/* left boxes */}
              <div className="left-boxes">
                {/* first 3 */}
                <div className="box-group">
                  <button className="box"></button>
                  <button className="box"></button>
                  <button className="box"></button>
                </div>
                {/* second 3 */}
                <div className="box-group second">
                  <button className="box"></button>
                  <button className="box"></button>
                  <button className="box"></button>
                </div>
              </div>
              {/* right box */}
              <div className="right-box">
                <button className="large-box"></button>
              </div>
            </div>
            {/* 2nd row */}
            <div className="tools-row second">
              <button className="full-width-box"></button>
            </div>
          </div>
        </>
    );
}

export default Inventory;