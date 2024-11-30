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
    const response = await fetch("http://localhost:5000/api/auth/login", {
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

export const SignUpUser  = async (User_Id, FirstName, LastName, PreferredUserName, Email, Password ) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ User_Id, FirstName, LastName, PreferredUserName, Email, Password  }), // Send username and password as JSON
    });

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};  

export const  fetchIncomeData= async () => {
  try {
    const response = await fetch("http://localhost:5000/api/Income/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch income data");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching income data:", error);
    throw error;
  }
};
export const  AddIncomeData= async (params) => {
  try {
    const response = await fetch("http://localhost:5000/api/Income/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params), // Send username and password as JSON

    });

    if (!response.ok) {
      throw new Error("Failed to fetch income data");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching income data:", error);
    throw error;
  }
};

const request = async (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

 

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);
  const response = await fetch(options.url, options);
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json;
};

export function addExpense(params) {
console.log('params', params);
return request({
  url: 'http://localhost:5000/api/expense/add',
  method: 'POST',
  body: JSON.stringify(params)
});
}