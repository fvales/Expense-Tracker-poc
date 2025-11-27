export type Category =
    | 'food'
    | 'travel'
    | 'utilities'
    | 'entertainment'
    | 'shopping'
    | 'health'
    | 'education'
    | 'others';

export type AddExpenseType = {
    description: string;
    category: Category;
    date: Date;
    amount: number;
};

export type ExpenseType = AddExpenseType & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
};
