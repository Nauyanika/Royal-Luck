
import { Link } from "react-router-dom";
import React, { useState } from "react";
function AppSideber() {
  const tokenData = JSON.parse(sessionStorage.getItem("token"));
  if (!tokenData) {
    sessionStorage.removeItem("token");
    window.location.reload();
  }
  const [role, setRole] = useState(tokenData.user.role_id);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-3">
      <a href="index3.html" className="brand-link">
        <img
          src="logo5.jpg"
          alt="Bigwinner"
          className="brand-image img-circle elevation-4"
        />
        <span className="brand-text font-weight-light">Admin</span>
      </a>
      <div className="sidebar"> 

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link to="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-header">Users Management</li>
{/*     starting to easer                                                                                        */}
          <li className="nav-item">
              <Link to="/PlayersList" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> View Players</p>
              </Link>
            </li>
             { /* <li className="nav-item">
              <Link to="/AddNewDistributor" className="nav-link">
                <i className="fa-solid fa-user-plus nav-icon" />
                <p>Blocked Players</p>
              </Link>
            </li> */}

           <li className="nav-header">Game histroy</li>
            {/* <li className="nav-item">
              <Link to="/PlayersHistrory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>PlayerHistory</p>
              </Link>
          </li>


          <li className="nav-item">

          <Link to="/GamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>GameHistory</p>
              </Link>
          </li> */}

<li className="nav-item">

          <Link to="/AndarBaharGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>AndarBaharGameHistory</p>
              </Link>
          </li> 
          <li className="nav-item">

          <Link to="/RoulletGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>RoulletGameHistory</p>
              </Link>
          </li> <li className="nav-item">


          <Link to="/SevenUpGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>SevenUpGameHistory</p>
              </Link>
          </li> <li className="nav-item">
<Link to="/FunTargetGamePlayHistory" className="nav-link">
      <i className="fas fa-address-book nav-icon"></i>
      <p>FunTargetGameHistory</p>
    </Link>
</li> <li className="nav-item">

<Link to="/TripleChanceGamePlayHistory" className="nav-link">
      <i className="fas fa-address-book nav-icon"></i>
      <p>TripleChanceGameHistory</p>
    </Link>
</li> 




























































             <li className="nav-header">Point & Report</li>
 
            {/*<li className="nav-item">
              <Link to="/userWithdrawRequest" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Withdraw Request</p>
              </Link>
        </li>*/}
            <li className="nav-item">
              <Link to="/Transactions" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Transactions Records</p>
              </Link>
            </li>

            {/*<li className="nav-header">Users </li>
            <li className="nav-item">
              <Link to="/UsersList" className="nav-link">
                <i class="fa-solid fa-list nav-icon"></i>
                <p>Users History</p>
              </Link>
      </li>*/}
            
            <li className="nav-header">User Settings</li>
            <li className="nav-item">
              <Link to="/changepassword" className="nav-link">
                <i className="fa-solid fa-key nav-icon"></i>
                <p>Change Password</p>
              </Link>
          </li> 
          </ul>          
        </nav>
      </div>
    </aside>
          );    
}
export default AppSideber;
