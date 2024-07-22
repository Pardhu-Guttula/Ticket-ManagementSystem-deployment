// import { Request, Response } from "express";
// import { CaseRepository } from "../../infrastructure/repositories/CaseRepository";
// import { CaseService } from "../../domain/services/CaseService";
// import { CaseTypes } from "../../domain/common/ApplicationEnums";
// import { GetCasesQuery } from "../../application/handlers/GetCasesQuery";
// import { handle400Error, handle500Error } from "../../domain/common/ApplicationConstants";

// const caseRepository = new CaseRepository();
// const caseService = new CaseService(caseRepository);
// const getCasesQuery = new GetCasesQuery(caseService);

// export const getCases = async (req: Request, res: Response) => {
//   try {
//     const caseTypeParam = req.query.caseType as keyof typeof CaseTypes;
//     console.log("Received caseTypeParam:", caseTypeParam);

//     if (!(caseTypeParam in CaseTypes)) {
//       console.error("Invalid caseType:", caseTypeParam);
//       return handle400Error(res, "Invalid caseType");
//     }

//     const caseType = CaseTypes[caseTypeParam];
//     console.log("Resolved caseType:", caseType);

//     const cases = await getCasesQuery.execute(caseType);
//     res.json(cases);
//   } catch (error) {
//     handle500Error(res, error);
//   }
// };

// src/interfaces/controllers/CaseController.ts
import { Request, Response } from "express";
import { CaseDbRepository } from "../../infrastructure/DBService/CaseDbRepository";
import { CaseService } from "../../domain/services/CaseService";
import { CaseTypes } from "../../domain/common/ApplicationEnums";
import { GetCasesQuery } from "../../application/handlers/GetCasesQuery";
import {
  handle400Error,
  handle500Error,
} from "../../domain/common/ApplicationConstants";

const caseRepository = new CaseDbRepository();
const caseService = new CaseService(caseRepository);
const getCasesQuery = new GetCasesQuery(caseService);

export const getCases = async (req: Request, res: Response) => {
  try {
    const caseTypeParam = req.query.caseType as keyof typeof CaseTypes;
    console.log("Received caseTypeParam:", caseTypeParam);

    if (!(caseTypeParam in CaseTypes)) {
      console.error("Invalid caseType:", caseTypeParam);
      return handle400Error(res, "Invalid caseType");
    }

    const caseType = CaseTypes[caseTypeParam];
    console.log("Resolved caseType:", caseType);

    const cases = await getCasesQuery.execute(caseType);
    res.json(cases);
  } catch (error) {
    handle500Error(res, error);
  }
};

export const updateCaseStatus = async (req: Request, res: Response) => {
  const { caseId } = req.params;

  try {
    await caseRepository.updateCaseStatusById(caseId, "Accepted");
    res.json({ message: "Case status updated successfully" });
  } catch (error) {
    console.error("Error updating case status:", error);
    res.status(500).json({ error: "Failed to update case status" });
  }
};
