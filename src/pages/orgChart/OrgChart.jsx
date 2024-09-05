import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


const OrgChart = () => {
  const initialEmployees = {
    name: 'Brian Harris',
    title: 'CEO',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    reports: [
      {
        name: 'Caleb Jones',
        title: 'Head of HR',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        reports: [
          {
            name: 'Andrea Sanchez',
            title: 'Content Marketing',
            img: 'https://randomuser.me/api/portraits/women/4.jpg',
            reports: [
              {
                name: 'Ashley Baker',
                title: 'Marketing Executive',
                img: 'https://randomuser.me/api/portraits/women/5.jpg',
              },
            ],
          },
          {
            name: 'Jake Miller',
            title: 'HR Specialist',
            img: 'https://randomuser.me/api/portraits/men/7.jpg',
          },
          {
            name: 'Emily Wilson',
            title: 'Recruitment Manager',
            img: 'https://randomuser.me/api/portraits/women/6.jpg',
          },
        ],
      },
      {
        name: 'Sarah Allen',
        title: 'Head of Finance',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        reports: [
          {
            name: 'Richard Davis',
            title: 'Social Marketing',
            img: 'https://randomuser.me/api/portraits/men/6.jpg',
          },
          {
            name: 'Steven Thompson',
            title: 'Finance Manager',
            img: 'https://randomuser.me/api/portraits/men/8.jpg',
          },
        ],
      },
      {
        name: 'Jennifer Edwards',
        title: 'Marketing Director',
        img: 'https://randomuser.me/api/portraits/women/3.jpg',
        reports: [
          {
            name: 'Sophia Martinez',
            title: 'SEO Specialist',
            img: 'https://randomuser.me/api/portraits/women/9.jpg',
          },
          {
            name: 'Lucas Brown',
            title: 'Marketing Analyst',
            img: 'https://randomuser.me/api/portraits/men/9.jpg',
          },
        ],
      },
      {
        name: 'Angel Gomez',
        title: 'Head of Sales',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        reports: [
          {
            name: 'Ella Turner',
            title: 'Sales Executive',
            img: 'https://randomuser.me/api/portraits/women/10.jpg',
          },
          {
            name: 'Nathan Clark',
            title: 'Sales Manager',
            img: 'https://randomuser.me/api/portraits/men/10.jpg',
          },
        ],
      },
      {
        name: 'Matthew Jackson',
        title: 'Head of Products',
        img: 'https://randomuser.me/api/portraits/men/4.jpg',
        reports: [
          {
            name: 'Grace Lee',
            title: 'Product Manager',
            img: 'https://randomuser.me/api/portraits/women/11.jpg',
          },
          {
            name: 'James Wright',
            title: 'Product Designer',
            img: 'https://randomuser.me/api/portraits/men/11.jpg',
          },
        ],
      },
    ],
  };

  const [expandedNodes, setExpandedNodes] = useState({});
  const [scale] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const styles = {
    chart: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      transform: `scale(${scale})`,
      transformOrigin: 'top',
      transition: 'transform 0.3s ease-in-out',
      maxWidth: '100%',
      overflow: 'hidden',
    },
    controls: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      alignItems: 'center',
    },
    node: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '10px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      position: 'relative',
      zIndex: 2, // Ensure node is on top
    },
    img: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    subordinates: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: '10px',
      position: 'relative',
    },
    heading: {
      margin: '5px 0',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333333',
    },
    text: {
      margin: 0,
      color: '#666666',
      fontSize: '14px',
    },
    arrow: {
      width: '0',
      height: '0',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '10px solid #ddd',
      position: 'absolute',
      top: '-10px',
      left: 'calc(50% - 5px)',
    },
    connector: {
      width: '2px',
      height: '20px',
      backgroundColor: '#ddd',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1, // Ensure connector is behind the nodes
    },
    horizontalConnector: {
      height: '2px',
      width: 'calc(100% - 20px)',
      backgroundColor: '#ddd',
      position: 'absolute',
      top: '50%',
      left: '10px',
      zIndex: 1, // Ensure connector is behind the nodes
    },
    searchInput: {
      padding: '10px',
      borderRadius: '20px',
      outline: 'none',
      fontSize: '14px',
      marginLeft: '10px',
      width: '250px',
      transition: 'width 0.3s ease',
      backgroundColor: 'transparent',  // To blend with the search bar's background
      border: 'none', 
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      borderRadius: '30px',
      backgroundColor: '#f7f7f7',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    searchIcon: {
      marginRight: '10px',
      color: '#666666',
      transition: 'transform 0.2s ease-in-out', // Effect for icon click
    },
  };

  const handleEmployeeClick = (employee) => {
    setExpandedNodes((prevState) => ({
      ...prevState,
      [employee.name]: !prevState[employee.name],
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    // Reset expanded nodes
    setExpandedNodes({});
    // Trigger search and expand relevant nodes
    expandNodesForSearch(initialEmployees, searchTerm);
  };

  const filterEmployees = (employee, term) => {
    if (employee.name.toLowerCase().includes(term.toLowerCase())) {
      return true;
    }
    if (employee.reports) {
      return employee.reports.some((report) =>
        filterEmployees(report, term)
      );
    }
    return false;
  };

  const expandNodesForSearch = (employee, term) => {
    if (filterEmployees(employee, term)) {
      setExpandedNodes((prevState) => ({
        ...prevState,
        [employee.name]: true,
      }));
      if (employee.reports) {
        employee.reports.forEach((report) =>
          expandNodesForSearch(report, term)
        );
      }
    }
  };

  const renderEmployeeNode = (employee) => {
    if (!filterEmployees(employee, searchTerm)) {
      return null;
    }

    return (
      <div key={employee.name} style={styles.container}>
        <div style={styles.node} onClick={() => handleEmployeeClick(employee)}>
          <img src={employee.img} alt={employee.name} style={styles.img} />
          <h3 style={styles.heading}>{employee.name}</h3>
          <p style={styles.text}>{employee.title}</p>
          <div style={styles.arrow}></div>
        </div>
        {expandedNodes[employee.name] && employee.reports && (
          <>
            <div style={styles.connector}></div>
            <div style={styles.subordinates}>
              <div style={styles.row}>
                {employee.reports.map((report) => (
                  <div key={report.name}>
                    {renderEmployeeNode(report)}
                    <div style={styles.horizontalConnector}></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div style={styles.chart}>
      <div style={styles.controls}>
        <div style={styles.searchBar} onClick={handleSearchClick}>
          <FaSearch style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for an employee"
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
        </div>
      </div>
      {renderEmployeeNode(initialEmployees)}
    </div>
  );
};

export default OrgChart;
