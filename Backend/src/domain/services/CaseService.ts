// import { CaseRepository } from "../../infrastructure/repositories/CaseRepository";
// import { CaseTypes } from "../common/ApplicationEnums";

// export class CaseService {
//   private caseRepository: CaseRepository;

//   constructor(caseRepository: CaseRepository) {
//     this.caseRepository = caseRepository;
//   }

//   async getCasesByType(caseType: CaseTypes): Promise<any[]> {
//     try {
//       return await this.caseRepository.getCasesByType(caseType);
//     } catch (error) {
//       console.error("Error in CaseService getCasesByType:", error);
//       throw error;
//     }
//   }
// }

// src/domain/services/CaseService.ts
import { ICaseDbRepository } from "../../infrastructure/dbRepositories/ICaseDbRepository";
import { CaseDbRepository } from "../../infrastructure/DBService/CaseDbRepository";
import { CaseTypes } from "../common/ApplicationEnums";

export class CaseService {
  private CaseDbRepository: ICaseDbRepository;

  constructor(CaseDbRepository: ICaseDbRepository) {
    this.CaseDbRepository = CaseDbRepository;
  }

  async getCasesByType(caseType: CaseTypes): Promise<any[]> {
    try {
      return await this.CaseDbRepository.getCasesByType(caseType);
    } catch (error) {
      console.error("Error in CaseService getCasesByType:", error);
      throw error;
    }
  }
}
 
