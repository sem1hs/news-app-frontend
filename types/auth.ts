export type LoginRequest = {
  username: string;
  password: string;
};

export type SignUpRequest = {
  username: string;
  password: string;
};

export type JwtTokenResponse = {
  accessToken: string;
  refreshToken: string;
};
