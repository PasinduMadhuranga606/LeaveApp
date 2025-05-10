import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartmentsList from "./components/departments/DepartmentsList";
import AddDepartment from "./components/departments/AddDepartment";
import EditDepartment from "./components/departments/EditDepartment";
import EmployeesList from "./components/employee/EmployeesList";
import AddEmployee from "./components/employee/AddEmployee";
import ViewEmployee from "./components/employee/ViewEmployee";
import EditEmployee from "./components/employee/EditEmployee";
import EmployeeSummary from "./components/dashboard/EmployeeSummary";
import LeaveList from "./components/leave/LeaveList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["admin"]}>
                  <AdminDashboard />
                </RoleBaseRoutes>
              </PrivateRoutes>
            }
          >
            <Route index element={<AdminSummary />}></Route>
            <Route
              path="/admin-dashboard/departments"
              element={<DepartmentsList />}
            ></Route>
            <Route
              path="/admin-dashboard/add-department"
              element={<AddDepartment />}
            ></Route>
            <Route
              path="/admin-dashboard/departments/:id"
              element={<EditDepartment />}
            ></Route>

            <Route
              path="/admin-dashboard/employees"
              element={<EmployeesList />}
            ></Route>
            <Route
              path="/admin-dashboard/add-employee"
              element={<AddEmployee />}
            ></Route>
            <Route
              path="/admin-dashboard/employees/view/:id"
              element={<ViewEmployee />}
            ></Route>
            <Route
              path="/admin-dashboard/employees/:id"
              element={<EditEmployee />}
            ></Route>
          </Route>

          <Route
            path="/employee-dashboard"
            element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["admin", "employee"]}>
                  <EmployeeDashboard />
                </RoleBaseRoutes>
              </PrivateRoutes>
            }
          >
            <Route index element={<EmployeeSummary />}></Route>
            <Route
              path="/employee-dashboard/my-profile/:id"
              element={<ViewEmployee />}
            ></Route>
            <Route
              path="/employee-dashboard/leaves"
              element={<LeaveList />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
