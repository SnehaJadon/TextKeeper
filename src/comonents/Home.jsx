import React from "react";
import "./Home.scss";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ComputerIcon from "@mui/icons-material/Computer";
import SyncIcon from "@mui/icons-material/Sync";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="title-text">
          Securely Store & Access
          <br />
          <span>Links</span> & <span>Text</span>{" "}
          Anytime, Anywhere.
        </h1>
        <p className="sub-text">
          Save your important text and links and access them seamlessly across devices.
        </p>

        <div className="device-icons">
          <PhoneAndroidIcon className="device-icon" />
          <SyncIcon className="sync-icon" />
          <ComputerIcon className="device-icon" />
          <SyncIcon className="sync-icon" />
          <DesktopWindowsIcon className="device-icon" />
        </div>

        <p className="title-logo">
          <ContentCopyRoundedIcon className="nav-logo" /> Text Keeper
        </p>

        <ul className="feature-list">
          <div className="feature-header">
            <p>
              <AutoAwesomeIcon /> Features
            </p>
            <Button
              onClick={() => navigate("/signup")}
              variant="contained"
              className="signup-btn"
            >
              Get Started
            </Button>
          </div>
          <li>Real-time Sync</li>
          <li>Secure Cloud Storage</li>
          <li>Easy Copy & Share</li>
          <li>Delete & Manage Effortlessly</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;