import { HashedPasswordResult } from '../interfaces/hased-password.interface';
/**
 * Creates a hash out of a password. Returns a HashingPasswordResult; Which
 * consists of the orginal password, a salt value and the hash password.
 * @param password - Password to be hashed
 * @returns - HashedPasswordResult
 */
export declare function hashPassword(password: string): HashedPasswordResult;
