// Import axios or fetch for API requests. Here, we use fetch for simplicity.
export const fetchBudgetData = async () => {
    try {
      const response = await fetch("http://localhost:5000/budget", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch budget data");
      }
  
      const data = await response.json();
      return data; // Assuming the API returns the necessary data in this format.
    } catch (error) {
      console.error("Error fetching budget data:", error);
      throw error;
    }
  };
  