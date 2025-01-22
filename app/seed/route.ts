import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';

import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const mysql      = require('mysql8');
// const client = await db.connect();
const client = mysql.createConnection({
  host: 'localhostt',
  user: 'nextuser',
  password: 'admin123',
  database: 'nextdb'
});


async function seedUsers() {
  // await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await client.query(`
        CREATE TABLE IF NOT EXISTS users
        (
            id       VARCHAR(36) PRIMARY KEY,
            name     VARCHAR(255) NOT NULL,
            email    VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
    `);

  const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const sqlStr = 'INSERT INTO users (id, name, email, password) VALUES (\'' + user.id + '\',\'' + user.name+'\',\''+ user.email+'\',\''+ hashedPassword + '\');';
        console.log('hashedPassword', hashedPassword);
        return client.query(sqlStr);
      }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  // await client.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

  await client.query(`
        CREATE TABLE IF NOT EXISTS invoices
        (
            id bigint AUTO_INCREMENT PRIMARY KEY,
            customer_id VARCHAR(36) NOT NULL,
            amount INT          NOT NULL,
            status VARCHAR(255) NOT NULL,
            date   DATE         NOT NULL
        );
    `);

  const insertedInvoices = await Promise.all(
      invoices.map(
          (invoice) => client.query(`
                INSERT INTO invoices (customer_id, amount, status, date)
                VALUES (\'${invoice.customer_id}\', \'${invoice.amount}\', \'${invoice.status}\', \'${invoice.date}\');
            `),
      ),
  );

  return insertedInvoices;
}

async function seedCustomers() {
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.query(`
        CREATE TABLE IF NOT EXISTS customers
        (
            id VARCHAR(36) PRIMARY KEY,
            name      VARCHAR(255) NOT NULL,
            email     VARCHAR(255) NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );
    `);

  const insertedCustomers = await Promise.all(
      customers.map(
          (customer) => client.query(`
                INSERT INTO customers (id, name, email, image_url)
                VALUES (\'${customer.id}\', \'${customer.name}\', \'${customer.email}\', \'${customer.image_url}\');
            `),
      ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await client.query(`
        CREATE TABLE IF NOT EXISTS revenue
        (
            month   VARCHAR(4) NOT NULL UNIQUE,
            revenue INT        NOT NULL
        );
    `);

  const insertedRevenue = await Promise.all(
      revenue.map(
          (rev) => client.query(`
                INSERT INTO revenue (month, revenue)
                VALUES (\'${rev.month}\', \'${rev.revenue}\');
            `),
      ),
  );

  return insertedRevenue;
}


export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedCustomers();
  //   await seedInvoices();
  //   await seedRevenue();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
