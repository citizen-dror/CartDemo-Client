import React, { useState } from "react";
import { fetchOrdersByEmail } from "../api/orderApi";

const EmailApiPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [responseData, setResponseData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [apiCall, setApiCall] = useState("");

    const handleSubmit = async (): Promise<void> => {
        setLoading(true);
        setError("");
        setApiCall(`Fetching: { email: "${email}" }`);
        try {
            const data = await fetchOrdersByEmail(email);
            setResponseData(JSON.stringify(data, null, 2));
        } catch (err: unknown) {
            // Type guard to check if err is an Error object
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h2>Fetch Order by Email</h2>
            <input 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button onClick={handleSubmit} disabled={loading || !email} style={{ padding: "10px", width: "100%" }}>
                {loading ? "Loading..." : "Submit"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <h3>API Call</h3>
            <pre style={{ background: "#f4f4f4", padding: "10px" }}>{apiCall}</pre>
            <h3>Response</h3>
            <textarea 
                value={responseData} 
                readOnly 
                rows={10} 
                style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />
        </div>
    );
};

export default EmailApiPage;
