import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">i-social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search />
          <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Time-line</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">
              1
            </span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">
              1
            </span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">
              2 
            </span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
