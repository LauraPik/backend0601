import { useEffect, useState } from "react";
import * as expenses from "../../services/expenses";
import { useSelector } from "react-redux";
import DashboardElem from "../dashboardElem/DashboardElem";

export default function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;
  const [data, setData] = useState([]);

  console.log(data);
  const getExpenses = async () => {
    try {
      const res = await expenses.getAllExpenses(token);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      {data.map((expense) => {
        return <DashboardElem key={expense._id} exp={expense} />;
      })}
    </div>
  );
}
