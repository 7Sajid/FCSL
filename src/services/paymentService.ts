export const paymentService = {
  processDeposit: async (_data: unknown): Promise<{status: string, ref: string}> => {
    console.log("DEMO / INTEGRATION REQUIRED: Mocking deposit");
    return new Promise((resolve) => setTimeout(() => resolve({status: "Processing", ref: "DEP-" + Date.now()}), 1500));
  }
};