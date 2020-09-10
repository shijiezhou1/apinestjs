export interface Status {
    code: number,
    status: sf,
    data: object,
}

type sf = "success" | "failure";
