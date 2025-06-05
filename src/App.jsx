/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "./App.css";

// import ApplyLoan from "./components/ApplyLoan.jsx";
// import Management2 from "./components/Management2.jsx";
// import Management from "./components/Management.jsx";
// import Leaderboard from "./components/Leaderboard.jsx";
// import SalesReports from "./components/SalesReports.jsx";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  ThemeProvider,
  createTheme,
  MobileStepper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Tabs,
  Tab,
  TextField,
  TableContainer,
  FormControl,
  InputLabel,
  Select,
  Stepper,
  Step,
  StepLabel,
  FormHelperText,
  Autocomplete,
  Avatar,
  Drawer,
  List,
  Link,
  Stack,
  Slider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  Breadcrumbs,
} from "@mui/material";
import axios from "axios";

const themes = {
  orange: {
    name: "orange",
    appBarColor: "orange",
    drawerColor: "orange",
    textColor: "orange",
  },
  light: {
    name: "light",
    appBarColor: "#3f51b5",
    drawerColor: "#3f51b5",
    textColor: "#000",
  },
  dark: {
    name: "dark",
    appBarColor: "#000",
    drawerColor: "#333",
    textColor: "#000",
  },
  blue: {
    name: "blue",
    // appBarColor: "#2196f3",
    appBarColor: "#03a9f4",
    drawerColor: "#03a9f4",
    textColor: "#000",
    // textColor: "blue",
  },
  green: {
    name: "green",
    // appBarColor: "#4caf50",
    appBarColor: "green",
    drawerColor: "green",
    // textColor: "#000",
    textColor: "green",
  },
  red: {
    name: "red",
    appBarColor: "red",
    drawerColor: "red",
    textColor: "red",
  },
};

// Achievements Section
const achievements = [
  {
    title: "Founder",
    date: "July 2019",
    description: "Pitta. Rajaiah",
    icon: "stars",
  },
  {
    title: "Co - Founder",
    date: "July 2019",
    description: "Dhanraj Kalluri",
    icon: "sports_score",
  },
  {
    title: "SLV Tech Solutions",
    date: "August 2023",
    description: "Steping into Successful route",
    icon: "emoji_events",
  },
  {
    title: "Skill Development",
    date: "May 2022",
    description: "Conducting Programs to bring financial awaireness in Public",
    icon: "school",
  },

  {
    title: "View More Achievements",
    date: "",
    description: "Click to see all our achievements and accolades",
    icon: "add_circle",
    isViewMore: true,
  },
];

const branches = [
  {
    name: "GN warangal",
    code: "GNB001",
    address: {
      city: "Warangal",
      state: "TS",
      country: "india",
      pincode: "506031",
    },
    location: ["12", "13"],
    status: true,
    joinDate: "",
  },
  {
    name: "GN Hyderabad",
    code: "GNB002",
    address: {
      city: "Hyderabad",
      state: "Hyderabad",
      country: "Hyderabad",
      pincode: "500301",
    },
    location: ["12", "13"],
    status: true,
    joinDate: "",
  },
  {
    name: "GN delhi",
    code: "GNB003",
    address: {
      city: "delhi",
      state: "delhi",
      country: "india",
      pincode: "110001",
    },
    location: ["12", "13"],
    status: true,
    joinDate: "",
  },
];

const allLoans = [
  {
    loanId: "GNL01297",
    fullName: "Raju", // as per PAN or aadhar
    careOf: "ramulu",
    address: "kazipet hanamkonda",
    mobile: "kyk",
    email: "kdgkj",
    pincode: "506122",
    maritalStatus: "married",
    gender: "male",
    customerLanguage: "english",

    loanRequiredAmonut: 150000,
    activeMonthlyEmisOfCustomer: 10000,
    applyDate: "2025-01-25T15:30:00",

    userId: "GNC123",
    branchCode: "GNB015",
    refferedBY: "GNS0142",
    approvedBy: "GNM0378",
    verified: true,
    disbursed: false,
    elegibilityAmount: 200000,
    rateOfInterest: 11.25,
    status: "Completed",
    notes: "NA",
    bankAccountNumber: "",
    ifscCode: "",
    work: {
      typeOfEmployment: "private",
      companyName: "",
      companyAddress: "",
      companyPincode: "",
      monthlySalary: 50000,
      modeOfSalary: "Bank",
      totalExperienceInMOnths: 48,
    },
    docs: {
      aadhar: "",
      pan: "",
      cBill: "",
      paySlips: "",
      bankStatements: "",
      other: "",
      photo: "",
      sign: "",
    },

    loanDetails: {
      startDate: "2025-01-25T15:30:00",
      endDate: "",
      amount: 100000,
      rateOfInterest: 11.25,
      emis: 18,
      completed: false,
    },
    payDetails: [
      {
        month: "2025-01-10",
        emi: "6500",
        paid: true,
      },
      {
        month: "2025-02-10",
        emi: "6500",
        paid: true,
      },
      {
        month: "2025-03-10",
        emi: "6500",
        paid: false,
      },
      {
        month: "2025-04-10",
        emi: "6500",
        paid: false,
      },
      {
        month: "2025-04-10",
        emi: "6500",
        paid: false,
      },
    ],
  },
  {
    loanId: "GNL01297",
    fullName: "Raju2", // as per PAN or aadhar
    careOf: "ramulu",
    address: "kazipet hanamkonda",
    pincode: "506122",
    maritalStatus: "married",
    gender: "male",
    customerLanguage: "english",

    loanRequiredAmonut: 150000,
    activeMonthlyEmisOfCustomer: 10000,
    applyDate: "2025-01-25T15:30:00",

    userId: "GNC123",
    branchCode: "GNB015",
    refferedBY: "GNS0142",
    approvedBy: "GNM0378",
    verified: true,
    disbursed: false,
    elegibilityAmount: 200000,
    rateOfInterest: 11.25,
    status: "verification",
    notes: "NA",
    bankAccountNumber: "",
    ifscCode: "",
    work: {
      typeOfEmployment: "private",
      companyName: "",
      companyAddress: "",
      companyPincode: "",
      monthlySalary: 50000,
      modeOfSalary: "Bank",
      totalExperienceInMOnths: 48,
    },
    docs: {
      aadhar: "",
      pan: "",
      cBill: "",
      paySlips: "",
      bankStatements: "",
      other: "",
      photo: "",
      sign: "",
    },

    loanDetails: {
      startDate: "2025-01-25T15:30:00",
      endDate: "",
      amount: 100000,
      rateOfInterest: 11.25,
      emis: 18,
      completed: false,
    },
    payDetails: [
      {
        month: "2025-01-10",
        emi: "6500",
        paid: true,
      },
      {
        month: "2025-02-10",
        emi: "6500",
        paid: true,
      },
      {
        month: "2025-03-10",
        emi: "6500",
        paid: false,
      },
      {
        month: "2025-04-10",
        emi: "6500",
        paid: false,
      },
      {
        month: "2025-04-10",
        emi: "6500",
        paid: false,
      },
    ],
  },
  {
    loanId: "GNL01297",
    fullName: "Raju3", // as per PAN or aadhar
    careOf: "ramulu",
    address: "kazipet hanamkonda",
    pincode: "506122",
    maritalStatus: "married",
    gender: "male",
    customerLanguage: "english",

    loanRequiredAmonut: 150000,
    activeMonthlyEmisOfCustomer: 10000,
    applyDate: "2025-01-25T15:30:00",

    userId: "GNC123",
    branchCode: "GNB015",
    refferedBY: "GNS0142",
    approvedBy: "GNM0378",
    verified: true,
    disbursed: false,
    elegibilityAmount: 200000,
    rateOfInterest: 11.25,
    status: "verification",
    notes: "NA",
    bankAccountNumber: "",
    ifscCode: "",
    work: {
      typeOfEmployment: "private",
      companyName: "",
      companyAddress: "",
      companyPincode: "",
      monthlySalary: 50000,
      modeOfSalary: "Bank",
      totalExperienceInMOnths: 48,
    },
    docs: {
      aadhar: "",
      pan: "",
      cBill: "",
      paySlips: "",
      bankStatements: "",
      other: "",
      photo: "",
      sign: "",
    },

    loanDetails: {
      startDate: "2025-01-25T15:30:00",
      endDate: "",
      amount: 100000,
      rateOfInterest: 11.25,
      emis: 18,
      completed: false,
    },
    payDetails: [
      {
        month: "2025-01-10",
        emi: "6500",
        paid: true,
      },
      {
        month: "2025-02-10",
        emi: "6500",
        paid: true,
      },
      {
        month: "2025-03-10",
        emi: "6500",
        paid: false,
      },
      {
        month: "2025-04-10",
        emi: "6500",
        paid: false,
      },
      {
        month: "2025-04-10",
        emi: "6500",
        paid: false,
      },
    ],
  },
];

const roles = ["admin", "cluster", "manager", "sales", "partner"];

