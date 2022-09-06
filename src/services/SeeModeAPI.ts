import { findings } from "../common/config/data";
import { FindingsData } from "../types/findings";

/* Convert to AxiosInstance  */
const SeeModeAPI = (): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!findings) {
      return setTimeout(() => reject(new Error("No findings")), 250);
    }

    setTimeout(() => resolve(findings), 250);
  });

const getFindings = async (): Promise<Array<FindingsData> | null> => {
  try {
    const result = await SeeModeAPI();
    return result;
  } catch (error) {
    console.log("Error fetching findings:", error);
    return null;
  }
};

export { getFindings };
