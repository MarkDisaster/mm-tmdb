export const getFormattedDate = (dateString: string) => {
   const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
   const simpleDateRegex = /^\d{4}-\d{2}-\d{2}$/;
   const date = new Date(dateString);

   if (simpleDateRegex.test(dateString)) return dateString;
   if (!iso8601Regex.test(dateString)) return '-';

   return date.toISOString().split('T')[0];
};
