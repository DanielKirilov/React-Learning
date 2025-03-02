export const formatDateTime = (isoDate) => {
    if (!isoDate) return "";

    return new Date(isoDate).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
};

