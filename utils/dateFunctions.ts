import { formatDistanceToNow, formatISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const distanceFromDateToToday = (date: number) => {
    const fromNow = formatDistanceToNow(date, { locale: es });
    return `hace ${fromNow}`;
}

export const formatDate = (date: number) => {
    return formatISO(date, { representation: "date" })
}