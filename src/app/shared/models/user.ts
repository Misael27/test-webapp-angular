export interface User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    sessionTokenBck: string;
    phoneNumber: string;
    userRole: UserRole;
}

interface UserRole {
    userRole: string;
    description: string;
    domain: string;
}
