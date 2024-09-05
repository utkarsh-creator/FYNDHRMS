import React, { useState } from "react";

const ProfileDetails = () => {
  const [editGeneralInfo, setEditGeneralInfo] = useState(false);
  const [editJobInfo, setEditJobInfo] = useState(false);
  const [editEAInfo, setEditEAInfo] = useState(false);

  const [profileData, setProfileData] = useState({
    personalInfo: {
      employeeID: "AD001",
      idNumber: "0001234567",
      phone: "719860-5864",
      email: "elizabethlopez95@hotmail.com",
      birthday: "May 15, 1995",
      gender: "Female",
      maritalStatus: "Single",
      nationality: "USA",
    },
    addressInfo: {
      address: "925 Wall Street",
      city: "Houston",
      country: "USA",
      postalCode: "75204",
    },
    jobInfo: {
      jobTitle: "UX Leader",
      department: "Products",
      employmentType: "Full Time",
      relianceExternal: "External",
      startDate: "Oct 12, 2022",
      contractEndDate: "Oct 10, 2023",
      lineManager: "Sofia Perez",
    },
    eaInfo: {
      eaName: "Rajesh Raut",
      eaMobile: "8908652935",
      eaEmail: "rajesh.l@samsung.com",
      kamName: "Subod Chaudhary",
      kamMobile: "9037186927",
      kamEmail: "subod.t@samsung.com",
      weddingDate: "04/08/16",
      rdrlConnectName: "Advit",
      rdrlEmail: "pam@rdrl.com",
      rdrlPhone: "9086755647",
    },
  });

  const handleInputChange = (section, field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const renderPersonalInfo = () => {
    return editGeneralInfo ? (
      <div>
        <h4>👤 Personal Information</h4>
        {Object.keys(profileData.personalInfo).map((key) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}:{" "}
            <input
              type="text"
              value={profileData.personalInfo[key]}
              onChange={(e) =>
                handleInputChange("personalInfo", key, e.target.value)
              }
              style={styles.input}
            />
          </p>
        ))}
      </div>
    ) : (
      <div>
        <h4>👤 Personal Information</h4>
        {Object.entries(profileData.personalInfo).map(([key, value]) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}: <span style={styles.bold}>{value}</span>
          </p>
        ))}
      </div>
    );
  };

  const renderAddressInfo = () => {
    return editGeneralInfo ? (
      <div>
        <h4>🏠 Address Information</h4>
        {Object.keys(profileData.addressInfo).map((key) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}:{" "}
            <input
              type="text"
              value={profileData.addressInfo[key]}
              onChange={(e) =>
                handleInputChange("addressInfo", key, e.target.value)
              }
              style={styles.input}
            />
          </p>
        ))}
      </div>
    ) : (
      <div>
        <h4>🏠 Address Information</h4>
        {Object.entries(profileData.addressInfo).map(([key, value]) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}: <span style={styles.bold}>{value}</span>
          </p>
        ))}
      </div>
    );
  };

  const renderJobInfo = () => {
    return editJobInfo ? (
      <div>
        <h4>💼 Employment Information</h4>
        {Object.keys(profileData.jobInfo).map((key) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}:{" "}
            <input
              type="text"
              value={profileData.jobInfo[key]}
              onChange={(e) =>
                handleInputChange("jobInfo", key, e.target.value)
              }
              style={styles.input}
            />
          </p>
        ))}
      </div>
    ) : (
      <div>
        <h4>💼 Employment Information</h4>
        {Object.entries(profileData.jobInfo).map(([key, value]) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}: <span style={styles.bold}>{value}</span>
          </p>
        ))}
      </div>
    );
  };

  const renderEAInfo = () => {
    return editEAInfo ? (
      <div>
        <h4>👨‍💼 EA Information</h4>
        {Object.keys(profileData.eaInfo).map((key) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}:{" "}
            <input
              type="text"
              value={profileData.eaInfo[key]}
              onChange={(e) =>
                handleInputChange("eaInfo", key, e.target.value)
              }
              style={styles.input}
            />
          </p>
        ))}
      </div>
    ) : (
      <div>
        <h4>👨‍💼 Employee Information</h4>
        {Object.entries(profileData.eaInfo).map(([key, value]) => (
          <p key={key}>
            {capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}: <span style={styles.bold}>{value}</span>
          </p>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile Pic"
          style={styles.profilePic}
        />
        <div style={styles.profileText}>
          <h2 style={styles.profileName}>Elizabeth Lopez</h2>
          <p style={styles.profileRole}>UX Leader • Design Department</p>
        </div>
      </header>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>📝 General Information</h3>
          <button
            style={styles.editButton}
            onClick={() => setEditGeneralInfo(!editGeneralInfo)}
          >
            {editGeneralInfo ? "Save" : "Edit"}
          </button>
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.infoBox}>
            {renderPersonalInfo()}
          </div>
          <div style={styles.infoBox}>
            {renderAddressInfo()}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>💼 Job</h3>
          <button
            style={styles.editButton}
            onClick={() => setEditJobInfo(!editJobInfo)}
          >
            {editJobInfo ? "Save" : "Edit"}
          </button>
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.infoBox}>
            {renderJobInfo()}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>👨‍💼 EA Information</h3>
          <button
            style={styles.editButton}
            onClick={() => setEditEAInfo(!editEAInfo)}
          >
            {editEAInfo ? "Save" : "Edit"}
          </button>
        </div>
        <div style={styles.sectionContent}>
          <div style={styles.infoBox}>
            {renderEAInfo()}
          </div>
        </div>
      </section>
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  profilePic: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  profileText: {
    display: "flex",
    flexDirection: "column",
  },
  profileName: {
    fontSize: "24px",
    marginBottom: "5px",
  },
  profileRole: {
    color: "#888",
  },
  section: {
    marginBottom: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  editButton: {
    padding: "8px 12px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  sectionContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  infoBox: {
    flex: "1 1 calc(50% - 20px)",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
};

export default ProfileDetails;
