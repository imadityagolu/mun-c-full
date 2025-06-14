import { Link } from "react-router-dom";
import './AddProductMore.css';

function AddProduct() {
    return (
        <>
          {/* tools */}
          <div className="tools-container">
            {/* form */}
            <div className="form-container">
                <div className="form-box">
                  <h1 className="success-message">The product has been successfully added</h1>
                  <br />
                  <Link to="/AddProduct" className="add-more-button">+ Add More Product</Link>
                </div>
            </div>
          </div>
        </>
    );
}

export default AddProduct;