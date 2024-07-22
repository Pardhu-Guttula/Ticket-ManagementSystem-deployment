// import MysqlDbConnection from "../database/MysqlDbConnection";
// import { CaseTypes } from "../../domain/common/ApplicationEnums";
// import { ICaseRepository } from "./ICaseRepository";

// const db = new MysqlDbConnection();

// export class CaseRepository implements ICaseRepository {
//   async getCasesByType(caseType: CaseTypes): Promise<any[]> {
//     try {
//       const query = `SELECT * FROM factCase WHERE caseStatus = ?`;
//       console.log("Executing query:", query, caseType);
//       const rows = await db.query(query, [caseType]);
//       console.log("Query results:", rows);
//       return rows;
//     } catch (error) {
//       console.error("Error in getCasesByType:", error);
//       throw error;
//     }
//   }
// }

// src/infrastructure/repositories/CaseRepository.ts
import MysqlDbConnection from "../database/MysqlDbConnection";
import { CaseTypes } from "../../domain/common/ApplicationEnums";
import { ICaseDbRepository } from "../dbRepositories/ICaseDbRepository";

const db = new MysqlDbConnection();

export class CaseDbRepository implements ICaseDbRepository {
  async getCasesByType(caseType: CaseTypes): Promise<any[]> {
    try {
      const query = `SELECT * FROM factCase WHERE caseStatus = ?`;
      console.log("Executing query:", query, caseType);
      const rows = await db.query(query, [caseType]);
      console.log("Query results:", rows);
      return rows;
    } catch (error) {
      console.error("Error in getCasesByType:", error); //remove
      throw error;
    }
  }

  async updateCaseStatusById(caseId: string, newStatus: string): Promise<void> {
    try {
      const query = `UPDATE factCase SET caseStatus = ? WHERE caseId = ?`;
      await db.query(query, [newStatus, caseId]);
    } catch (error) {
      console.error("Error updating case status in repository:", error);
      throw error;
    }
  }
}
