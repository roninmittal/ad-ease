import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ProductCard from '../ProductCard';
import ProductInfo from '../ProductInfo';
import ProductTab from '../ProductTab';
  
function AdModal({open, onClose, adVal}) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const response ={
            "_id":"610c062db9b23d352f677057",
            "organization_id":"60c46b379b2e861c8eef9208",
            "owner_id":"60c46b389b2e861c8eef9209",
            "ad_group":"610c02a53615ef61905823ac",
            "name":"Updated Name for Ad 3",
            "status":"INACTIVE",
            "product_data":{
                "id":"610c02d773f168b490a9779c",
                "product_id":"6101c194517475b3251c1038",
                "product_name":"Fridge",
                "product_adjectives":["French Door Refrigerator"],
                "product_types":["Side by Side Fridge"]
            },
            "ad_copy":{
                "id":"610c02d773f168b490a97796",
                "headline":"Samsung side by side refrigerator with child lock",
                "primary_text":"All-round protection only with EZ CLEAN STEEL. Bought by 50 families last hour.",
                "source":"GPT3",
                "facebook_data":{
                    "id":"6123b2c266c6f7569c2b6679",
                    "headline":"updated short Message 3",
                    "primary_text":"updated Long message 3"
                },
                "google_data":{
                    "id":"6123b2c266c6f7569c2b6677",
                    "headlines":[
                        "updated short Message 3",
                        "updated short Message 3",
                        "updated short Message 3",
                        "updated short Message 3",
                        "updated short Message 3"
                    ],
                    "primary_texts":[
                        "updated Long message 3",
                        "updated Long message 3",
                        "updated Long message 3",
                        "updated Long message 3",
                        "updated Long message 3"
                    ]
                }
            },
            "ad_creative":{
                "id":"610c04c2b9b23d352f67704a",
                "ad_theme":{
                    "theme_id":"6101c252517475b3251c103f",
                    "name":"Blue",
                    "color_hexes_list":[
                        "1092A1",
                        "ffffff",
                        "383838"
                    ]
                },
                "product_image":"https://adease-product-images.s3.ap-south-1.amazonaws.com/refrigerator-images/Refrigerator-Bottom+Freezer+Refrigerator-2D+view.jpeg",
                "product_image_source":"AD_EASE",
                "product_image_third_party_source":"NONE",
                "creative":"https://adease-generated-ad-creatives.s3.ap-south-1.amazonaws.com/60c46b379b2e861c8eef9208/ad_group__610c02a53615ef61905823ac/solid_blue_s1_t1.jpg",
                "creative_source":"AD_EASE",
                "facebook_data":[],
                "texts_on_image":[]
            },
            "created_at":"2021-08-05 15:39:24.155000",
            "last_modified_at":"2021-08-23 14:38:47.030000"
        };
        const {product_data, ad_copy, ad_creative, status} = response;
        const {product_name, product_adjectives, product_types} = product_data || {};
        const {headline, primary_text, facebook_data, google_data} = ad_copy || {};
        const {product_image, } = ad_creative || {};
        const product_adjectives_str = (Array.isArray(product_adjectives) && product_adjectives.join()) || '';
        const product_types_str = (Array.isArray(product_types) && product_types.join()) || '';
        const productInfo = [
            {
                label: 'Product',
                value: product_name
            },
            {
                label: 'Type',
                value: product_types_str
            },
            {
                label: 'Adjectives',
                value: product_adjectives_str
            }
        ]
        const productCard = {
            mainHeadline: product_types_str,
            headline,
            primary_text,
            product_image,
            status
        }
        const productTabData = [{
          tabName: "Facebook",
          data: {
            id: facebook_data.id,
            headlines: facebook_data.headlines || (facebook_data.headline).split(),
            primary_texts: facebook_data.primary_texts || (facebook_data.primary_text).split(),
          }
        },
        {
            tabName: "Google",
            data: {
                id: google_data.id,
                headlines: google_data.headlines || (google_data.headline).split(),
                primary_texts: google_data.primary_texts || (google_data.primary_text).split(),
            } 
        }]

        setProduct({
            productInfo,
            productCard,
            productTabData,
            status
        })
    },[adVal]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
            fullWidth={true}
        >
            <DialogTitle id="alert-dialog-title">
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1}>
                        <Box>Edit Ad</Box>
                    </Box>
                    <Box>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" px={8}>
                    <Box pr={4}>
                        <ProductCard productCard={product.productCard} status={product.status}/>
                    </Box>
                    <Box my={3}>
                        <ProductInfo productInfo={product.productInfo}/>
                    </Box>
                </Box>
                <Box px={8} pt={4}>
                    <ProductTab productTabData={product.productTabData} status={product.status} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={onClose} color="primary">
                        Confirm
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default AdModal;
