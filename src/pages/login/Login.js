// import React, { useState } from "react";
// import {
//     CButton,
//     CCard,
//     CCardBody,
//     CCardGroup,
//     CCol,
//     CContainer,
//     CForm,
//     CInputGroup,
//     CInputGroupPrepend,
//     CInputGroupText,
//     CRow,
// } from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import logo from "../../assets/icons/logo.png";
// import axios from "./../../store/axios";
// import { useForm } from "react-hook-form";
// import { errorAlert } from "../../utils";
// import { Link } from "react-router-dom";
// import { handleLogin } from "../../store/apiCall";

// const Login = ({ history }) => {
//     const [userId, setuserId] = useState("");
//     const [password, setpassword] = useState("");
//     const [loading, setloading] = useState(false);
//     const { register, handleSubmit, errors } = useForm();

//     const handleSignin = () => {
//         setloading(true);
//         axios
//             .post("school/signin", { userID: userId, password })
//             .then((res) => {
//                 const { data } = res;
//                 setloading(false);
//                 if (data.success === true) {
//                     const user = data?.user;
//                     handleLogin(user);
//                     history.push("/");
//                 } else {
//                     console.log(data);
//                     errorAlert(data.error);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setloading(false);
//                 errorAlert("Connection  error try again later");
//             });
//     };

//     return (
//         <div className="c-app c-default-layout flex-row align-items-center">
//             <CContainer>
//                 <CRow className="justify-content-center">
//                     <CCol md="8">
//                         <CCardGroup>
//                             <CCard className="p-4">
//                                 <CCardBody>
//                                     <CForm>
//                                         <h1>Login</h1>
//                                         <p className="text-muted">Sign In to your account</p>
//                                         <CInputGroup className="mb-3">
//                                             <CInputGroupPrepend>
//                                                 <CInputGroupText>
//                                                     <CIcon name="cil-user" />
//                                                 </CInputGroupText>
//                                             </CInputGroupPrepend>
//                                             <input
//                                                 value={userId}
//                                                 className="form-control  col-6"
//                                                 name="userId"
//                                                 ref={register({ required: true })}
//                                                 onChange={(e) => setuserId(e.target.value)}
//                                                 type="text"
//                                                 required
//                                                 placeholder="ID"
//                                                 autoComplete="username"
//                                             />
//                                             <br />
//                                         </CInputGroup>
//                                         {errors.userId && (
//                                             <span className=" form-error text-danger mb-2">
//                                                 This field is required
//                                             </span>
//                                         )}
//                                         <CInputGroup className="mb-4">
//                                             <CInputGroupPrepend>
//                                                 <CInputGroupText>
//                                                     <CIcon name="cil-lock-locked" />
//                                                 </CInputGroupText>
//                                             </CInputGroupPrepend>
//                                             <input
//                                                 type="password"
//                                                 className="form-control  col-6"
//                                                 placeholder="Password"
//                                                 name="password"
//                                                 ref={register({ required: true })}
//                                                 value={password}
//                                                 required
//                                                 onChange={(e) => setpassword(e.target.value)}
//                                                 autoComplete="current-password"
//                                             />
//                                             <br />
//                                         </CInputGroup>
//                                         {errors.password && (
//                                             <span className="form-error text-danger mb-2">
//                                                 This field is required
//                                             </span>
//                                         )}
//                                         <CRow>
//                                             <CCol xs="6" className="mb-3">
//                                                 <Link to="/password/forget">Forget password</Link>
//                                             </CCol>
//                                         </CRow>
//                                         <CRow>
//                                             <CCol xs="6">
//                                                 <p></p>
//                                                 <CButton
//                                                     disabled={loading}
//                                                     onClick={handleSubmit(handleSignin)}
//                                                     type="submit"
//                                                     color="primary"
//                                                     className="px-4"
//                                                 >
//                                                     {loading ? (
//                                                         <>
//                                                             <span
//                                                                 className="spinner-border spinner-border-sm"
//                                                                 role="status"
//                                                                 aria-hidden="true"
//                                                             ></span>
//                                                             <span className="visually-hidden">
//                                                                 Loading...
//                                                             </span>
//                                                         </>
//                                                     ) : (
//                                                         <>Login</>
//                                                     )}
//                                                 </CButton>
//                                             </CCol>
//                                         </CRow>
//                                     </CForm>
//                                 </CCardBody>
//                             </CCard>
//                             <CCard
//                                 className="text-white bg-primary py-5 d-md-down-none"
//                                 style={{ width: "44%" }}
//                             >
//                                 <CCardBody className="text-center">
//                                     <div>
//                                         <img src={logo} alt="logo" height={120} style={{ display: 'block', marginBottom: '40px', marginLeft: '20px' }} />

