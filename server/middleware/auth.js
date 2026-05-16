import jwt from 'jsonwebtoken'

const auth = async(req, res, next) => {
    try {
        const autHeader = req.headers.authorization;
        if(!autHeader || !autHeader.startsWith("Bearer")){
            return res.status(401).json({success:false , message: "Not authorized, no token"})
        }

        const token = autHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;
        next();

    } catch (error) {
        console.error("Auth middleware error:", error.message);
        res.status(400).json({success:false, message: "Not authorized , token failed"})
    }
}

export default auth;