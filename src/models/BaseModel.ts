import { PrismaClient } from '@prisma/client/extension';

export abstract class BaseModel<T> {
  constructor(protected modelClient: PrismaClient) {}

  getById(id: number): Promise<T | null> {
    return this.modelClient.findUnique({
      where: { id },
    });
  }

  count(): Promise<number> {
    return this.modelClient.count();
  }
}
