export type AddIncomeType = {
    incomeSource: string;
    amount: number;
    date: Date;
    notes: string;
};

export type IncomeType = AddIncomeType & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
};
