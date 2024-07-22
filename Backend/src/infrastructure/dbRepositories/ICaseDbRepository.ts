import { CaseTypes } from "../../domain/common/ApplicationEnums";

export interface ICaseDbRepository {
  getCasesByType(caseType: CaseTypes): Promise<any[]>;
}
