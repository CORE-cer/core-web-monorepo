import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const UserId = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  const userId = request.header('user-id');
  if (!userId) {
    throw new Error('User ID header is missing');
  }
  return userId;
});
