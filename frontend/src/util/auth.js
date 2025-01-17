import { redirect } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}

export function checkToken() {
    return getAuthToken();
}

export function checkAuthTokenLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }
}