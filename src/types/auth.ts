import { Image } from "./image";

type Verification = {
  code: string;
  createdAt: Date;
};

type User = {
  id: string;
  fullname: string;
  contact_number: string;
  address: string;
  city: string;
  role: string;
  email: string;
  image: Image | null;
  verificationCode?: Verification;
};

type AuthState = {
  user: User | null;
  isAuthorized: boolean
};

type AuthResponse = {
  success: boolean;
  message: string;
  details: User;
  access: string;
};

type AuthPayload = {
  email: string;
  password: string;
}

type AuthAction = {
  login: (payload: AuthPayload) => Promise<AuthResponse>;
  logout: () => Promise<void>;
};

export type AuthApiSlice = AuthState & AuthAction;
