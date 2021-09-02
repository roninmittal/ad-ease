import React from 'react';
import {Box, TextField } from '@material-ui/core';

export default function ProductInfo(props) {
    const {productInfo} = props;
    return (
        <>
            {
                Array.isArray(productInfo) && productInfo.map((info, index) => {
                    return (
                        <Box pb={5} key={`product-info-${index}`}>
                            <TextField
                                label={info.label}
                                defaultValue={info.value}
                                variant="outlined"
                                fullWidth
                                disabled
                            />
                        </Box>
                    )
                })
            }
        </>
    );
}

ProductInfo.prototype = {
    
}