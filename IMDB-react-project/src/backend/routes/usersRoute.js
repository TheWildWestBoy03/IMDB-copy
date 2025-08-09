import express, { response } from 'express'
import {User} from '../models/userModel.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router()

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3600s'});
}

router.post('/login', async (request, response) => {
    console.log("Login in progress");

    const { email, password } = request.body;

    try {
        const requestedUser = await User.findOne({ email });

        if (!requestedUser) {
            return response.status(404).json("User not registered!");
        }

        const isMatch = await bcrypt.compare(password, requestedUser.password);

        if (!isMatch) {
            console.log("Incorrect password");
            return response.status(401).json("The password is incorrect");
        }

        const loggingUser = {
            username: requestedUser.username,
            email: requestedUser.email
        };

        const token = generateAccessToken(loggingUser);
        response.cookie('access-token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 3600000
        })

        return response.status(200).json("Login successful!");

    } catch (error) {
        console.error("Login error:", error);
        return response.status(500).json("Internal server error!");
    }
});


router.post('/register', async(request, response) => {
    console.log("Registration in progress")

    const username = request.body.username;
    const password = request.body.password;
    const email = request.body.email;
    
    try {
        const user = await User.find({"username" : username, "email" : email}).exec()
        if (user.length > 0) {
            response.status(400).json("Username already taken");
            return
        }

        const generated_salt = await bcrypt.genSalt(10);
        const crypted_password = await bcrypt.hash(password, generated_salt);

        const newUser = new User({
            "username": username,
            "email": email,
            "password": crypted_password
        })

        await newUser.save()

        response.status(201).json("New user registered!");
    } catch (error) {
        console.log(error);
        response.status(404).json(error);
    }
})

router.get('/status', authMiddleware, async (request, response) => {
    const userInfo = {
        signedIn: request.userSignedIn,
        userData: request.userInfo
    }
    response.status(200).send(userInfo);
})

router.post('/logout', authMiddleware, async (request, response) => {
    response.clearCookie('access-token');
    response.status(201).send("User logout");
})

function authMiddleware(request, response, next) {
    const token = request.cookies['access-token'];
    if (!token) {
        return response.status(401).json("Not authentified!")
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        request.userInfo = decoded;
        request.userSignedIn = true;
        next()
    } catch (error) {
        console.log(error);
        return response.status(500).json("Internal server error!");
    }
}



export default router;
