import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export class MysqlDbConnection {
  private pool: mysql.Pool;

  constructor() {
    console.log("Initializing MySQL Connection Pool");
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async query(sql: string, params: any[]): Promise<any> {
    try {
      // console.log("Executing query:", sql, params);
      const [results] = await this.pool.query(sql, params);
      // console.log("Query results:", results); // Add this line for debugging
      return results;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }
  
}

export default MysqlDbConnection;
