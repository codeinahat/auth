"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const crypto_1 = require("crypto");
/**
 * Creates a hash out of a password. Returns a HashingPasswordResult; Which
 * consists of the orginal password, a salt value and the hash password.
 * @param password - Password to be hashed
 * @returns - HashedPasswordResult
 */
function hashPassword(password) {
    // creates salt
    const salt = (0, crypto_1.randomBytes)(26).toString('hex');
    return {
        salt,
        // creates hash
        hash_password: (0, crypto_1.createHash)('sha256').update(password + salt).digest('hex'),
    };
}
exports.hashPassword = hashPassword;
