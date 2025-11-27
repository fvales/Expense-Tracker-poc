export type AddIncomeType = {
    incomeSource: string;
    amount: number;
    dateReceived: Date;
    notes: string;
};

export type IncomeType = AddIncomeType & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
};
