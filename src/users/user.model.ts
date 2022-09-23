import * as moongose from 'mongoose';

export const UserSchema = new moongose.Schema({
    name: String,
    email: String,
    password: String,
});


