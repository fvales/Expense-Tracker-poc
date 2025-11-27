import type { SelectOption } from '@components/SelectControl';
import i18n from '@i18n/i18n';

export const CategoryOptions: SelectOption[] = [
    {
        label: i18n.t('category.food'),
        value: 'food',
    },
    {
        label: i18n.t('category.travel'),
        value: 'travel',
    },
    {
        label: i18n.t('category.utilities'),
        value: 'utilities',
    },
    {
        label: i18n.t('category.entertainment'),
        value: 'entertainment',
    },
    {
        label: i18n.t('category.shopping'),
        value: 'shopping',
    },
    {
        label: i18n.t('category.health'),
        value: 'health',
    },
    {
        label: i18n.t('category.education'),
        value: 'education',
    },
    {
        label: i18n.t('category.others'),
        value: 'others',
    },
];
