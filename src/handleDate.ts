export const handleDate = (dateInput: any): Date => {
    if (typeof dateInput === 'number') {
        return new Date(dateInput);
    }

    if (typeof dateInput === 'object' && typeof dateInput.getMonth === 'function') {
        return dateInput;
    }

    throw new Error("Invalid date type");
}