import prisma from '@/lib/prisma';

export async function listCountries() {
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

export async function countCountries() {
  return prisma.country.count();
}
