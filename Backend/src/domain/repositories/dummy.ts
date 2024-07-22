import { CaseTypes } from "../common/ApplicationEnums";

export interface ICaseRepository {
  getCasesByType(caseType: CaseTypes): Promise<any[]>;
}