//                                         <h2>Welcome Back</h2>
//                                         <p>
//                                             Welcome to Dreams CloudTech sit amet, consectetur adipisicing elit,
//                                             sed do eiusmod tempor incididunt ut labore et dolore magna
//                                             aliqua.
//                                         </p>
//                                     </div>
//                                 </CCardBody>
//                             </CCard>
//                         </CCardGroup>
//                     </CCol>
//                 </CRow>
//             </CContainer>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import backgroundImage from "./School.jpg";
import logo from "../../assets/icons/logo.png";
import axios from "./../../store/axios";
import { useForm } from "react-hook-form";
import { errorAlert } from "../../utils";
import { Link } from "react-router-dom";
import { handleLogin } from "../../store/apiCall";

const Login = ({ history }) => {
    const [userId, setuserId] = useState("");
    const [password, setpassword] = useState("");
    // const [role, setRole] = useState("student"); // Default role
    const [loading, setloading] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const handleSignin = () => {
        setloading(true);
        axios
            .post("school/signin", { userID: userId, password, })
            .then((res) => {
                const { data } = res;
                setloading(false);
                if (data.success === true) {
                    const user = data?.user;
                    handleLogin(user);
                    history.push("/");
                } else {
                    console.log(data);
                    errorAlert(data.error);
                }
            })
            .catch((err) => {
                console.log(err);
                setloading(false);
                errorAlert("Connection error, try again later");
            });
    };

    return (
        <div className="c-app c-default-layout flex-row align-items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Add your background image here
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh", // Ensure the height covers the full viewport
            }}>
            <CContainer>
                <CRow className="justify-content-end">
                    <CCol md="6">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                    <CIcon name="cil-user" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <input
                                                value={userId}
                                                className="form-control  col-6"
                                                name="userId"
                                                ref={register({ required: true })}
                                                onChange={(e) => setuserId(e.target.value)}
                                                type="text"
                                                required
                                                placeholder="ID"
                                                autoComplete="username"
                                            />
                                            <br />
                                        </CInputGroup>
                                        {errors.userId && (
                                            <span className=" form-error text-danger mb-2">
                                                This field is required
                                            </span>
                                        )}
                                        <CInputGroup className="mb-4">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                    <CIcon name="cil-lock-locked" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <input
                                                type="password"
                                                className="form-control  col-6"
                                                placeholder="Password"
                                                name="password"
                                                ref={register({ required: true })}
                                                value={password}
                                                required
                                                onChange={(e) => setpassword(e.target.value)}
                                                autoComplete="current-password"
                                            />
                                            <br />
                                        </CInputGroup>
                                        {errors.password && (
                                            <span className="form-error text-danger mb-2">
                                                This field is required
                                            </span>
                                        )}

                                        {/* Radio buttons for role selection */}
                                        <div className="mb-3">
                                            <label className="d-block">Select Role:</label>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="role"
                                                    id="adminRole"
                                                    value="admin"
                                                // checked={role === "admin"}
                                                // onChange={(e) => setRole(e.target.value)}
                                                // ref={register({ required: true })}
                                                />
                                                <label className="form-check-label" htmlFor="adminRole">
                                                    Admin
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="role"
                                                    id="studentRole"
                                                    value="student"
                                                // checked={role === "student"}
                                                // onChange={(e) => setRole(e.target.value)}
                                                // ref={register({ required: true })}
                                                />
                                                <label className="form-check-label" htmlFor="studentRole">
                                                    Student
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="role"
                                                    id="teacherRole"
                                                    value="teacher"
                                                // checked={role === "teacher"}
                                                // onChange={(e) => setRole(e.target.value)}
                                                // ref={register({ required: true })}
                                                />
                                                <label className="form-check-label" htmlFor="teacherRole">
                                                    Teacher
                                                </label>
                                            </div>
                                            {errors.role && (
                                                <span className="form-error text-danger mb-2">
                                                    Please select a role
                                                </span>
                                            )}
                                        </div>

                                        <CRow>
                                            <CCol xs="6" className="mb-3">
                                                <Link to="/password/forget">Forget password</Link>
                                            </CCol>
                                        </CRow>
                                        <CRow>
                                            <CCol xs="6">
                                                <p></p>
                                                <CButton
                                                    disabled={loading}
                                                    onClick={handleSubmit(handleSignin)}
                                                    type="submit"
                                                    color="primary"
                                                    className="px-4"
                                                >
                                                    {loading ? (
                                                        <>
                                                            <span
                                                                className="spinner-border spinner-border-sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            ></span>
                                                            <span className="visually-hidden">
                                                                Loading...
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>Login</>
                                                    )}
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard
                                className="text-white bg-primary py-5 d-md-down-none"
                                style={{ width: "20%" }}
                            >
                                <CCardBody className="text-center">
                                    <div>
                                        <img src={logo} alt="logo" height={80} style={{ display: 'block', marginTop: '30px', marginBottom: '40px', marginLeft: '20px' }} />

                                        <h2>Welcome Back</h2>
                                        <p>
                                            Welcome to Dreams CloudTech. Our School ERP simplifies administrative tasks, enhances communication, and fosters an environment of academic excellence.

                                        </p>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Login;
