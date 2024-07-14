import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Container, Grid, Button } from '@mui/material';
import img1 from '../images/match1.jpg';
import img2 from '../images/match2.jpg';
import img3 from '../images/match3.jpg';

const Results = () => {
  const location = useLocation();
  const { file } = location.state || {};

  const [similarImages, setSimilarImages] = React.useState([]);

  React.useEffect(() => {
    if (file) {
      const fetchSimilarImages = async () => {
        const images = [
          img1,
          img2,
          img3,
        ];
        setSimilarImages(images);
      };

      fetchSimilarImages();
    }
  }, [file]);

  return (
    <Container>
      {file && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
      <div>
        <h2 className="p-2">Your Desired Outfits</h2>
        <Grid container spacing={2}>
          {similarImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="400" 
                  image={image}
                  alt={`Similar ${index}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    GLOBAL REPUBLIC Sheath Mini Dress
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Best Price $444 with coupon MYNTRA300
                  </Typography>
                  <Button variant="contained" sx={{ color: 'black', backgroundColor: 'yellow', borderRadius: '5px', mt: 2 }}>
                    <b>Add to Cart</b>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Results;
