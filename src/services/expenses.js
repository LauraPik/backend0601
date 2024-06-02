// tie duomenys, kuriuos paduodu dashboard(token)
export const getAllExpenses = async (token) => {
    try {
      const res = await fetch('http://localhost:8882/api/v1/expenses', {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer "+token
        },
        
      });
      return await res.json();
    } catch (err) {
      console.log(err.message);
    }
  };