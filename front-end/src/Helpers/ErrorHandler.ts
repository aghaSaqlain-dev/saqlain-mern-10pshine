import axios from "axios";
import {toast} from "react-toastify";

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        let err = error.response;
        
        // Check for 401 status first, before checking data
        if (err?.status === 401) {
            toast.warning("Unauthorized access. Please log in again.");
            window.history.pushState({}, 'LoginPage', '/login');
            return; // Exit early for 401 errors
        }
        
        // Check if data exists before accessing its properties
        if (err?.data && Array.isArray(err.data.err)) {
           for(let val of err.data.err) {
                toast.warning(val.description);
            }
        } else if (err?.data && typeof err.data.errors === 'object') {
            for (let e in err.data.errors) {
                    toast.warning(err.data.errors[e]);
            }
        } else if (err?.data) {
           toast.warning(err.data);
        } else if(err) {
            toast.warning(err.data);
        }
    } 
};