const App = () => {
  let users = [];
  let customers = [];
  let baseURL = "https://zphs-school.vercel.app";
  // let baseURL = "http://localhost:1954";

  const AllLoans = () => {
    // let baseURL = "http://localhost:1954";
    // let baseURL = "https://www.zphskunur.in";
    let baseURL = "https://zphs-school.vercel.app";
    const [checked, setChecked] = useState(false);
    const [submitted, setSubmitted] = useState(true);
    const [familyMembers, setFamilyMembers] = useState(0);
    const [listData, setListData] = useState([]);
    const [showList, setShowList] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedLoan, setSelectedLoan] = React.useState(null);
    // const [newUserModal, setNewUserModal] = React.useState(false);
    const [openStudentDetailsModal, setOpenStudentDetailsModal] =
      React.useState(false);

    const [user, setUser] = useState({
      fullName: "",
      gender: "",
      father: "",
      email: "",
      phone: "",
      profession: "",
      branch: "",
      role: "",
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
      const newErrors = { ...errors };

      switch (name) {
        case "userId":
          if (!value) newErrors.userId = "user ID is required.";
          else delete newErrors.userId;
          break;
        // case "surname":
        //   if (!value) newErrors.surname = "Surname is required.";
        //   else delete newErrors.surname;
        //   break;
        case "fullName":
          if (!value) newErrors.fullName = "Name is required.";
          else delete newErrors.fullName;
          break;
        case "email":
          if (!value) {
            newErrors.email = "Email is required.";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = "Email is invalid.";
          } else {
            delete newErrors.email;
          }
          break;
        // case "phone":
        //   if (!value) {
        //     newErrors.phone = "Phone number is required.";
        //   } else if (!/^\d{10}$/.test(value)) {
        //     newErrors.phone = "Phone number must be 10 digits.";
        //   } else {
        //     delete newErrors.phone;
        //   }
        //   break;
        // case "address":
        //   if (!value) newErrors.address = "Address is required.";
        //   else delete newErrors.address;
        //   break;
        //   case "profession":
        //     if (!value) newErrors.profession = "Profession is required.";
        //     else delete newErrors.profession;
        //     break;
        // case "father":
        //   if (!value) newErrors.father = "Gardian name is required.";
        //   else delete newErrors.father;
        //   break;
        // case "profession":
        //   if (!value)
        //     newErrors.profession = "profession's name is required.";
        //   else delete newErrors.profession;
        //   break;
        // case "role":
        //   if (!value) newErrors.role = "Batch Year is required.";
        //   else if (!/^\d{4}$/.test(value)) {
        //     newErrors.role = "Batch Year must be a 4-digit year.";
        //   } else {
        //     delete newErrors.role;
        //   }
        //   break;
        default:
          break;
      }

      setErrors(newErrors);
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setUser({
        ...user,
        [name]: value,
      });

      validateField(name, value); // validate each field on change
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("user", user);
      console.log("errors", errors);
      try {
        if (
          Object.keys(errors).length === 0
          // &&
          // Object.values(user).every((val) => val !== "")
        ) {
          users.push({
            ...user,
            roleId: 0,
            theme: "",
            active: true,
            joinDate: "",
            branchCode: "GNB01",
            gender: "Male",
            careOf: "",
          });

          console.log("users", users);
          // axios
          //   .post(`${baseURL}/new-enroll`, user)

          //   .then((res) => {
          //     alert(res.data.message);
          //     if (res.data.message != "Same details enrolled") {
          //       setShowList(true);
          //       fetchListDate();
          //     }
          //   })
          //   .catch((error) => {
          //     // setShowList(true);
          //     // setShowList(false);
          //     // alert("catch", error);
          //     alert(error.message);
          //     console.log("Error occurred:", error);
          //   });

          setShowList(true);
        } else {
          alert("some fileds missing");
        }
      } catch (err) {
        console.log("err", err);
      }
      // Final validation before submission
    };

    useEffect(() => {
      setLoading(true);
      try {
        fetch(`${baseURL}/gn-loans`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        })
          .then((response) => response.json()) // Parse the JSON
          .then((data) => {
            setListData(data?.data ?? []);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error loading JSON:", error);
            setLoading(false);
          });
      } catch (er) {
        setLoading(false);
        console.log("er", er);
        alert("catch");
      }
    }, []);
    const fetchListDate = () => {
      try {
        fetch(`${baseURL}/gn-loans`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        })
          .then((response) => response.json()) // Parse the JSON
          .then((data) => {
            setListData(data?.data ?? []);
          })
          .catch((error) => console.error("Error loading JSON:", error));
      } catch (er) {
        console.log("er", er);
        alert("catch");
      }
    };

    const [searchFilter, setSearchFilter] = React.useState("");

    const [roleFilter, setRoleFilter] = React.useState("");

    const getFilteredlist = () => {
      console.log("listData", listData);
      return listData.filter((user) => {
        return (
          user?.status.toLowerCase().includes(roleFilter.toLowerCase()) &&
          user?.fullName.toLowerCase().includes(searchFilter.toLowerCase())
        );
      });
    };

    const clearStudentFilters = () => {
      setSearchFilter("");
      setRoleFilter("");
    };

    return (
      <div
        style={{
          overflowX: "scroll",
        }}
      >
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : showList ? (
          <div className="form-container">
            <Box sx={{ p: 0, m: 0, width: "100%" }} className="box">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // mb: 3,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "1.25rem" }} // Reduced font size
                >
                  All Loans
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // mb: 3,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "1rem" }} // Reduced font size
                >
                  filtered : {getFilteredlist().reduce((acc, el) => acc + 1, 0)}{" "}
                  / {listData.length}
                </Typography>
                {/*<Button
                              onClick={() => {
                                // alert("Contact administrator");
                                // setShowList(false);
                                setBodyarea("ApplyLoan");
                                // setNewUserModal(true);
                              }}
                              variant="contained"
                              color="primary"
                              // href="https://zphs-school.vercel.app/enroll-form"
                              // href="https://sakinalaraju100.github.io/zphs-school/public/addStudentForm.html"
                            >
                              apply Loan
                            </Button>*/}
              </Box>

              {/* New user Button */}
              <Box sx={{ mb: 3, textAlign: "right" }}></Box>

              {/* Filters Section */}

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    flexWrap: "wrap",
                    mb: 2,
                  }}
                >
                  <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ fontSize: "0.875rem" }}
                    ></Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "grey.100",
                        borderRadius: 1,
                        px: 2,
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{ color: "grey.500" }}
                      >
                        school
                      </span>
                      <select
                        value={roleFilter}
                        onChange={(e) => {
                          // console.log("roleFilter", e.target.value);
                          setRoleFilter(e.target.value);
                          setSearchFilter("");
                          getFilteredlist();
                        }}
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "8px",
                          backgroundColor: "transparent",
                          width: "100%",
                        }}
                      >
                        <option value="">All</option>
                        {[
                          "Progress",
                          "Verification",
                          "Completed",
                          "Rejected",
                          "Month",
                          "Day",
                          "Week",
                          "Year",
                        ].map((role, ri) => (
                          <option key={ri + role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </Box>
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ fontSize: "0.875rem" }}
                    ></Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "grey.100",
                        borderRadius: 1,
                        px: 2,
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{ color: "grey.500" }}
                      >
                        search
                      </span>
                      <input
                        type="text"
                        // value={searchFilter}
                        // onChange={(e) => setSearchFilter(e.target.value)}
                        value={searchFilter}
                        onChange={(e) => {
                          setSearchFilter(e.target.value);
                          getFilteredlist();
                          // if (e.target.value.length > 2) {
                          //   // setSearchFilter(e.target.value);
                          // } else {
                          //   setSearchFilter("");
                          // }
                        }}
                        placeholder="Filter by Name, Loan ID, mobile or Status..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "8px",
                          backgroundColor: "transparent",
                          width: "100%",
                        }}
                      />
                      {searchFilter && (
                        <IconButton
                          onClick={() => {
                            setSearchFilter("");
                          }}
                          sx={{ ml: 1 }}
                        >
                          <span
                            className="material-icons"
                            style={{ color: "grey.500" }}
                          >
                            clear
                          </span>
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: "100%", overflowX: "auto" }}>
                <TableContainer sx={{ minWidth: "250px" }}>
                  <Table sx={{}}>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "primary.main" }}>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "primary.main",
                            position: "sticky",
                            left: 0,
                            zIndex: 1,
                          }}
                        >
                          LoanID
                        </TableCell>

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          Full Name
                        </TableCell>

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          status
                        </TableCell>

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          mobile
                        </TableCell>

                        {/*}

                                  <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                  >
                                    Sales Member
                                  </TableCell>*/}

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          notes
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {allLoans.map((loan, ind) => (*/}
                      {getFilteredlist().map((loan, ind) => (
                        <TableRow
                          key={ind}
                          onClick={() => {
                            setSelectedLoan(loan);
                            setOpenStudentDetailsModal(true);
                            // setChecked(loan?.enrolled);
                            // setFamilyMembers(loan?.familyMembers);
                          }}
                          sx={{
                            "&:nth-of-type(odd)": { bgcolor: "grey.50" },
                            "&:hover": { bgcolor: "grey.100" },
                          }}
                        >
                          <TableCell
                            sx={{
                              color: "white",
                              fontWeight: "bold",
                              position: "sticky",
                              left: 0,
                              backgroundColor: loan?.enrolled
                                ? "lightblue"
                                : "lightgreen",
                              zIndex: 1,
                            }}
                          >
                            {loan?.loanId ?? "-"}
                          </TableCell>
                          <TableCell>{loan?.fullName ?? "-"}</TableCell>
                          {/* <TableCell>{loan?.father}</TableCell> */}
                          <TableCell>{loan?.status ?? "-"}</TableCell>
                          <TableCell>{loan?.mobile ?? "-"}</TableCell>
                          <TableCell>{loan?.notes ?? "-"}</TableCell>
                          {/*} <TableCell>{loan?.email ?? "-"}</TableCell>
                                    <TableCell>{loan?.address ?? "-"}</TableCell>*/}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.875rem" }}
                  onClick={() => {
                    setShowList(false);
                  }}
                >
                  For any updates, please contact the administration.
                </Typography>
              </Box>
            </Box>
          </div>
        ) : (
          <Box
            sx={{
              maxWidth: "500px",
              margin: "auto",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" textAlign="center" mb={2}>
              New User Form
            </Typography>
            <form onSubmit={handleSubmit}>
              {/* Role Selection */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Role</InputLabel>
                <Select
                  label="Role"
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                >
                  {roles.map((role, index) => (
                    <MenuItem key={index} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={Boolean(errors.role)}>
                  {errors.role}
                </FormHelperText>
              </FormControl>

              {/* Full Name */}
              <TextField
                label="Full Name"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.fullName)}
                helperText={errors.fullName}
              />

              {/* Care Of Person */}
              <TextField
                label="Care Of Person"
                name="father"
                value={user.father}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.father)}
                helperText={errors.father}
              />

              {/* Gender Selection */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>

              {/* Email */}
              <TextField
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              {/* Phone */}
              <TextField
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.phone)}
                helperText={errors.phone}
              />

              {/* Branch Selection */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Branch</InputLabel>
                <Select
                  label="Branch"
                  name="branch"
                  value={user.branch}
                  onChange={handleChange}
                >
                  {branches.map((branch) => (
                    <MenuItem key={branch?.code} value={branch?.code}>
                      {branch?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mt: 3,
                }}
              >
                <Button
                  onClick={() => setShowList(true)}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        )}

        {/* Modal for user Details*/}
        {selectedLoan && (
          <Dialog
            open={openStudentDetailsModal}
            onClose={() => setOpenStudentDetailsModal(false)}
            fullWidth
            maxWidth="sm"
            sx={{
              width: "100%",
              fontSize: "6px",
              "& .MuiDialogContent-root": {
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", // Vertical centering
              },
              "& .MuiDialogTitle-root": {
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    flex: 1,
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  Loan Details
                </Typography>
                <IconButton
                  onClick={() => {
                    fetchListDate();
                    setOpenStudentDetailsModal(false);
                  }}
                >
                  <span className="material-icons">close</span>
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 2,
                  fontSize: { xs: "12px", md: "15px", lg: "18px" },
                }}
              >
                {/* Display user's photo in a circle */}
                {/*<Box
                              component="img"
                              // src={
                              //   "https://drive.google.com/thumbnail?id=1cPyIpmPL-n24bhuBv7XPzP2hXmS5E7FD&sz=w1000"
                              // }
                              src={"./studentEmoji.png"}
                              alt={selectedLoan?.name}
                              sx={{
                                width: { xs: 60, sm: 100 },
                                height: { xs: 60, sm: 100 },
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />*/}

                {/* Display user details */}

                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>User Code:</strong> {selectedLoan?.loanId ?? "-"}
                </Typography>

                <Typography
                  variant="body1"
                  xs={12}
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Full Name:</strong> {selectedLoan?.fullName ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Status:</strong> {selectedLoan?.status ?? "-"}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong> Branch code:</strong>{" "}
                  {selectedLoan?.branchCode ?? "-"}
                </Typography>
                <Typography variant="body1">
                  <strong>Father:</strong> {selectedLoan?.careOf}
                </Typography>
                <Typography variant="body1">
                  <strong>Branch:</strong> {selectedLoan?.branchCode}
                </Typography>
                <Typography variant="body1">
                  <strong>RefferedBY:</strong> {selectedLoan?.refferedBY}
                </Typography>

                <Typography variant="body1">
                  <strong>Email:</strong> {selectedLoan.email}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Mobile:</strong> {selectedLoan?.mobile ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Address:</strong> {selectedLoan?.address ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Pincode:</strong> {selectedLoan?.pincode ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>loanDetails:</strong>{" "}
                  {JSON.stringify(selectedLoan?.loanDetails) ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>payDetails:</strong>{" "}
                  {JSON.stringify(selectedLoan?.payDetails) ?? "-"}
                </Typography>

                {/* <Box>
                        <Button variant="outlined">Edit</Button>
                      </Box> */}
              </Box>
            </Box>
          </Dialog>
        )}
      </div>
    );
  };
  const Loans = () => {
    // let baseURL = "http://localhost:1954";
    // let baseURL = "https://www.zphskunur.in";
    let baseURL = "https://zphs-school.vercel.app";
    const [checked, setChecked] = useState(false);
    const [submitted, setSubmitted] = useState(true);
    const [familyMembers, setFamilyMembers] = useState(0);
    const [listData, setListData] = useState([]);
    const [showList, setShowList] = useState(true);
    const [loading, setLoading] = useState(false);
    const [selectedLoan, setSelectedLoan] = React.useState(null);
    // const [newUserModal, setNewUserModal] = React.useState(false);
    const [openStudentDetailsModal, setOpenStudentDetailsModal] =
      React.useState(false);

    const [user, setUser] = useState({
      fullName: "",
      gender: "",
      father: "",
      email: "",
      phone: "",
      profession: "",
      branch: "",
      role: "",
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
      const newErrors = { ...errors };

      switch (name) {
        case "userId":
          if (!value) newErrors.userId = "user ID is required.";
          else delete newErrors.userId;
          break;
        // case "surname":
        //   if (!value) newErrors.surname = "Surname is required.";
        //   else delete newErrors.surname;
        //   break;
        case "fullName":
          if (!value) newErrors.fullName = "Name is required.";
          else delete newErrors.fullName;
          break;
        case "email":
          if (!value) {
            newErrors.email = "Email is required.";
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = "Email is invalid.";
          } else {
            delete newErrors.email;
          }
          break;
        // case "phone":
        //   if (!value) {
        //     newErrors.phone = "Phone number is required.";
        //   } else if (!/^\d{10}$/.test(value)) {
        //     newErrors.phone = "Phone number must be 10 digits.";
        //   } else {
        //     delete newErrors.phone;
        //   }
        //   break;
        // case "address":
        //   if (!value) newErrors.address = "Address is required.";
        //   else delete newErrors.address;
        //   break;
        //   case "profession":
        //     if (!value) newErrors.profession = "Profession is required.";
        //     else delete newErrors.profession;
        //     break;
        // case "father":
        //   if (!value) newErrors.father = "Gardian name is required.";
        //   else delete newErrors.father;
        //   break;
        // case "profession":
        //   if (!value)
        //     newErrors.profession = "profession's name is required.";
        //   else delete newErrors.profession;
        //   break;
        // case "role":
        //   if (!value) newErrors.role = "Batch Year is required.";
        //   else if (!/^\d{4}$/.test(value)) {
        //     newErrors.role = "Batch Year must be a 4-digit year.";
        //   } else {
        //     delete newErrors.role;
        //   }
        //   break;
        default:
          break;
      }

      setErrors(newErrors);
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setUser({
        ...user,
        [name]: value,
      });

      validateField(name, value); // validate each field on change
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("user", user);
      console.log("errors", errors);
      try {
        if (
          Object.keys(errors).length === 0
          // &&
          // Object.values(user).every((val) => val !== "")
        ) {
          users.push({
            ...user,
            roleId: 0,
            theme: "",
            active: true,
            joinDate: "",
            branchCode: "GNB01",
            gender: "Male",
            careOf: "",
          });

          console.log("users", users);
          // axios
          //   .post(`${baseURL}/new-enroll`, user)

          //   .then((res) => {
          //     alert(res.data.message);
          //     if (res.data.message != "Same details enrolled") {
          //       setShowList(true);
          //       fetchListDate();
          //     }
          //   })
          //   .catch((error) => {
          //     // setShowList(true);
          //     // setShowList(false);
          //     // alert("catch", error);
          //     alert(error.message);
          //     console.log("Error occurred:", error);
          //   });

          setShowList(true);
        } else {
          alert("some fileds missing");
        }
      } catch (err) {
        console.log("err", err);
      }
      // Final validation before submission
    };

    useEffect(() => {
      setLoading(true);
      try {
        fetch(`${baseURL}/all-enrolls`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        })
          .then((response) => response.json()) // Parse the JSON
          .then((data) => {
            setListData(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error loading JSON:", error);
            setLoading(false);
          });
      } catch (er) {
        setLoading(false);
        console.log("er", er);
        alert("catch");
      }
    }, []);
    const fetchListDate = () => {
      try {
        fetch(`${baseURL}/all-enrolls`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({}),
        })
          .then((response) => response.json()) // Parse the JSON
          .then((data) => {
            setListData(data);
          })
          .catch((error) => console.error("Error loading JSON:", error));
      } catch (er) {
        console.log("er", er);
        alert("catch");
      }
    };

    const [searchFilter, setSearchFilter] = React.useState("");

    const [roleFilter, setRoleFilter] = React.useState("");

    const getFilteredlist = () => {
      console.log("listData", listData);
      return allLoans.filter((user) => {
        return (
          user?.status.toLowerCase().includes(roleFilter.toLowerCase()) &&
          user?.fullName.toLowerCase().includes(searchFilter.toLowerCase())
        );
      });
    };

    const clearStudentFilters = () => {
      setSearchFilter("");
      setRoleFilter("");
    };

    return (
      <div
        style={{
          overflowX: "scroll",
        }}
      >
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : showList ? (
          <div className="form-container">
            <Box sx={{ p: 0, m: 0, width: "100%" }} className="box">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // mb: 3,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "1.25rem" }} // Reduced font size
                >
                  Loans
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  // mb: 3,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "1rem" }} // Reduced font size
                >
                  filtered : {getFilteredlist().reduce((acc, el) => acc + 1, 0)}{" "}
                  / {allLoans.length}
                </Typography>
                <Button
                  onClick={() => {
                    // alert("Contact administrator");
                    // setShowList(false);
                    setBodyarea("ApplyLoan");
                    // setNewUserModal(true);
                  }}
                  variant="contained"
                  color="primary"
                  // href="https://zphs-school.vercel.app/enroll-form"
                  // href="https://sakinalaraju100.github.io/zphs-school/public/addStudentForm.html"
                >
                  apply Loan
                </Button>
              </Box>

              {/* New user Button */}
              <Box sx={{ mb: 3, textAlign: "right" }}></Box>

              {/* Filters Section */}

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    flexWrap: "wrap",
                    mb: 2,
                  }}
                >
                  <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ fontSize: "0.875rem" }}
                    ></Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "grey.100",
                        borderRadius: 1,
                        px: 2,
                      }}
                    >
                      <span
                        className="material-icons"
                        sx={{ color: "grey.500" }}
                      >
                        school
                      </span>
                      <select
                        value={roleFilter}
                        onChange={(e) => {
                          // console.log("roleFilter", e.target.value);
                          setRoleFilter(e.target.value);
                          setSearchFilter("");
                          getFilteredlist();
                        }}
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "8px",
                          backgroundColor: "transparent",
                          width: "100%",
                        }}
                      >
                        <option value="">All</option>
                        {[
                          "Progress",
                          "Verification",
                          "Completed",
                          "Rejected",
                          "Month",
                          "Day",
                          "Week",
                          "Year",
                        ].map((role, ri) => (
                          <option key={ri + role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </Box>
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: "200px" }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={{ fontSize: "0.875rem" }}
                    ></Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "grey.100",
                        borderRadius: 1,
                        px: 2,
                      }}
                    >
                      <span
                        className="material-icons"
                        sx={{ color: "grey.500" }}
                      >
                        search
                      </span>
                      <input
                        type="text"
                        // value={searchFilter}
                        // onChange={(e) => setSearchFilter(e.target.value)}
                        value={searchFilter}
                        onChange={(e) => {
                          setSearchFilter(e.target.value);
                          getFilteredlist();
                          // if (e.target.value.length > 2) {
                          //   // setSearchFilter(e.target.value);
                          // } else {
                          //   setSearchFilter("");
                          // }
                        }}
                        placeholder="Filter by Name, Loan ID, mobile or Status..."
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "8px",
                          backgroundColor: "transparent",
                          width: "100%",
                        }}
                      />
                      {searchFilter && (
                        <IconButton
                          onClick={() => {
                            setSearchFilter("");
                          }}
                          sx={{ ml: 1 }}
                        >
                          <span
                            className="material-icons"
                            style={{ color: "grey.500" }}
                          >
                            clear
                          </span>
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: "100%", overflowX: "auto" }}>
                <TableContainer sx={{ minWidth: "250px" }}>
                  <Table sx={{}}>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "primary.main" }}>
                        <TableCell
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "primary.main",
                            position: "sticky",
                            left: 0,
                            zIndex: 1,
                          }}
                        >
                          LoanID
                        </TableCell>

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          Full Name
                        </TableCell>

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          status
                        </TableCell>

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          mobile
                        </TableCell>

                        {/*}

                                  <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                  >
                                    Sales Member
                                  </TableCell>*/}

                        <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                          notes
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {allLoans.map((loan, ind) => (*/}
                      {getFilteredlist().map((loan, ind) => (
                        <TableRow
                          key={ind}
                          onClick={() => {
                            setSelectedLoan(loan);
                            setOpenStudentDetailsModal(true);
                            // setChecked(loan?.enrolled);
                            // setFamilyMembers(loan?.familyMembers);
                          }}
                          sx={{
                            "&:nth-of-type(odd)": { bgcolor: "grey.50" },
                            "&:hover": { bgcolor: "grey.100" },
                          }}
                        >
                          <TableCell
                            sx={{
                              color: "white",
                              fontWeight: "bold",
                              position: "sticky",
                              left: 0,
                              backgroundColor: loan?.enrolled
                                ? "lightblue"
                                : "lightgreen",
                              zIndex: 1,
                            }}
                          >
                            {loan?.loanId ?? "-"}
                          </TableCell>
                          <TableCell>{loan?.fullName ?? "-"}</TableCell>
                          {/* <TableCell>{loan?.father}</TableCell> */}
                          <TableCell>{loan?.status ?? "-"}</TableCell>
                          <TableCell>{loan?.mobile ?? "-"}</TableCell>
                          <TableCell>{loan?.notes ?? "-"}</TableCell>
                          {/*} <TableCell>{loan?.email ?? "-"}</TableCell>
                                    <TableCell>{loan?.address ?? "-"}</TableCell>*/}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.875rem" }}
                  onClick={() => {
                    setShowList(false);
                  }}
                >
                  For any updates, please contact the administration.
                </Typography>
              </Box>
            </Box>
          </div>
        ) : (
          <Box
            sx={{
              maxWidth: "500px",
              margin: "auto",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" textAlign="center" mb={2}>
              New User Form
            </Typography>
            <form onSubmit={handleSubmit}>
              {/* Role Selection */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Role</InputLabel>
                <Select
                  label="Role"
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                >
                  {roles.map((role, index) => (
                    <MenuItem key={index} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={Boolean(errors.role)}>
                  {errors.role}
                </FormHelperText>
              </FormControl>

              {/* Full Name */}
              <TextField
                label="Full Name"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.fullName)}
                helperText={errors.fullName}
              />

              {/* Care Of Person */}
              <TextField
                label="Care Of Person"
                name="father"
                value={user.father}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.father)}
                helperText={errors.father}
              />

              {/* Gender Selection */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>

              {/* Email */}
              <TextField
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              {/* Phone */}
              <TextField
                label="Phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={Boolean(errors.phone)}
                helperText={errors.phone}
              />

              {/* Branch Selection */}
              <FormControl fullWidth margin="normal">
                <InputLabel>Branch</InputLabel>
                <Select
                  label="Branch"
                  name="branch"
                  value={user.branch}
                  onChange={handleChange}
                >
                  {branches.map((branch) => (
                    <MenuItem key={branch?.code} value={branch?.code}>
                      {branch?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mt: 3,
                }}
              >
                <Button
                  onClick={() => setShowList(true)}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        )}

        {/* Modal for user Details*/}
        {selectedLoan && (
          <Dialog
            open={openStudentDetailsModal}
            onClose={() => setOpenStudentDetailsModal(false)}
            fullWidth
            maxWidth="sm"
            sx={{
              width: "100%",
              fontSize: "6px",
              "& .MuiDialogContent-root": {
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", // Vertical centering
              },
              "& .MuiDialogTitle-root": {
                backgroundColor: "#1976d2",
                color: "white",
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    flex: 1,
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  Loan Details
                </Typography>
                <IconButton
                  onClick={() => {
                    fetchListDate();
                    setOpenStudentDetailsModal(false);
                  }}
                >
                  <span className="material-icons">close</span>
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 2,
                  fontSize: { xs: "12px", md: "15px", lg: "18px" },
                }}
              >
                {/* Display user's photo in a circle */}
                {/*<Box
                              component="img"
                              // src={
                              //   "https://drive.google.com/thumbnail?id=1cPyIpmPL-n24bhuBv7XPzP2hXmS5E7FD&sz=w1000"
                              // }
                              src={"./studentEmoji.png"}
                              alt={selectedLoan?.name}
                              sx={{
                                width: { xs: 60, sm: 100 },
                                height: { xs: 60, sm: 100 },
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />*/}

                {/* Display user details */}

                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>User Code:</strong> {selectedLoan?.loanId ?? "-"}
                </Typography>

                <Typography
                  variant="body1"
                  xs={12}
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Full Name:</strong> {selectedLoan?.fullName ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Status:</strong> {selectedLoan?.status ?? "-"}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong> Branch code:</strong>{" "}
                  {selectedLoan?.branchCode ?? "-"}
                </Typography>
                <Typography variant="body1">
                  <strong>Father:</strong> {selectedLoan?.careOf}
                </Typography>
                <Typography variant="body1">
                  <strong>Branch:</strong> {selectedLoan?.branchCode}
                </Typography>
                <Typography variant="body1">
                  <strong>RefferedBY:</strong> {selectedLoan?.refferedBY}
                </Typography>

                <Typography variant="body1">
                  <strong>Email:</strong> {selectedLoan.email}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Mobile:</strong> {selectedLoan?.mobile ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Address:</strong> {selectedLoan?.address ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>Pincode:</strong> {selectedLoan?.pincode ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>loanDetails:</strong>{" "}
                  {JSON.stringify(selectedLoan?.loanDetails) ?? "-"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "12px", md: "15px", lg: "18px" },
                  }}
                >
                  <strong>payDetails:</strong>{" "}
                  {JSON.stringify(selectedLoan?.payDetails) ?? "-"}
                </Typography>

                {/* <Box>
                        <Button variant="outlined">Edit</Button>
                      </Box> */}
              </Box>
            </Box>
          </Dialog>
        )}
      </div>
    );
  };

  const Dashboard = () => {
    // Carousel images
    const carouselImages = [
      {
        label: "Welcome Goldnoon Fintech",

        imgPath:
          "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        description: "We deal your financial solutions..",
      },
      {
        label: "One Stop For financial needs",
        imgPath:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ffinancial-planning&psig=AOvVaw2IDSKpFUbkqP0mSy_JToVt&ust=1742367192011000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCVwOSFk4wDFQAAAAAdAAAAABAE",
        description: "Excellence in Learning",
      },
      {
        label: "Empowering with Goldnoon",

        imgPath:
          "https://plus.unsplash.com/premium_photo-1661716853327-a16e87a6dff1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        description: "State-of-the-art Infrastructure",
      },
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = carouselImages.length;

    React.useEffect(() => {
      const timer = setInterval(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
      }, 5000);

      return () => clearInterval(timer);
    }, [maxSteps]);

    return (
      <div>
        <Box
          sx={{
            position: "relative",
            height: { xs: "40vh", sm: "50vh", md: "75vh" },
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              height: "100%",
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${carouselImages[activeStep].imgPath})`,
              transition: "background-image 0.5s ease-in-out",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,.5)",
              }}
            />
            <Container
              maxWidth="md"
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Typography
                variant="body"
                component="h3"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.75rem", sm: "3rem", md: "3.75rem" },
                }}
              >
                {carouselImages[activeStep].label}
              </Typography>
              {activeStep == 0 && (
                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                      md: "1.5rem",
                    },

                    color: theme.appBarColor,
                  }}
                >
                  {carouselImages[activeStep].description}
                </Typography>
              )}
              {activeStep == 1 && (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    setCustomerSignUPDialogOpen(true);
                  }}
                  sx={{
                    color: theme.appBarColor,
                    // bgcolor: theme.appBarColor,
                  }}
                >
                  New Customer
                </Button>
              )}
              {activeStep == 2 && (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    setShareInterestDialogOpen(true);
                  }}
                  sx={{
                    color: theme.appBarColor,
                    // bgcolor: theme.appBarColor,
                  }}
                >
                  Become a Partner
                </Button>
              )}
            </Container>
          </Paper>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              position: "absolute",
              bottom: 0, // You can adjust the bottom distance as needed
              left: "50%", // Centers horizontally
              transform: "translateX(-50%)", // Ensures the element is centered by shifting it back by 50%
              width: "auto", // Use auto or a fixed width if needed
              background: "transparent",
            }}
          />
        </Box>

        {/* Customer My Loans and apply Loans section */}
        {loginData?.role == "customer" && (
          <Box
            sx={{
              // bgcolor: "grey.100",
              pt: 0,
              mb: 1,
              display: "flex",
              justifyContent: "center",
            }}
            gap={2}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
                cursor: "pointer",
                backgroundColor: theme.appBarColor,
                color: "white",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                // },
              }}
              onClick={() => {
                setBodyarea("Loans");
                // setCustomerSignUPDialogOpen(true);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  people
                </span>
                <Typography variant="h6">My Loans</Typography>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
                cursor: "pointer",
                backgroundColor: theme.appBarColor,
                color: "white",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                // },
              }}
              onClick={() => {
                setBodyarea("ApplyLoan");
                // setShareInterestDialogOpen(true);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  forward
                </span>
                <Typography variant="h6">Apply Loan</Typography>
              </Box>
            </Card>
          </Box>
        )}
        {/* Customer My Loans and apply Loans section */}
        {loginData?.role.toLowerCase() == "sales" && (
          <Box
            sx={{
              // bgcolor: "grey.100",
              pt: 0,
              mb: 1,
              display: "flex",
              justifyContent: "center",
            }}
            gap={2}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
                cursor: "pointer",
                backgroundColor: theme.appBarColor,
                color: "white",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                // },
              }}
              onClick={() => {
                setBodyarea("SalesReports");
                // setCustomerSignUPDialogOpen(true);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  people
                </span>
                <Typography variant="h6">Sales Reports</Typography>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
                cursor: "pointer",
                backgroundColor: theme.appBarColor,
                color: "white",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                // },
              }}
              onClick={() => {
                setBodyarea("SalesBoard");
                // setShareInterestDialogOpen(true);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  forward
                </span>
                <Typography variant="h6">Sales Board</Typography>
              </Box>
            </Card>
          </Box>
        )}
        {/* Customer My Loans and apply Loans section */}
        {loginData?.role.toLowerCase() == "admin" && (
          <Box
            sx={{
              // bgcolor: "grey.100",
              pt: 0,
              mb: 1,
              display: "flex",
              justifyContent: "center",
            }}
            gap={2}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
                cursor: "pointer",
                backgroundColor: theme.appBarColor,
                color: "white",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                // },
              }}
              onClick={() => {
                setBodyarea("AllCustomers");
                // setCustomerSignUPDialogOpen(true);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  people
                </span>
                <Typography variant="h6">All Customers</Typography>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                margin: 1,
                cursor: "pointer",
                backgroundColor: theme.appBarColor,
                color: "white",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.1)",
                // },
              }}
              onClick={() => {
                setBodyarea("AllLoans");
                // setShareInterestDialogOpen(true);
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  forward
                </span>
                <Typography variant="h6">All Loans</Typography>
              </Box>
            </Card>
          </Box>
        )}

        {/* News & Updates */}
        <Box sx={{ bgcolor: "grey.100", py: 2 }}>
          <Container maxWidth="lg">
            <Typography
              variant="body"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                position: "relative",
                // "&:after": {
                //   content: '""',
                //   position: "absolute",
                //   bottom: "-10px",
                //   left: "50%",
                //   transform: "translateX(-50%)",
                //   width: "60px",
                //   height: "3px",
                //   backgroundColor: "primary.main",
                // },
              }}
            >
              Key Benifits with Goldnoon
            </Typography>
            <div>
              <div className="notification success">
                <span className="icon">✔</span>
                Customized Loan Offers..
              </div>

              <div className="notification error">
                <span className="icon">✔</span> Online & mobile access..
                {/*<span className="icon">✘ ⚠ℹ</span> Minimal Documents*/}
              </div>

              <div className="notification warning">
                <span className="icon">✔</span> Quick Disbursement..
              </div>

              <div className="notification general">
                <span className="icon">✔</span> Minimal Documents..
              </div>
            </div>
          </Container>
        </Box>

        {/* Achievements Section */}

        <Box
          sx={{
            flexGrow: 1,
            overflowX: "auto",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          <Container
            // maxWidth="lg"
            // maxWidth={false}

            sx={{
              display: "inline-block",
              // minWidth: "200px",
              // maxWidth: {
              //   xs: "320px", // Full width on extra-small screens
              //   sm: "450px", // 450px on small screens
              //   md: "768px", // 600px on medium screens
              //   lg: "1024px", // 800px on large screens
              // },
              my: 2,

              position: "relative",
              "& .MuiContainer-root": {
                overflowX: "auto",
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 4,
                fontSize: { xs: "1.25rem", sm: "2rem", md: "2.25rem" },
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  backgroundColor: theme.appBarColor,
                },
              }}
            >
              Our Founders & Achievements
            </Typography>

            <Box sx={{ position: "relative" }}>
              <IconButton
                sx={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "white",
                  boxShadow: 2,
                  "&:hover": { backgroundColor: "grey.100" },
                  zIndex: 2,
                }}
                onClick={() => {
                  const container = document.getElementById(
                    "achievements-scroll"
                  );
                  container.scrollBy({ left: -300, behavior: "smooth" });
                }}
              >
                <span className="material-icons">chevron_left</span>
              </IconButton>

              <Box
                id="achievements-scroll"
                sx={{
                  display: "flex",
                  overflowX: "auto",
                  gap: 3,
                  pb: 2,
                  scrollBehavior: "smooth",
                  "&::-webkit-scrollbar": { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    sx={{
                      minWidth: 300,
                      maxWidth: 300,
                      height: "200px",
                      flex: "0 0 auto",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: achievement.isViewMore
                          ? "translateY(-5px)"
                          : "translateY(-5px)",
                        boxShadow: 3,
                      },
                      ...(achievement.isViewMore && {
                        backgroundColor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-5px)",
                          boxShadow: 3,
                        },
                      }),
                    }}
                  >
                    {achievement.isViewMore ? (
                      <CardContent
                        sx={{
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          padding: "24px",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                            transition: "all 0.3s ease",
                          }}
                        >
                          <span
                            className="material-icons"
                            style={{ fontSize: "40px" }}
                          >
                            {achievement.icon}
                          </span>
                        </Box>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ mt: 2, fontWeight: "bold" }}
                        >
                          {achievement.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ mt: 1, opacity: 0.9 }}
                        >
                          Click to explore more achievements
                        </Typography>
                      </CardContent>
                    ) : (
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          padding: "24px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "primary.main",
                              borderRadius: "50%",
                              p: 1,
                              mr: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              className="material-icons"
                              style={{ color: "white" }}
                            >
                              {achievement.icon}
                            </span>
                          </Box>
                          <Typography variant="h6" component="div">
                            {achievement.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {achievement.date}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {achievement.description}
                        </Typography>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </Box>

              <IconButton
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "white",
                  boxShadow: 2,
                  "&:hover": { backgroundColor: "grey.100" },
                  zIndex: 2,
                }}
                onClick={() => {
                  const container = document.getElementById(
                    "achievements-scroll"
                  );
                  container.scrollBy({ left: 300, behavior: "smooth" });
                }}
              >
                <span className="material-icons">chevron_right</span>
              </IconButton>
            </Box>
          </Container>
        </Box>

        {/* SCroll with marquee */}
        <Box
          style={{
            fontSize: "12px",
            // paddingTop: "6px",
            // backgroundColor: "#25D366",
            color: "white",
            // "&:hover": {
            //   fontSize: "12px",
            // },
          }}
        >
          <marquee behavior="scroll" direction="left">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "grey.200",
                  p: 2,
                  borderRadius: 1,
                  textAlign: "center",
                  flex: 1,
                  mx: 1,
                }}
              >
                <Typography variant="h6" color={theme.appBarColor}>
                  Partner 1
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "grey.200",
                  p: 2,
                  borderRadius: 1,
                  textAlign: "center",
                  flex: 1,
                  mx: 1,
                }}
              >
                <Typography variant="h6" color={theme.appBarColor}>
                  Partner 2
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "grey.200",
                  p: 2,
                  borderRadius: 1,
                  textAlign: "center",
                  flex: 1,
                  mx: 1,
                }}
              >
                <Typography variant="h6" color={theme.appBarColor}>
                  Partner 3
                </Typography>
              </Box>
            </Box>
          </marquee>
        </Box>

        {/* New Customer and Become apartner button */}
        <Box
          sx={{
            bgcolor: "grey.100",
            pt: 2,
            display: "flex",
            justifyContent: "center",
          }}
          gap={2}
        >
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: theme.appBarColor,
              // bgcolor: theme.appBarColor,
            }}
            onClick={() => {
              setCustomerSignUPDialogOpen(true);
            }}
          >
            New Customer
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: theme.appBarColor,
              // bgcolor: theme.appBarColor,
            }}
            onClick={() => {
              setShareInterestDialogOpen(true);
            }}
          >
            Become a Partner
          </Button>
        </Box>

        {/* About Us Section */}
        <Box sx={{ py: 2, bgcolor: "grey.100" }}>
          <Container maxWidth="lg">
            {/*<Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                          textAlign: "center",
                          mb: 4,
                          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
                          position: "relative",
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            bottom: "-10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "60px",
                            height: "3px",
                            backgroundColor: "primary.main",
                          },
                        }}
                      >
                        About Us
                      </Typography>*/}

            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={{
                minHeight: {
                  xs: "400px", // Minimum height for extra small screens
                  sm: "500px", // Minimum height for small screens
                  md: "600px", // Minimum height for medium and larger screens
                },
                height: "100%", // Ensure it takes full height of its container
              }}
            >
              {/* School History */}
              <Grid item xs={12} md={12}>
                <Card
                  sx={{
                    // height: "100%",
                    // height: { xs: 10, sm: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 2, sm: 2, md: 3 },
                    // m: { xs: 2, sm: 2, md: 3 },

                    fontSize: {
                      xs: "0.875rem", // Extra small screens
                      sm: "1rem", // Small screens
                      md: "1.125rem", // Medium and larger screens
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom color="primary">
                    Our Motive
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We Established in 2020, with a strong motive to empowering
                    individuals and Businesses with seamles financial solutions
                    as a trusted financial Organization. We Offers a wind range
                    of Loan Products, Investiments opportunities, and wealth
                    Management service to meet financial needs
                  </Typography>
                </Card>
              </Grid>

              {/* Google Map */}
              <Grid item xs={12} md={12}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      minHeight: "300px",
                      width: "100%",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60710.79354192987!2d79.51014090191924!3d18.005488225693174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f75c05023ed%3A0x2352eaaf6fe897ea!2sHanamkonda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1741608615942!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Our Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Main Branch Located in Hanamkonda, Warangal. Sub branches
                      where placed in Multiple cities.
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          id="contact-section"
          sx={{ bgcolor: "primary.main", color: "white", py: 6, mt: 4 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#FFD700",
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  <span className="material-icons">contact_support</span>
                  Contact Us
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      location_on
                    </span>
                    <Typography variant="body2">
                      Company
                      <br />
                      Goldnoon Fintech
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      phone
                    </span>
                    <Typography
                      variant="body2"
                      component="a"
                      href="tel:+91 9676639383"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      +91 9676639383
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      email
                    </span>
                    <Typography
                      variant="body2"
                      component="a"
                      href="mailto:goldnoon@gmail.com"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      goldnoon@gmail.com
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <span
                      className="material-icons"
                      style={{ fontSize: "20px" }}
                    >
                      schedule
                    </span>
                    <Typography variant="body2">
                      Monday - Saturday
                      <br />
                      10:00 AM - 6:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: {
                    xs: "none", // Hidden on extra-small screens
                    md: "block", // Visible on small screens and up
                    sm: "none", // Visible on small screens and up
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#98FB98",
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  <span className="material-icons">link</span>
                  Quick Links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {[
                    "Admissions",
                    "Academic Calendar",
                    "Facilities",
                    "Staff Directory",
                  ].map((link, linkindex) => (
                    <Typography
                      key={linkindex}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          paddingLeft: "10px",
                          color: "#98FB98",
                        },
                      }}
                    >
                      <span
                        className="material-icons"
                        style={{ fontSize: "8px" }}
                      >
                        circle
                      </span>
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#FF69B4",
                    fontWeight: "bold",
                    marginBottom: 3,
                  }}
                >
                  <span className="material-icons">share</span>
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    {
                      icon: "facebook",
                      name: "Facebook",
                      link: "https://facebook.com",
                    },
                    {
                      icon: "spatial_tracking",
                      name: "X (Twitter)",
                      link: "https://twitter.com",
                    },
                    {
                      icon: "photo_camera",
                      name: "Instagram",
                      link: "https://instagram.com",
                    },
                    {
                      icon: "play_circle",
                      name: "YouTube",
                      link: "https://youtube.com",
                    },
                    {
                      icon: "work",
                      name: "LinkedIn",
                      link: "https://linkedin.com",
                    },
                  ].map((social, socialindex) => (
                    <Button
                      key={socialindex}
                      href={social.link}
                      target="_blank"
                      startIcon={
                        <span className="material-icons">{social.icon}</span>
                      }
                      sx={{
                        color: "white",
                        border: { xs: "", sm: "2px solid white" },
                        borderRadius: { xs: "50%", sm: "20px" },
                        px: 2,
                        py: 0,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "primary.main",
                        },
                      }}
                    >
                      <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {social.name}
                      </Box>
                    </Button>
                  ))}
                </Box>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Stay connected with us on social media for the latest updates
                  and news.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    pt: 2,
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">
                    © 2025 All rights reserved.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    );
  };

  function handleClick(view) {
    setBodyarea((pre) => view);
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={() => handleClick("Dashboard")}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      // href="/material-ui/getting-started/installation/"
      onClick={() => {
        handleClick("Sales");
      }}
    >
      Management
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      // href="/material-ui/getting-started/installation/"
      onClick={() => {
        handleClick("SalesReports");
      }}
    >
      Sales Report
    </Link>,
  ];
  const [customerSignUPDialogOpen, setCustomerSignUPDialogOpen] =
    useState(false);
  const [shareInterestDialogOpen, setShareInterestDialogOpen] = useState(false);
  const [interestForm, setInterestForm] = useState(false);
  // const [bodyarea, setBodyarea] = useState("SalesReports");
  // const [bodyarea, setBodyarea] = useState("SalesBoard");
  const [bodyarea, setBodyarea] = useState("Dashboard");
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const [loginUser, setLoginUser] = useState("");
  const [isOtpMode, setIsOtpMode] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const [loginData, setLoginData] = useState(null);
  const [newCustomer, setNewCustomer] = useState(null);

  const [user, setUser] = useState({
    fullName: "",
    gender: "",
    father: "",
    email: "",
    phone: "",
    profession: "",
    branch: "",
    role: "",
    address: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "userId":
        if (!value) newErrors.userId = "user ID is required.";
        else delete newErrors.userId;
        break;
      // case "surname":
      //   if (!value) newErrors.surname = "Surname is required.";
      //   else delete newErrors.surname;
      //   break;
      case "fullName":
        if (!value) newErrors.fullName = "Name is required.";
        else delete newErrors.fullName;
        break;
      case "email":
        if (!value) {
          newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email is invalid.";
        } else {
          delete newErrors.email;
        }
        break;
      // case "phone":
      //   if (!value) {
      //     newErrors.phone = "Phone number is required.";
      //   } else if (!/^\d{10}$/.test(value)) {
      //     newErrors.phone = "Phone number must be 10 digits.";
      //   } else {
      //     delete newErrors.phone;
      //   }
      //   break;
      // case "address":
      //   if (!value) newErrors.address = "Address is required.";
      //   else delete newErrors.address;
      //   break;
      //   case "profession":
      //     if (!value) newErrors.profession = "Profession is required.";
      //     else delete newErrors.profession;
      //     break;
      // case "father":
      //   if (!value) newErrors.father = "Gardian name is required.";
      //   else delete newErrors.father;
      //   break;
      // case "profession":
      //   if (!value)
      //     newErrors.profession = "profession's name is required.";
      //   else delete newErrors.profession;
      //   break;
      // case "role":
      //   if (!value) newErrors.role = "Batch Year is required.";
      //   else if (!/^\d{4}$/.test(value)) {
      //     newErrors.role = "Batch Year must be a 4-digit year.";
      //   } else {
      //     delete newErrors.role;
      //   }
      //   break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });

    validateField(name, value); // validate each field on change
  };

  const NewCustomerhandleSubmit = (event) => {
    event.preventDefault();
    console.log("user", user);
    console.log("errors", errors);
    try {
      if (
        Object.keys(errors).length === 0
        // &&
        // Object.values(user).every((val) => val !== "")
      ) {
        console.log("users", users);

        const newCustomer = {
          ...user,
          role: "customer",

          theme: "",
          active: true,
          joinDate: new Date(),
          branchCode: "GNB01",
        };
        console.log("newCustomer", newCustomer);
        customers.push(newCustomer);

        // axios
        //   .post(`${baseURL}/new-enroll`, user)

        //   .then((res) => {
        //     alert(res.data.message);
        //     if (res.data.message != "Same details enrolled") {
        //       setShowList(true);
        //       fetchListDate();
        //     }
        //   })
        //   .catch((error) => {
        //     // setShowList(true);
        //     // setShowList(false);
        //     // alert("catch", error);
        //     alert(error.message);
        //     console.log("Error occurred:", error);
        //   });

        // setShowList(true);

        localStorage.setItem(
          "gnUserObj",
          JSON.stringify({
            ...newCustomer,
          })
        );
        setLoginData(newCustomer);

        window.location.reload();
      } else {
        alert("some fileds missing");
      }
    } catch (err) {
      console.log("err", err);
    }
    // Final validation before submission
  };

  const [open, setOpen] = useState(false); // profle popup
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [theme, setTheme] = useState(themes.orange);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  const notifications = [
    {
      title: "Notification",
      details: "This is the first notification",
      icon: "info",
      severity: "info",
    },
    {
      title: "Notification",
      details: "This is the second notification",
      icon: "warning",
      severity: "warning",
    },
    {
      title: "Notification",
      details: "This is the third notification",
      icon: "error",
      severity: "error",
    },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleNotificationsToggle = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleLoginDialogToggle = () => {
    setLoginDialogOpen(!loginDialogOpen);
  };
  const handleClickDashboardMenu = () => {
    setBodyarea("Dashboard");
    setOpen(false);
  };
  const handleClickSalesMenu = () => {
    setBodyarea("Sales");
    setOpen(false);
  };
  const handleClickCustomersMenu = () => {
    setBodyarea("Customers");
    setOpen(false);
  };

  const handleLoginSubmit = () => {
    console.log("Login submitted");
    console.log("loginUser", loginUser, password, otp);

    axios
      .post(`${baseURL}/gn-login`, {
        user: loginUser,
        passcode: password,
        otp: "",
        passcodetype: "password",
      })

      .then((res) => {
        // alert(res.data.message);
        if (res.data.success) {
          localStorage.setItem(
            "gnUserObj",
            JSON.stringify({
              ...res.data.data,
            })
          );

          setLoginData(res.data.data);
          handleLoginDialogToggle();
          window.location.reload();
          setLoginUser("");
          setPassword("");
          setOtp("");
        } else {
          // alert("User not found");
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log("Error occurred:", error);
      });

    // let loginUserObj = null;
    // loginUserObj =
    //   users.find(
    //     (user) =>
    //       user.mobile == loginUser ||
    //       user.id.toLowerCase() == loginUser.toLowerCase() ||
    //       user.email.toLowerCase() == loginUser.toLowerCase()
    //   ) ?? null;
    // console.log("loginUser1", loginUserObj);
    // if (!loginUserObj) {
    //   loginUserObj =
    //     customers.find(
    //       (user) =>
    //         user.mobile == loginUser ||
    //         user.id.toLowerCase() == loginUser.toLowerCase() ||
    //         user.email.toLowerCase() == loginUser.toLowerCase()
    //     ) ?? null;
    //   console.log("loginUser2", loginUserObj);
    // }
    // if (loginUserObj) {
    //   localStorage.setItem(
    //     "gnUserObj",
    //     JSON.stringify({
    //       ...loginUserObj,
    //     })
    //   );

    //   setLoginData(loginUserObj);
    //   handleLoginDialogToggle();
    //   window.location.reload();
    //   setLoginUser("");
    //   setPassword("");
    //   setOtp("");
    // } else {
    //   alert("User not found");
    // }
  };

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      // Add your logout logic here (e.g., clear user session, redirect, etc.)
      console.log("User logged out");
      setLoginData(null);
      window.location.reload();

      localStorage.removeItem("gnUserObj");
    }
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: "home",
      list: ["all"],
      role: "all",
      path: "/dashboard",
      clickfunc: handleClickDashboardMenu,
    },
    // { text: "My Page", icon: "article", role: "all,sales ", path: "/my-page" },
    {
      text: "admins",
      icon: "people",
      list: ["admins"],
      role: "admin",
      path: "/",
    },
    {
      text: "Sales Members",
      icon: "people",
      role: "admin",
      list: ["admin"],

      path: "/",
      clickfunc: handleClickSalesMenu,
    },
    {
      text: "Sales board",
      icon: "people",
      role: "admin",
      list: ["admin", "manager", "sales"],

      path: "/",
      clickfunc: () => {
        setBodyarea("SalesBoard");
        setOpen(false);
      },
    },

    {
      text: "Sales Reports",
      icon: "article",
      role: "sales",
      list: ["sales", "manager"],

      path: "/",
      clickfunc: () => {
        setBodyarea("SalesReports");
        setOpen(false);
      },
    },

    {
      text: "All Customers",
      icon: "people",
      role: "admin",
      list: ["admin", "sales"],

      path: "/",
      clickfunc: handleClickCustomersMenu,
    },

    // { text: "Sales Targets", icon: "article", role: "sales", path: "/" },
    {
      text: "Apply Loan",
      icon: "article",
      role: "customer",
      list: ["customer"],

      path: "/",
      clickfunc: () => {
        setBodyarea("ApplyLoan");
        setOpen(false);
      },
    },
    {
      text: "All loans",
      icon: "article",
      role: "customer",
      list: ["admin", "sales"],
      path: "/",
      clickfunc: () => {
        setBodyarea("AllLoans");
        setOpen(false);
      },
    },

    {
      text: "Reffer A Friend",
      icon: "people",
      role: "all",
      list: ["all"],

      path: "/",
      clickfunc: () => {
        alert("This feature Under Developemet");
      },
    },
    {
      text: "Company Reviews",
      icon: "message",
      list: ["all"],

      role: "all",
      badge: 4,
      path: "/reviews",
    },
    {
      text: "About Us",
      icon: "message",
      role: "all",
      list: ["all"],

      path: "/about",
      clickfunc: handleClickDashboardMenu,
    },
    {
      text: "Contact Us",
      icon: "people",
      role: "all",
      list: ["all"],

      path: "/contact",
      clickfunc: handleClickDashboardMenu,
    },
    {
      text: "Terms & Conditions",
      icon: "video_library",
      role: "all",
      list: ["all"],

      path: "/terms",
      clickfunc: handleClickDashboardMenu,
    },

    // {
    //   text: "Profile",
    //   icon: "people",
    //   role: "all",
    //   list: ["all"],

    //   path: "/profile",
    //   clickfunc: handleDialogToggle,
    // },
    {
      text: "Settings",
      icon: "settings",
      role: "all",
      list: ["all"],

      path: "/settings",

      clickfunc: handleSettingsToggle,
    },
    {
      text: "New Customer",
      icon: "logout",
      role: "customer",
      list: ["customer"],

      path: "/",
      clickfunc: () => setCustomerSignUPDialogOpen(true),
    },

    {
      text: "Become a Partner",
      icon: "logout",
      role: "all",
      path: "/",
      list: ["all"],

      clickfunc: () => {
        // alert("in Progress to fill form");
        setShareInterestDialogOpen(true);
      },
    },

    // {
    //   text: loginData?.name ? "Logout" : "Login",
    //   icon: "logout",
    //   role: "all",
    //   path: "/",
    //   clickfunc: loginData ? logout : handleLoginDialogToggle,
    // },
  ];

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("gnUserObj"));
    console.log("storedData", storedData);
    if (storedData) {
      setLoginData(storedData);
      setFilteredMenuItems((pre) =>
        menuItems.filter(
          (item) =>
            // item.role.toLowerCase() === "all" ||
            // item.role.toLowerCase() === storedData.role.toLowerCase()
            item.list.includes("all") ||
            item.list.includes(storedData.role.toLowerCase())
        )
      );
    } else {
      setLoginData(null);
      setFilteredMenuItems((pre) =>
        menuItems.filter((item) => item.role === "all")
      );
    }
    document.body.style.color = theme.textColor;
    document.body.className = theme.name.toLowerCase();
  }, [theme]);

  return (
    <Box sx={{ display: "flex" }}>
      {console.log("loginData", loginData)}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.appBarColor,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <span className="material-icons">menu</span>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => {
              setBodyarea("Dashboard");
            }}
          >
            Goldnoon
            <span style={{ fontSize: "8px" }}>
              {" "}
              {loginData?.role ? `(${loginData?.role})` : ``}
            </span>
          </Typography>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            {loginData ? (
              <Box
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    color="inherit"
                    onClick={handleNotificationsToggle}
                  >
                    <span className="material-icons">notifications</span>
                    <Box
                      sx={{
                        backgroundColor: "orange",
                        borderRadius: "50%",
                        padding: "1px 4px",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        fontSize: "0.75rem",
                      }}
                    >
                      3
                    </Box>
                  </IconButton>
                </Box>
                <div onClick={handleDialogToggle}>
                  <Tooltip title="User Name" arrow>
                    <Avatar
                      alt="User Name"
                      src="../files/doctor.png"
                      sx={{ width: 40, height: 40, marginLeft: 1 }}
                    />
                  </Tooltip>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 18,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "green",
                      border: "2px solid white",
                    }}
                  />
                </div>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<span className="material-icons">login</span>}
                sx={{
                  ml: 1,
                  borderRadius: "20px",
                  textTransform: "none",
                  backgroundColor: "white",
                  color: theme.appBarColor,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    transform: "scale(1.02)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => {
                  // Add your login logic here
                  console.log("Login clicked");
                  handleLoginDialogToggle();
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {filteredMenuItems.map((item, index) => (
              <ListItem
                button
                key={item.text}
                onClick={() => (item.clickfunc ? item.clickfunc() : null)}
              >
                <ListItemIcon>
                  <span
                    className="material-icons"
                    // style={{ color: "#3f51b5" }}
                    style={{ color: theme.drawerColor }}
                  >
                    {item.icon}
                  </span>
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontSize: item.fontSize || "inherit",
                    color: theme.drawerColor,
                  }}
                />
                {item.badge && (
                  <Box
                    sx={{
                      backgroundColor: "yellow",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      marginLeft: "auto",
                    }}
                  >
                    {item.badge}
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0.5, m: 0, width: "100%" }}>
        <Toolbar />
        {/*<Stack spacing={2}>
                <Breadcrumbs
                  // separator={<NavigateNextIcon fontSize="small" />}
                  separator="›"
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <hr />*/}
        {/* {bodyarea == "SalesReports" && <SalesReports />} */}
        {/* {bodyarea == "SalesBoard" && <Leaderboard />} */}
        {bodyarea == "AllLoans" && <AllLoans />}
        {/*{bodyarea == "Loans" && <Loans />}*/}
        {bodyarea == "Loans" && <AllLoans />}
        {/* {bodyarea == "ApplyLoan" && <ApplyLoan />} */}
        {bodyarea == "Dashboard" && <Dashboard />}

        {/* {bodyarea == "AllCustomers" && <Management2 />} */}
        {/* {bodyarea == "Customers" && <Management2 />} */}
        {bodyarea == "Sales" && <Management />}
      </Box>
      <Dialog // profile dialog
        open={dialogOpen}
        onClose={handleDialogToggle}
        // sx={{ backgroundColor: theme.appBarColor }}
        fullWidth
      >
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "16px",
              // backgroundColor: "#3f51b5",
              backgroundColor: theme.appBarColor,
              color: "#fff",
              borderRadius: "8px",
              boxShadow: 3,
            }}
          >
            <Avatar
              alt="Gene A. Stepp"
              src="../files/doctor.png"
              sx={{
                p: 1,
                width: 56,
                height: 56,
                border: "2px dashed #fff",
              }}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {loginData?.fullName ?? ""}
            </Typography>
            <Typography variant="body2">
              Role : {loginData?.role ?? ""}
            </Typography>
            <Typography variant="body2">
              Id : {loginData?.userId ?? ""}
            </Typography>
            <Typography variant="body2">
              mobile : {loginData?.mobile ?? ""}
            </Typography>
            <Typography variant="body2">{loginData?.email ?? ""}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                handleDialogToggle();
                logout();
              }}
              sx={{
                color: theme.appBarColor,
                borderColor: theme.appBarColor,
                "&:hover": {
                  borderColor: theme.appBarColor,
                  backgroundColor: `${theme.appBarColor}10`,
                },
              }}
            >
              Log out
            </Button>
            <Button
              variant="contained"
              onClick={handleDialogToggle}
              sx={{
                backgroundColor: theme.appBarColor,
                "&:hover": {
                  backgroundColor: theme.appBarColor,
                  opacity: 0.9,
                },
              }}
            >
              Close
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      <Dialog // notification dialog
        open={notificationsOpen}
        onClose={handleNotificationsToggle}
        fullWidth
      >
        <DialogTitle>Recent Notifications</DialogTitle>
        <DialogContent>
          <List>
            {notifications.map((notification, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                  mb: 1,
                  p: 2,
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor:
                      notification.severity === "error"
                        ? "#f44336"
                        : notification.severity === "warning"
                        ? "#ff9800"
                        : "#2196f3",
                    width: 32,
                    height: 32,
                  }}
                >
                  <span className="material-icons" style={{ fontSize: "16px" }}>
                    {notification.icon}
                  </span>
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {notification.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {notification.details}
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => {
                    console.log("Clicked notification Close icon");
                    /* Dismiss logic here */
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <span className="material-icons">close</span>
                </IconButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleNotificationsToggle}
            sx={{
              color: theme.appBarColor,
              "&:hover": {
                backgroundColor: `${theme.appBarColor}10`,
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog // settings dialog
        open={settingsOpen}
        onClose={handleSettingsToggle}
        fullWidth
      >
        <DialogTitle
          sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
        >
          Choose Theme & Language
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pt: 1,
            }}
          >
            <FormControl>
              <InputLabel id="theme-select-label">Theme</InputLabel>
              <Select
                label="Theme"
                labelId="theme-select-label"
                value={theme.name}
                onChange={(e) => setTheme(themes[e.target.value])}
              >
                {Object.keys(themes).map((key) => (
                  <MenuItem key={key} value={key}>
                    {themes[key].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                labelId="language-select-label"
                defaultValue=""
                label="Language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                <MenuItem value="fr">French</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSettingsToggle}
            sx={{
              color: theme.appBarColor,
              "&:hover": {
                backgroundColor: `${theme.appBarColor}10`,
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog // login dashboard
        open={loginDialogOpen}
        onClose={handleLoginDialogToggle}
        fullWidth
      >
        <DialogTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>Login</Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                console.log("Open a popup for new customer sign up");
                handleLoginDialogToggle();
                setCustomerSignUPDialogOpen(true);
              }}
              sx={{
                color: theme.appBarColor,
                "&:hover": {
                  backgroundColor: `${theme.appBarColor}10`,
                },
              }}
            >
              New Customer
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              // pt: 2,
            }}
          >
            <TextField
              // label="User "
              placeholder="Enter ID or email or Mobile number"
              type="text" // once entered it will check for validation
              fullWidth
              variant="outlined"
              // autoFocus

              // margin="dense"
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
              // error={!loginUser && loginSubmitted}
              // helperText={
              //   !loginUser && loginSubmitted ? "user is required" : ""
              // }
            />

            <FormControl component="fieldset">
              <Typography variant="body2" sx={{ mb: 1 }}>
                Authentication Method
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  onClick={() => setIsOtpMode(false)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    // padding: "8px 16px",
                    // border: "1px solid #ccc",
                    // borderRadius: "4px",
                    cursor: "pointer",
                    backgroundColor: !isOtpMode ? "#e3f2fd" : "transparent",
                    borderColor: !isOtpMode ? "#2196f3" : "#ccc",
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ color: !isOtpMode ? "#2196f3" : "inherit" }}
                  >
                    {!isOtpMode
                      ? "radio_button_checked"
                      : "radio_button_unchecked"}
                  </span>
                  <Typography>Password</Typography>
                </Box>
                <Box
                  onClick={() => setIsOtpMode(true)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    // padding: "8px 16px",
                    // border: "1px solid #ccc",
                    // borderRadius: "4px",
                    cursor: "pointer",
                    backgroundColor: isOtpMode ? "#e3f2fd" : "transparent",
                    borderColor: isOtpMode ? "#2196f3" : "#ccc",
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ color: isOtpMode ? "#2196f3" : "inherit" }}
                  >
                    {isOtpMode
                      ? "radio_button_checked"
                      : "radio_button_unchecked"}
                  </span>
                  <Typography>OTP</Typography>
                </Box>
              </Box>
            </FormControl>

            {!isOtpMode ? (
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <TextField
                label="OTP"
                type="number"
                fullWidth
                variant="outlined"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}

            {/*<Button sx={{ alignSelf: "flex-start" }} color="primary">
                          Forgot Password?
                        </Button>*/}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleLoginDialogToggle}
            sx={{
              color: theme.appBarColor,
              "&:hover": {
                backgroundColor: `${theme.appBarColor}10`,
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleLoginSubmit}
            sx={{
              backgroundColor: theme.appBarColor,
              "&:hover": {
                backgroundColor: theme.appBarColor,
                opacity: 0.9,
              },
            }}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
      {/* Sign In Dialog */}
      <Dialog
        open={customerSignUPDialogOpen}
        onClose={() => setCustomerSignUPDialogOpen(false)}
        fullWidth
      >
        {/*<DialogTitle>New Customer</DialogTitle>*/}
        {/*<DialogContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <TextField
                          label="Full Name"
                          variant="outlined"
                          fullWidth
                          // value={newCustomerName}
                          // onChange={(e) => setNewCustomerName(e.target.value)}
                        />
                        <TextField
                          label="Email"
                          type="email"
                          variant="outlined"
                          fullWidth
                          // value={newCustomerEmail}
                          // onChange={(e) => setNewCustomerEmail(e.target.value)}
                        />
                        <TextField
                          label="Mobile Number"
                          type="tel"
                          variant="outlined"
                          fullWidth
                          // value={newCustomerMobile}
                          // onChange={(e) => setNewCustomerMobile(e.target.value)}
                        />
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setCustomerSignUPDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => {
                          console.log("first");
                        }} // Function to handle sign-in submission
                      >
                        New Login
                      </Button>
                    </DialogActions>*/}

        <Box
          sx={{
            maxWidth: "500px",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: 2,
          }}
        >
          <Typography variant="body" textAlign="center" mb={2}>
            New Customer Form
          </Typography>
          <form onSubmit={NewCustomerhandleSubmit}>
            {/* Full Name */}
            <TextField
              label="Full Name"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />

            {/* Care Of Person */}
            <TextField
              label="Care Of Person"
              name="father"
              value={user.father}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.father)}
              helperText={errors.father}
            />

            {/* Gender Selection */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            {/* Email */}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            {/* Phone */}
            <TextField
              label="Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
            {/* pincode */}
            <TextField
              label="Address"
              name="address"
              value={user.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors?.address)}
              helperText={errors?.address}
            />
            {/* pincode */}
            <TextField
              label="Pincode"
              name="pincode"
              value={user.pincode}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors?.pincode)}
              helperText={errors?.pincode}
            />
            {/* Password */}
            <TextField
              label="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors?.password)}
              helperText={errors?.password}
            />
            {/* CPassword */}
            <TextField
              label="Confirm Password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={Boolean(errors?.cpassword)}
              helperText={errors?.cpassword}
            />

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mt: 3,
              }}
            >
              <Button
                onClick={() => setCustomerSignUPDialogOpen(false)}
                variant="outlined"
                color="secondary"
                fullWidth
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  axios
                    .post(`${baseURL}/add-new-gn-user`, {
                      fullName: user.fullName,
                      userId: "GNC" + user.phone,
                      role: "customer",
                      mobile: user.phone,
                      email: user.email,
                      otp: "123456",
                      loginExpiration: "",
                      password: user.cpassword,
                      address: user.address,
                      roleId: 0,
                      theme: "",
                      active: true,
                      joinDate: "",
                      branchCode: "GNB01",
                      gender: user.gender,
                      careOf: user.father,
                    })

                    .then((res) => {
                      alert(res.data.message);
                      if (res.data.success) {
                        localStorage.setItem(
                          "gnUserObj",
                          JSON.stringify({
                            ...res.data.data,
                          })
                        );

                        setLoginData(res.data.data);
                        handleLoginDialogToggle();
                        window.location.reload();
                        setLoginUser("");
                        setPassword("");
                        setOtp("");
                      } else {
                        // alert("User not found");
                      }
                    })
                    .catch((error) => {
                      alert(error.message);
                      console.log("Error occurred:", error);
                    });
                }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>

      {/* Share Interest Dialog */}
      <Dialog
        open={shareInterestDialogOpen}
        onClose={() => setShareInterestDialogOpen(false)}
        fullWidth
      >
        <DialogTitle>Share Your Interest</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={interestForm.name}
              onChange={(e) =>
                setInterestForm({ ...interestForm, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={interestForm.email}
              onChange={(e) =>
                setInterestForm({
                  ...interestForm,
                  email: e.target.value,
                })
              }
            />
            <TextField
              label="Mobile"
              type="tel"
              variant="outlined"
              fullWidth
              value={interestForm.mobile}
              onChange={(e) =>
                setInterestForm({
                  ...interestForm,
                  mobile: e.target.value,
                })
              }
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={interestForm.address}
              onChange={(e) =>
                setInterestForm({
                  ...interestForm,
                  address: e.target.value,
                })
              }
            />
            <TextField
              label="Note"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={interestForm.note}
              onChange={(e) =>
                setInterestForm({ ...interestForm, note: e.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareInterestDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              // Handle form submission logic here
              console.log("Interest Form Submitted:", interestForm);
              setShareInterestDialogOpen(false);
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;
