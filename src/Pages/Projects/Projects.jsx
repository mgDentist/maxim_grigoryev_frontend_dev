import * as React from 'react';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import UnderNda from '../../components/UnderNda/UnderNda';
import NoNda from '../../components/NoNda/NoNda';

const Projects = () => {
    const [value, setValue] = React.useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <section className="projects">
            <div className="projects__container">
                <Box sx={{ width: '100%', bgcolor: '#242424' }}>
                    <TabContext value={value}
                    >
                        <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
                            <TabList onChange={handleChange} centered>
                                <Tab label="Not covered by NDA" value="0"
                                    sx={{
                                        color: '#f0f0f0',
                                        border: 'none',
                                        '&.Mui-selected': {
                                            color: '#61DAFB',
                                            border: 'none',
                                            outline: 'none',
                                        },
                                        '&:hover': {
                                            border: 'none',
                                            outline: 'none',
                                        },
                                        '&:focus': {
                                            border: 'none',
                                            outline: 'none',
                                        },
                                    }}
                                />
                                <Tab label="Confidential under NDA" value="1"
                                    sx={{
                                        color: '#f0f0f0',
                                        border: 'none',
                                        '&.Mui-selected': {
                                            color: '#61DAFB',
                                            border: 'none',
                                            outline: 'none',
                                        },
                                        '&:hover': {
                                            border: 'none',
                                            outline: 'none',
                                        },
                                        '&:focus': {
                                            border: 'none',
                                            outline: 'none',
                                        },
                                    }}
                                />
                            </TabList>
                        </Box>
                        <TabPanel value="0"
                            sx={{ padding: "40px 0 0" }}
                        >
                            <NoNda />
                        </TabPanel>
                        <TabPanel value="1"
                            sx={{ padding: "40px 0 0" }}
                        >
                            <UnderNda />
                        </TabPanel>
                    </TabContext>
                </Box>

            </div>
        </section>
    );
};

export default Projects;
