export type UserProfileToken = {
  user:{
    id: number;
    name: string;
    email: string;
  }
  token: string;
};

export type UserProfile = {
  userId : number;
  userName: string;
  email: string;
};

export type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  requestOtp: (email: string, username: string, password: string ) => void;
  verifyOtpAndRegister: (email: string, otp: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};