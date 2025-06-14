export default function validateEntryForm(name, email, message) {
    if (name === "" || email === "" || message === "") {
        return false;
    }

    // Validar email mediante regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    return true;
}