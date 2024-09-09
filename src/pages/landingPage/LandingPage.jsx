import React, { useState, useMemo } from 'react';
import { Button, Tabs, Tab, Box, Typography, Avatar } from '@mui/material';
import { saveAs } from 'file-saver';

// Dummy data for Birthdays, Work Anniversaries, and Weddings
const sectionData = {
    Birthdays: {
        Organizations: {
            internal: {
                today: [
                    { name: 'Alice', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
                    { name: 'Bob', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
                ],
                week: [
                    { name: 'Charlie', date: '2024-09-11', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
                    { name: 'David', date: '2024-09-14', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
                ],
            },
            external: {
                today: [
                    { name: 'Eve', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
                    { name: 'Frank', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
                ],
                week: [
                    { name: 'Grace', date: '2024-09-10', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
                    { name: 'Heidi', date: '2024-09-12', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
                ],
            },
        },
        Employees: {
            internal: {
                today: [
                    { name: 'Ivan', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
                ],
                week: [
                    { name: 'Judy', date: '2024-09-10', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
                ],
            },
            external: {
                today: [
                    { name: 'Mallory', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
                ],
                week: [
                    { name: 'Oscar', date: '2024-09-11', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
                ],
            },
        },
    },
    'Work Anniversaries': {
        Organizations: {
            internal: {
                today: [
                    { name: 'Peggy', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
                ],
                week: [
                    { name: 'Trent', date: '2024-09-13', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
                ],
            },
            external: {
                today: [
                    { name: 'Sybil', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
                ],
                week: [
                    { name: 'Victor', date: '2024-09-12', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
                ],
            },
        },
        Employees: {
            internal: {
                today: [
                    { name: 'Walter', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
                ],
                week: [
                    { name: 'Xavier', date: '2024-09-14', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
                ],
            },
            external: {
                today: [
                    { name: 'Yvonne', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
                ],
                week: [
                    { name: 'Zara', date: '2024-09-13', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
                ],
            },
        },
    },
    Weddings: {
        Organizations: {
            internal: {
                today: [
                    { name: 'Ada', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
                ],
                week: [
                    { name: 'Blake', date: '2024-09-10', image: 'https://randomuser.me/api/portraits/men/11.jpg' },
                ],
            },
            external: {
                today: [
                    { name: 'Cathy', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
                ],
                week: [
                    { name: 'Dexter', date: '2024-09-12', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
                ],
            },
        },
        Employees: {
            internal: {
                today: [
                    { name: 'Ethan', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/men/13.jpg' },
                ],
                week: [
                    { name: 'Fiona', date: '2024-09-13', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
                ],
            },
            external: {
                today: [
                    { name: 'George', date: '2024-09-09', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
                ],
                week: [
                    { name: 'Hannah', date: '2024-09-11', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
                ],
            },
        },
    },
};


const LandingPage = () => {
    const [viewType, setViewType] = useState('internal');
    const [activePage, setActivePage] = useState(null); // 'Organizations' or 'Employees'
    const [activeSection, setActiveSection] = useState('Birthdays'); // Birthdays, Work Anniversaries, Weddings

    const data = useMemo(() => {
        if (!activePage) return { today: [], week: [] };
        const sectionDataForView = sectionData[activeSection]?.[activePage] || {};
        const dataForViewType = sectionDataForView[viewType] || { today: [], week: [] };
        return dataForViewType;
    }, [activeSection, activePage, viewType]);

    const handleDownloadCSV = () => {
        const convertToCSV = (data) => {
            const headers = ['Name', 'Date'];
            const rows = data.map(item => [item.name, item.date]);
            return [headers, ...rows].map(row => row.join(',')).join('\n');
        };

        const csvToday = convertToCSV(data.today);
        const csvWeek = convertToCSV(data.week);

        // Download Today CSV
        const blobToday = new Blob([csvToday], { type: 'text/csv;charset=utf-8;' });
        saveAs(blobToday, `${activeSection}_${activePage}_${viewType}_Today.csv`);

        // Download Week CSV
        const blobWeek = new Blob([csvWeek], { type: 'text/csv;charset=utf-8;' });
        saveAs(blobWeek, `${activeSection}_${activePage}_${viewType}_This_Week.csv`);
    };

    const renderSection = (title, data) => (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                textAlign: 'center',
                                width: '100px',
                                borderRadius: '8px',
                                boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                                p: 1,
                            }}
                        >
                            <Avatar
                                alt={item.name}
                                src={item.image}
                                sx={{ width: 60, height: 60, margin: 'auto' }}
                            />
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {item.name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'gray' }}>
                                {item.date}
                            </Typography>
                        </Box>
                    ))
                ) : (
                    <Typography>No data available</Typography>
                )}
            </Box>
        </Box>
    );

    return (
        <Box sx={{ p: 2, maxWidth: '900px', margin: '0 auto' }}>
            {/* Internal / External Toggle */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Button 
                    onClick={() => setViewType('internal')}
                    variant={viewType === 'internal' ? "contained" : "outlined"}
                    sx={{ mx: 1 }}
                >
                    Internal
                </Button>
                <Button 
                    onClick={() => setViewType('external')}
                    variant={viewType === 'external' ? "contained" : "outlined"}
                    sx={{ mx: 1 }}
                >
                    External
                </Button>
            </Box>

            {/* Organizations / Employees Toggle */}
            {viewType && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Button 
                        onClick={() => setActivePage('Organizations')}
                        variant={activePage === 'Organizations' ? "contained" : "outlined"}
                        sx={{ mx: 1 }}
                    >
                        Organizations
                    </Button>
                    <Button 
                        onClick={() => setActivePage('Employees')}
                        variant={activePage === 'Employees' ? "contained" : "outlined"}
                        sx={{ mx: 1 }}
                    >
                        Employees
                    </Button>
                </Box>
            )}

            {/* Event Tabs (Birthdays, Work Anniversaries, Wedding Anniversaries) */}
            {activePage && (
                <Tabs
                    value={activeSection}
                    onChange={(event, newValue) => setActiveSection(newValue)}
                    centered
                    TabIndicatorProps={{ style: { backgroundColor: '#1976d2' } }}
                    sx={{ mb: 3 }}
                >
                    <Tab label="Birthdays" value="Birthdays" />
                    <Tab label="Work Anniversaries" value="Work Anniversaries" />
                    <Tab label="Wedding Anniversaries" value="Weddings" />
                </Tabs>
            )}

            {/* Render Data for Today and This Week */}
            {activePage && (
                <Box>
                    {renderSection(`${activeSection} Today`, data.today)}
                    {renderSection(`${activeSection} This Week`, data.week)}
                </Box>
            )}

            {/* Download CSV Button */}
            {activePage && (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 4 }}
                    onClick={handleDownloadCSV}
                >
                    Download CSV
                </Button>
            )}
        </Box>
    );
};

export default LandingPage;
