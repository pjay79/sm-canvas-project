import { findings } from "../config/data";
// import { Findings } from "../types/findings";

const SeeModeAPI = (): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!findings) {
      return setTimeout(
        () => reject(new Error('No findings')),
        250
      );
    }

    setTimeout(() => resolve(findings), 250);
  });

const getFindings = async () => {
  try {
    const result = await SeeModeAPI();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export { 
  getFindings,
}
