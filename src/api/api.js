//Creating API reqeusts to the backend  
// Import axios or fetch for API requests. 
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
      return data; 
    } catch (error) {
      console.error("Error fetching budget data:", error);
      throw error;
    }
  };
  

export const loginUser  = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Send username and password as JSON
    });

    if (!response.ok) {
      throw new Error("Failed to log in");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};  