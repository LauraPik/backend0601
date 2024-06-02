import * as expenses from "../../services/expenseCategory";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminPage() {
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;
  console.log(token);
  const [data, setData] = useState([]);

  console.log(data);
  const getCategories = async () => {
    try {
      const res = await expenses.getExpensesCategory(token);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleUpdate = (id, token) => {};

  const handleDelete = async (id, token) => {
    console.log(id);
    await expenses.deleteExpensesCategory(id, token);
  };

  return (
    <div>
      {data.map((categoryName) => {
        return (
          <div className="d-flex mb-2">
            <span>{categoryName.title}</span>
            <button onClick={() => handleUpdate(categoryName._id)}>
              Koreguoti
            </button>
            <button onClick={() => handleDelete(categoryName._id)}>
              Istrinti
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AdminPage;
