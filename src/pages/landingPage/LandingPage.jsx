import React, { useState } from 'react';

const LandingPage = () => {
    const [activeSection, setActiveSection] = useState('birthdays');
    const [activePage, setActivePage] = useState('organizations');

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            background: '#f9f9f9',
        },
        tabs: {
            display: 'flex',
            marginBottom: '10px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        },
        tab: (isActive) => ({
            flex: 1,
            padding: '10px',
            cursor: 'pointer',
            textAlign: 'center',
            borderBottom: isActive ? '3px solid #0056D2' : 'none',
            color: isActive ? '#0056D2' : '#555',
            fontWeight: isActive ? 'bold' : 'normal',
        }),
        content: {
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        },
        sectionHeader: {
            fontSize: '1.25rem',
            marginBottom: '15px',
            fontWeight: 'bold',
        },
        userList: {
            display: 'flex',
            overflowX: 'auto',
            marginBottom: '20px', // Adding margin to separate sections
        },
        userCard: {
            textAlign: 'center',
            marginRight: '15px',
        },
        userImage: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginBottom: '5px',
            objectFit: 'cover',
        },
        announcement: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
        },
        announcementImage: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '10px',
            objectFit: 'cover',
        },
        announcementContent: {
            backgroundColor: '#f2f4f8',
            padding: '10px',
            borderRadius: '10px',
            flex: 1,
        },
        announcementTime: {
            fontSize: '0.75rem',
            color: '#888',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
        },
        headerButton: (isActive) => ({
            marginRight: '10px',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: isActive ? '#0056D2' : '#f1f1f1',
            color: isActive ? '#fff' : '#0056D2',
            fontWeight: 'bold',
        }),
    };

    const renderContent = () => {
        if (activePage === 'organizations') {
            // Content for Organizations
            switch (activeSection) {
                case 'birthdays':
                    return (
                        <div style={styles.content}>
                            <div style={styles.sectionHeader}>VIP Birthdays Today</div>
                            <div style={styles.userList}>
                                
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for birthdays */}
                            </div>
                            <div style={styles.sectionHeader}>VIP Birthdays This Week</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=23" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 2</div>
                                    <div>Yesterday</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=23" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 2</div>
                                    <div>Yesterday</div>
                                </div>
                                {/* Other VIP user cards for birthdays this week */}
                            </div>
                        </div>
                    );
                case 'work':
                    return (
                        <div style={styles.content}>
                            <div style={styles.sectionHeader}>VIP Work Anniversaries Today</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=24" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 3</div>
                                </div>
                                
                                {/* Other VIP user cards for work anniversaries */}
                            </div>
                            <div style={styles.sectionHeader}>VIP Work Anniversaries This Week</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=25" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 4</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for work anniversaries this week */}
                            </div>
                        </div>
                    );
                case 'wedding':
                    return (
                        <div style={styles.content}>
                            <div style={styles.sectionHeader}>VIP Weddings Today</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=26" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 5</div>
                                </div>
                                
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for weddings */}
                            </div>
                            <div style={styles.sectionHeader}>VIP Weddings This Week</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for weddings this week */}
                            </div>
                        </div>
                    );

                default:
                    return null;
            }
        } else if (activePage === 'vip') {
            // Content for VIP
            switch (activeSection) {
                case 'birthdays':
                    return (
                        <div style={styles.content}>
                            <div style={styles.sectionHeader}>VIP Birthdays Today</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=22" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 1</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for birthdays */}
                            </div>
                            <div style={styles.sectionHeader}>VIP Birthdays This Week</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=23" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 2</div>
                                    <div>Yesterday</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for birthdays this week */}
                            </div>
                        </div>
                    );
                case 'work':
                    return (
                        <div style={styles.content}>
                            <div style={styles.sectionHeader}>VIP Work Anniversaries Today</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=24" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 3</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for work anniversaries */}
                            </div>
                            <div style={styles.sectionHeader}>VIP Work Anniversaries This Week</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=25" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 4</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for work anniversaries this week */}
                            </div>
                        </div>
                    );
                case 'wedding':
                    return (
                        <div style={styles.content}>
                            <div style={styles.sectionHeader}>VIP Weddings Today</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=26" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 5</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for weddings */}
                            </div>
                            <div style={styles.sectionHeader}>VIP Weddings This Week</div>
                            <div style={styles.userList}>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                <div style={styles.userCard}>
                                    <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                    <div>VIP Member 6</div>
                                    <div>8 February</div>
                                </div>
                                {/* Other VIP user cards for weddings this week */}
                            </div>
                        </div>
                    );
                default:
                    return null;
            }
        }
        return null;
    };
    

    const renderPageContent = () => {
        switch (activePage) {
            case 'organizations':
                // return (
                    // <div style={styles.content}>
                        {/* <div style={styles.sectionHeader}></div> */}
                        {/* <div style={styles.userList}>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=22" alt="organization" style={styles.userImage} />
                                <div>Organization A</div>
                            </div>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=23" alt="organization" style={styles.userImage} />
                                <div>Organization B</div>
                            </div>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=24" alt="organization" style={styles.userImage} />
                                <div>Organization C</div>
                            </div>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=25" alt="organization" style={styles.userImage} />
                                <div>Organization D</div>
                            </div>
                        </div> */}
                    // </div>
                // );
            case 'vip':
                return (
                    <div style={styles.content}>
                        {/* <div style={styles.sectionHeader}></div> */}
                        {/* <div style={styles.userList}>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=26" alt="vip" style={styles.userImage} />
                                <div>VIP Member 1</div>
                            </div>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=27" alt="vip" style={styles.userImage} />
                                <div>VIP Member 2</div>
                            </div>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=28" alt="vip" style={styles.userImage} />
                                <div>VIP Member 3</div>
                            </div>
                            <div style={styles.userCard}>
                                <img src="https://picsum.photos/200/200?random=29" alt="vip" style={styles.userImage} />
                                <div>VIP Member 4</div>
                            </div>
                        </div> */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div
                    style={styles.headerButton(activePage === 'organizations')}
                    onClick={() => setActivePage('organizations')}
                >
                    Organizations
                </div>
                <div
                    style={styles.headerButton(activePage === 'vip')}
                    onClick={() => setActivePage('vip')}
                >
                    VIP
                </div>
            </div>
            <div style={styles.tabs}>
                <div style={styles.tab(activeSection === 'birthdays')} onClick={() => setActiveSection('birthdays')}>
                    {`🎂 Birthdays`}
                </div>
                <div style={styles.tab(activeSection === 'work')} onClick={() => setActiveSection('work')}>
                    {`🎉 Work Anniversaries`}
                </div>
                <div style={styles.tab(activeSection === 'wedding')} onClick={() => setActiveSection('wedding')}>
                    {`💍 Wedding Anniversaries`}
                </div>
            </div>
            {renderPageContent()}
            {renderContent()}
        </div>
    );
};

export default LandingPage;
