export interface SignUp {
    email: string;
    pseudo: string;
    password: string;
    confirmPassword: string;
}

export interface SignIn {
    pseudo: string;
    password: string;
}