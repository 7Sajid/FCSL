export const boService = {
  submitApplication: async (_data: unknown): Promise<{id: string, status: string}> => {
    console.log("DEMO / INTEGRATION REQUIRED: Mocking BO submission");
    return new Promise((resolve) => setTimeout(() => resolve({id: "BO-" + Math.random().toString(36).substring(7).toUpperCase(), status: "Pending"}), 1500));
  }
};