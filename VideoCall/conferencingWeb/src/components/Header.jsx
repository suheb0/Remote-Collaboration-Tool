// import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useAuth } from "../AuthContext.jsx";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
import { useSelector } from "react-redux";  
import { changeTheme } from "../app/slices/AuthSlice";
import {
  getCreateMeetingBreadCrumbs,
  getDashboardBreadCrumbs,
  getMeetingsBreadCrumbs,
  getMyMeetingsBreadCrumbs,
  getOneOnOneMeetingBreadCrumbs,
  getVideoConferenceBreadCrumbs,
}

 from "../utils/breadcrumbs";


// import { firebaseAuth } from "../utils/firebaseConfig";
// import { BreadCrumbsType } from "../utils/types";
// 🔒🔒🔒🔒
// import { Link } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // const userName = useSelector(state=>state.auth.userInfo)
    const isDarkTheme = useSelector(state => state.auth.isDarkTheme);
  const [breadCrumbs, setBreadCrumbs] = useState([ {text: "Dashboard"}]);
  const dispatch = useDispatch();
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/") setBreadCrumbs(getDashboardBreadCrumbs(navigate));
    else if (pathname === "/create")
      setBreadCrumbs(getCreateMeetingBreadCrumbs(navigate));
    else if (pathname === "/create1on1")
      setBreadCrumbs(getOneOnOneMeetingBreadCrumbs(navigate));
    else if (pathname === "/videoconference")
      setBreadCrumbs(getVideoConferenceBreadCrumbs(navigate));
    else if (pathname === "/mymeetings")
      setBreadCrumbs(getMyMeetingsBreadCrumbs(navigate));
    else if (pathname === "/meetings") {
      setBreadCrumbs(getMeetingsBreadCrumbs(navigate));
    }
  }, [location, navigate]);
  useEffect(()=>{
    const token = localStorage.getItem('jwttoken');
    if(token){
      const decodedToken = jwt_decode(token);
      
    }
  })


  const logout = () => {
    navigate('/')
  };

  const invertTheme = () => {
    const theme = localStorage.getItem("zoom-theme");
    localStorage.setItem("zoom-theme", theme === "light" ? "dark" : "light");
    dispatch(changeTheme({ isDarkTheme: !isDarkTheme }));
  };

  const section = (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <h3  className="text-blue-500 text-2xl">
        Conferencing Web
      </h3>
      <div className="text-white">
      {/* {console.log('Username',userName)} */}
      {/* {console.log('User Info:', useSelector(state => state.auth.userInfo))} */}
        {/* {console.log(userName,"Userbaneeeeee")} */}
         
          {/* <h3>
            Hello from section, <span className="text-blue-500">{userName}</span>
          </h3> */}
        
      </div>
      <div className="flex space-x-4">
        <button
          onClick={invertTheme}
          className={`p-2 rounded-full ${isDarkTheme ? "text-warning" : "text-gray-500"}`}
          aria-label={isDarkTheme ? "theme-button-light" : "theme-button-dark"}
        >
          {/* {isDarkTheme ? "🌞" : "🌙"} */}
        </button>
        <Link
        to='/'
          // onClick={logout}
          className="p-2 rounded-full text-gray-500"
          aria-label="logout-button"
        >
          🔒
        </Link>
      </div>
    </div>
  );

  const responsiveSection = (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <h3  className="text-blue-500 text-2xl">
        Conferencing Web Responsive
      </h3>
      <div className="flex space-x-4">
        <button
          onClick={invertTheme}
          className={`p-2 rounded-full ${isDarkTheme ? "text-warning" : "text-gray-500"}`}
          aria-label={isDarkTheme ? "theme-button-light" : "theme-button-dark"}
        >
          {/* {isDarkTheme ? "🌞" : "🌙"} */}
        </button>
        <Link to="/" className="text-blue-500 text-2xl">
        🔒
      </Link>
      </div>
    </div>
  );

  useEffect(() => {
    if (window.innerWidth < 480) {
      setIsResponsive(true);
    }
  }, []);

  return (
    <>
      <header className="min-h-[8vh] bg-gray-900 text-white">
        {isResponsive ? responsiveSection : section}
      </header>
      <header className="min-h-[8vh] bg-gray-800 text-white">
        <nav>
          {/* Breadcrumbs Section */}
          <div className="flex items-center p-4">
            {breadCrumbs.map((crumb, index) => (
              <span key={index} className="text-gray-400">
                {crumb.text}
                {index < breadCrumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
