import { Country } from '@prisma/client';

import prisma from '@/lib/prisma';

import { BaseModel } from '@/models/BaseModel';

export default class CountryModel extends BaseModel<Country> {
  constructor() {
    super(prisma.country);
  }

  getAllWithLocal() {
    return prisma.country.findMany({
      include: {
        Translation: {
          where: {
            lang: 'AR',
          },
          select: {
            text: true,
          },
        },
      },
    });
  }
}
