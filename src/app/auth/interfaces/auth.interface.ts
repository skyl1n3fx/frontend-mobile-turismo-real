export interface AuthI {
    message: string;
    token:   string;
    user:    User;
   }
   
   export interface User {
    email: string;
    image: string;
    role:  Role;
   }
   
   export interface Role {
    description: string;
    id:          number;
   }
   