export type UserProfileToken = {
  userName: string;
  email: string;
  token: string;
};

export type UserProfile = {
  userName: string;
  email: string;
};

export type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};