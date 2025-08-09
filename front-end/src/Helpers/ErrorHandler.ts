import axios from "axios";
import {toast} from "react-toastify";

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        let err = error.response;
        if (Array.isArray(err?.data.err)) {
           for(let val of err?.data.err) {
                toast.warning(val.description);
            }
        } else if (typeof err?.data.errors === 'object') {
            for (let e in err?.data.errors) {
                    toast.warning(err.data.errors[e]);
            }
        } else if (err?.data) {
           toast.warning(err.data);
        }
        else if(err?.status === 401) {
            toast.warning("Unauthorized access. Please log in again.");
            window.history.pushState({}, 'LoginPage', '/login');
        }else if(err) {
            toast.warning(err?.data)
        }

    } 
};