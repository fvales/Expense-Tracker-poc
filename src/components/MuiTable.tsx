import type { DataGridProps } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { FC } from 'react';

interface IMUITableProps extends DataGridProps {
    id: string;
}

const MuiTable: FC<IMUITableProps> = ({ columns, rows, ...rest }) => {
    return <DataGrid columns={columns} rows={rows} {...rest} />;
};

export default MuiTable;
