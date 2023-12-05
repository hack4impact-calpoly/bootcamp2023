export default function parseCommentTime(date: Date) {
    /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
    // Convert to Los Angeles time
    const losAngelesDate = new Date(
        date.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );

    // Format the date as desired
    const formattedDate = losAngelesDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return formattedDate;
}