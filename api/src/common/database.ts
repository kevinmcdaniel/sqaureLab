// import { Pool } from 'pg';
// import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from '@prisma/client';
// import * as pg from 'pg';

// const connectionString: string = `${process.env.DATABASE_URL}`
// const pool: Pool = new Pool({ connectionString })
// const adapter: PrismaPg = new PrismaPg(pool)
// export const prisma = new PrismaClient({ adapter })
//export const pgClient = new pg.Client(connectionString);
//pgClient.connect();

export const connectDatabase = async (): Promise<void> => {
    // try {
        // await prisma.$connect();
        //await prisma.ena_flag.count();
        // console.log('Connected to the database');
        console.log('nothing done');
    // } catch (error) {
    //     if (error.code == "P2021") console.error("Failed to connect to database, invalid URL");
    //     else console.error('Failed to connect to the database', error);
    // }
};
