import API, { setAuthToken } from "../../config/apiConfig";
import { getItem } from "../../util/handleStorage";
import { useState } from "react";

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    email: "",
    phone: "",
    position: "",
    salary: "",
    bank: "",
    account: "",
    working_status: "working", // default value
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getItem("token");
      setAuthToken(token);
      const response = await API.post("/employee", formData);
      console.log(response);
      // Optionally, clear the form after successful submission
      setFormData({
        name: "",
        nic: "",
        email: "",
        phone: "",
        position: "",
        salary: "",
        bank: "",
        account: "",
        working_status: "working",
      });
      // Add any additional logic after successful submission (e.g., redirect, show success message)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nic" className="block mb-1">
            NIC
          </label>
          <input
            type="text"
            name="nic"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.nic}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="position" className="block mb-1">
            Position
          </label>
          <input
            type="text"
            name="position"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="salary" className="block mb-1">
            Salary
          </label>
          <input
            type="number"
            name="salary"
            step="0.01"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bank" className="block mb-1">
            Bank
          </label>
          <input
            type="text"
            name="bank"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.bank}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="account" className="block mb-1">
            Account
          </label>
          <input
            type="text"
            name="account"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.account}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="working_status" className="block mb-1">
            Working Status
          </label>
          <select
            name="working_status"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={formData.working_status}
            onChange={handleChange}
          >
            <option value="working">Working</option>
            <option value="retired">Retired</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
