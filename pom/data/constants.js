/* eslint-disable no-undef */
import "dotenv/config";

export const MESSAGES = {
    ORDER_COMPLETED: "THANK YOU FOR YOUR ORDER"
};

export const STRINGS = {
    F_NAME: "First Name: ",
    L_NAME: "Last Name: "
};

export const URL = {
    PROD_URL: "https://www.saucedemo.com"
};

export const CREDENTIALS = {
    STD_USER: {
        USERNAME: process.env.REAL_USERNAME,
        PASSWORD: process.env.REAL_PASSWORD
    }
};