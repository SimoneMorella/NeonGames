
//remember to remove all the default later maybe if I need to
export default function get30DaysGap() :string {
    const currentDate = new Date();
    const pastDate = new Date(currentDate);
    pastDate.setMonth(currentDate.getMonth() - 1);

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return formatDate(pastDate) + ',' + formatDate(currentDate);
}

export function get30DaysNextGap() :string {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 1);

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return  formatDate(currentDate) + ',' + formatDate(futureDate) ;
}

export function generatePrice() {
    const price = Math.floor(Math.random() * (69 - 15 + 1)) + 15;
    return `${price},99€`;
}

export function getQueryParameters(search: string) {
    const urlParams = new URLSearchParams(search);
    return {
        ordering: urlParams.get('ordering') || "",
        page_size: urlParams.get('page_size') || "",
        dates: urlParams.get('dates') || "",
        genres: urlParams.get('genres') || "",
        platforms: urlParams.get('parent_platforms') || "",
    }
}