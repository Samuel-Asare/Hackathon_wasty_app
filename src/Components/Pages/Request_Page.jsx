import "../../css/Request_Page.css";

const RequestPage = () => {
    return (
        <div className="request_wrapper">
            Build a form
            <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                />
            </div>
            <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                    type="datetime-local"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                />
            </div>
        </div>
    );
};

export default RequestPage;
