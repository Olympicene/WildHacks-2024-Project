import express from "express"
import { Register, Login, getUser, updateUser, Populate} from "../controllers/auth.js"
import Validate from "../middleware/validate.js"
import { check } from "express-validator"
import { Logout } from "../controllers/auth.js"
const router = express.Router();

router.post(
    "/register",
    check("email")
        .notEmpty()
        .isEmail()
        .withMessage("Please enter a valid email address")
        .normalizeEmail(),
    check("first_name")
        .notEmpty()
        .withMessage("Your first name is required")
        .trim()
        .escape(),
    check("password")
        .isLength({min: 8})
        .withMessage("Password must be at least 8 chars long")
        .notEmpty()
        .withMessage("Password cannot be empty"),
    Validate,
    Register
)

router.post(
    "/populate",
    [
        check("first_name")
        .trim()
        .escape(),
        check("email")
        .isEmail()
        .normalizeEmail(),
        check("password")
        .isLength({ min: 1 })
        .withMessage("Password cannot be empty"),
        check("age").optional({ nullable: true }).isNumeric(),
        check("university").optional({ nullable: true }),
        check("likes").optional({ nullable: true }),
        check("dislikes").optional({ nullable: true }),
        check("traits").optional({ nullable: true }),
        check("coordinates").optional({ nullable: true }).isObject(),
        check("coordinates.longitude").optional({ nullable: true }).isNumeric(),
        check("coordinates.latitude").optional({ nullable: true }).isNumeric(),
        check("sleepTime").optional({ nullable: true }).isNumeric(),
        check("wakeUpTime").optional({ nullable: true }).isNumeric(),
        check("dealbreakers").optional({ nullable: true }),
        check("hobbies").optional({ nullable: true }),
        check("numberOfGuests").optional({ nullable: true }).isIn(['1', '2', '3', '4+']),
        check("substances").optional({ nullable: true }),
        check("budget").optional({ nullable: true }).isNumeric()
    ],
    Populate
)

router.post(
    "/login",
    check("email")
        .isEmail()
        .withMessage("Enter a valid email address")
        .normalizeEmail(),
    check("password").not().isEmpty(),
    Validate,
    Login
)

router.get('/logout', Logout);


export { router }