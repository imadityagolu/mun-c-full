import './NoPageFound.css';

function NoPageFound() {
    return (
        <>
        {/* side pannel */}
        <div className="side-pannel">

            {/* container */}
            <div className="error-container">
                <div className='error-box'>
                <h1 className="error-message">Error 404 : Page Not Found</h1>
                </div>
            </div>

        </div>
        </>
    );
}

export default NoPageFound;