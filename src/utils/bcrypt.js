import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    try {
        if (!password || password.trim() === "") {
            return null;
        }
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log("Hashing error: ", error);
        return null;
    }
};

export const comparePassword = async (password, hashedPassword) => {
    try {
        if (!password || !hashedPassword) {
            return false;
        }
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log("Comparing error", error)
    }
}
