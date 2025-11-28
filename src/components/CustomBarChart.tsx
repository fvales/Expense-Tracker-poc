import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import type { FC } from 'react';
import { useMemo } from 'react';
import { parseDate } from '@utils/date.util';
import { t } from 'i18next';

type ChartProps = {
    list: { date: Date; amount: number }[];
    chartHeader: string;
    seriesLabel: string;
};

type ChartData = {
    month: string;
    amount: number;
    monthIndex: number;
    [key: string]: string | number;
};

const CustomBarChart: FC<ChartProps> = ({ list, chartHeader, seriesLabel }) => {
    // Group by month and calculate totals
    const chartData = useMemo((): ChartData[] => {
        if (list.length === 0) {
            return [];
        }

        // Create a map to store monthly totals
        const monthlyData = new Map<string, number>();

        list.forEach((item) => {
            const date = parseDate(item.date);
            const year = date.getFullYear();
            const month = date.getMonth(); // 0-11
            const monthKey = `${year}-${month}`;

            const currentAmount = monthlyData.get(monthKey) || 0;
            monthlyData.set(monthKey, currentAmount + item.amount);
        });

        // Convert to array and sort by date
        const processedData: ChartData[] = Array.from(monthlyData.entries())
            .map(([key, amount]) => {
                const [year, month] = key.split('-').map(Number);
                const date = new Date(year, month, 1);
                const monthName = date.toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                });
                return {
                    month: monthName,
                    amount: Math.round(amount * 100) / 100, // Round to 2 decimal places
                    monthIndex: year * 12 + month, // For sorting
                };
            })
            .sort((a, b) => a.monthIndex - b.monthIndex);

        // Show last 12 months (or all if less than 12)
        return processedData.slice(-12);
    }, [list]);

    // Empty state
    if (chartData.length === 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '400px',
                    p: 4,
                }}
            >
                <Typography variant="h6" color="text.secondary">
                    {t('noDataAvailable')}
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', height: '400px', p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                {chartHeader}
            </Typography>
            <Box sx={{ width: '100%', height: '350px' }}>
                <BarChart
                    dataset={chartData}
                    xAxis={[
                        {
                            dataKey: 'month',
                            scaleType: 'band',
                            label: t('month'),
                        },
                    ]}
                    yAxis={[
                        {
                            label: `${t('amount')} (₹)`,
                            valueFormatter: (value: number) =>
                                `₹${value.toLocaleString('en-US', {
                                    maximumFractionDigits: 0,
                                })}`,
                        },
                    ]}
                    series={[
                        {
                            dataKey: 'amount',
                            label: seriesLabel,
                            valueFormatter: (value: number | null) =>
                                value !== null
                                    ? `₹${value.toLocaleString('en-US', {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                      })}`
                                    : '',
                        },
                    ]}
                    width={undefined}
                    height={350}
                    sx={{
                        '& .MuiChartsAxis-root': {
                            '& .MuiChartsAxis-tick': {
                                fill: 'text.secondary',
                            },
                            '& .MuiChartsAxis-label': {
                                fill: 'text.secondary',
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default CustomBarChart;
