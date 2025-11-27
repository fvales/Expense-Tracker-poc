import { Route, Routes } from 'react-router';
import Dashboard from '@pages/dashboard/Dashboard';
import Expense from '@pages/expenses/Expense';
import Income from '@pages/income/Income';
import Report from '@pages/report/Report';

export const RoutesComponent = () => {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="expense" element={<Expense />} />
            <Route path="income" element={<Income />} />
            <Route path="report" element={<Report />} />
        </Routes>
    );
};

export default RoutesComponent;
