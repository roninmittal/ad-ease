import React, {useState} from 'react';
import { AppBar, Box, Tabs, Tab, TextField } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
}

export default function ProductTab(props) {
    const {productTabData, status} = props;
    const isDisable = status==="Live" ? true : false;
    const [value, setValue] = useState("Facebook");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    {
                        Array.isArray(productTabData) && productTabData.map((tabInfo, index) => {
                            return (
                                <Tab label={tabInfo.tabName} value={tabInfo.tabName} key={`productTab${index}`}/>
                            )
                        })
                    }
                </Tabs>
                <Box borderTop={1} borderColor="grey.500"/>
            </AppBar>
            {
                Array.isArray(productTabData) && productTabData.map((tabInfo, index) => {
                    const {headlines, primary_texts} = tabInfo.data;
                    const headlineLength = headlines.length;
                    return (
                        <TabPanel value={value} index={tabInfo.tabName} key={`productTabPanel${index}`}>
                            {Array.isArray(headlines) && headlines.map((headline, headlineIndex) => {
                                return (
                                    <Box pb={5} key={`headline-${index}`}>
                                        <TextField
                                            label={`${headlineIndex+1}. Headline`}
                                            defaultValue={headline}
                                            variant="outlined"
                                            fullWidth
                                            disabled={isDisable}
                                        />
                                    </Box>
                                )
                            })}
                            {Array.isArray(primary_texts) && primary_texts.map((primary_text, primaryTextIndex) => {
                                return (
                                    <Box pb={5} key={`primary-text-${index}`}>
                                        <TextField
                                            label={`${primaryTextIndex+headlineLength+1}. Primary Text`}
                                            defaultValue={primary_text}
                                            variant="outlined"
                                            fullWidth
                                            disabled={isDisable}
                                        />
                                    </Box>
                                )
                            })}
                        </TabPanel>
                    )
                })
            }
        </>
    );
}

ProductTab.prototype = {
    
}