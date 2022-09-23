import moongose from "mongoose";

export interface User extends moongose.Document {
    _id?: string;
    name: string;
    email: string;
    password: string;
}
