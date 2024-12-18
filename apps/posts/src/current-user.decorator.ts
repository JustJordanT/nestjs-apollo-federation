import { createParamDecorator } from '@nestjs/common';
import { GraphQLExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (_data: any, ctx: GraphQLExecutionContext) => {
    try {
      const headers = ctx.getArgs()[2].req.headers;
      console.log('Headers:', headers);
      // console.log('Context:', ctx.getArgs());
      if (headers.user) {
        return JSON.parse(headers.user);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
);
