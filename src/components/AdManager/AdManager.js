import React, { useState } from 'react';
import { Container, Grid, FormControl, Button } from '@material-ui/core';
import AdModal from '../../containers/AdModal'


function AdManager() {
    const [adVal, setAdVal] = useState('');
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleBtnClick = (val) => {
        setOpen(true);
        setAdVal(val)
    }

    return (
        <Container>
            {
                [1,2,3].map((val, index) => {
                    return (
                        <Grid container direction="column" justifyContent="center" alignItems="center" key={index}>
                            <FormControl margin="dense">
                                <Button variant="contained" color="primary" onClick={() => handleBtnClick(val)}>Ad {val}</Button>
                            </FormControl>
                        </Grid>
                    )
                })
            }
            <AdModal open={open} onClose={handleClose} adVal={adVal}/>
        </Container>
    );
}

export default AdManager;
