import { ICaseDbRepository } from "../../infrastructure/dbRepositories/ICaseDbRepository";
import { CaseTypes } from "../../domain/common/ApplicationEnums";
/// call the repo from domain

export class GetCasesQuery {
  private caseRepository: ICaseDbRepository;

  constructor(caseRepository: ICaseDbRepository) {
    this.caseRepository = caseRepository;
  }

  async execute(caseType: CaseTypes): Promise<any[]> {
    try {
      const cases = await this.caseRepository.getCasesByType(caseType);
      console.log("Query results in execute:", cases);
      return cases;
    } catch (error) {
      console.error("Error in GetCasesQuery execute:", error);
      throw error;
    }
  }
}
