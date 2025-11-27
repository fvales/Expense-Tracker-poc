import Page from '@components/Page';
import Overview from '@pages/dashboard/Overview';
import { getExpenseList } from '@utils/expense.util';
import { getIncomeList } from '@utils/income.util';

const Dashboard = () => {
    const incomeList = getIncomeList();
    const expenseList = getExpenseList();

    return (
        <Page title="Dashboard">
            <Overview incomeList={incomeList} expenseList={expenseList} />
        </Page>
    );
};

export default Dashboard;
