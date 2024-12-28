import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRegistration() {
  //token
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]); // List of users for select options
  const [competitions, setCompetitions] = useState([]); // List of competitions for select options
  const [registration, setRegistration] = useState({
    user_id: "",
    competition_id: "",
    registration_date: "",
    requirements_file: null,
    payment_proof: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users data for the select option
    const fetchUsersAndCompetitions = async () => {
      try {
        const [userResponse, competitionResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/user", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/api/competition", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
    
        if (userResponse.data.success) {
          setUsers(userResponse.data.data);
        }
        if (competitionResponse.data.success) {
          setCompetitions(competitionResponse.data.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    

    fetchUsersAndCompetitions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", registration.user_id);
    formData.append("competition_id", registration.competition_id);
    formData.append("registration_date", registration.registration_date);
    formData.append("requirements_file", registration.requirements_file);
    formData.append("payment_proof", registration.payment_proof);

    try {
      const response = await axios.post("http://localhost:8000/api/registration", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
           Authorization: `Bearer ${token}`
        },
      },);

      if (response.data.success) {
        alert("Registration Berhasil Ditambahkan");
        navigate("/registration"); // Redirect to registrations page
      } else {
        alert("Registration Gagal Ditambahkan");
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi");
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="mt-10 bg-white p-10 shadow-md rounded-md">
        {/* Header */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">Registration</h1>
          <nav
            className="text-sm font-medium text-gray-500 mt-2"
            aria-label="breadcrumb"
          >
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-800">Registration</li>
            </ol>
          </nav>
        </div>

        <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">
          BUAT REGISTRATION
        </h1>

        <form onSubmit={handleSubmit}>
          {/* User ID (Select) */}
          <div className="mb-4">
            <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">User</label>
            <select
              id="user_id"
              name="user_id"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={registration.user_id}
              onChange={(e) => setRegistration({ ...registration, user_id: e.target.value })}
              required
            >
              <option value="">Pilih User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Competition ID (Select) */}
          <div className="mb-4">
            <label htmlFor="competition_id" className="block text-sm font-medium text-gray-700">Competition</label>
            <select
              id="competition_id"
              name="competition_id"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={registration.competition_id}
              onChange={(e) => setRegistration({ ...registration, competition_id: e.target.value })}
              required
            >
              <option value="">Pilih Competition</option>
              {competitions.map((competition) => (
                <option key={competition.id} value={competition.id}>
                  {competition.name}
                </option>
              ))}
            </select>
          </div>

          {/* Registration Date */}
          <div className="mb-4">
            <label htmlFor="registration_date" className="block text-sm font-medium text-gray-700">Registration Date</label>
            <input
              type="date"
              id="registration_date"
              name="registration_date"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={registration.registration_date}
              onChange={(e) => setRegistration({ ...registration, registration_date: e.target.value })}
              required
            />
          </div>

          {/* Requirements File */}
          <div className="mb-4">
            <label htmlFor="requirements_file" className="block text-sm font-medium text-gray-700">Requirements File</label>
            <input
              type="file"
              id="requirements_file"
              name="requirements_file"
              accept="application/pdf"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              onChange={(e) => setRegistration({ ...registration, requirements_file: e.target.files[0] })}
              required
            />
          </div>

          {/* Payment Proof */}
          <div className="mb-4">
            <label htmlFor="payment_proof" className="block text-sm font-medium text-gray-700">Payment Proof</label>
            <input
              type="file"
              id="payment_proof"
              name="payment_proof"
              accept="image/*"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              onChange={(e) => setRegistration({ ...registration, payment_proof: e.target.files[0] })}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buat Registration
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddRegistration;
