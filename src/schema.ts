export interface Document {
    [key: string]: any
}

export interface User extends Document {
    name: string
    age: number
    email: string
}