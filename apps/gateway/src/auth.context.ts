import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (req.headers?.authorization) {
    // Validate the token and return the user object - JWT, Oauth, etc.
    return { user: { id: '123' } };
  }
  throw new UnauthorizedException();
};
