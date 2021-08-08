import React from 'react';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import addressImage from '../../images/addresses.jpg';
import contactImage from '../../images/contacts.jpg';
import trendyolImage from '../../images/trendyol.jpg';

import './About.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    alignItems: 'center',
    minHeight: '20em',
    backgroundColor: '#b8c6db',
    backgroundImage: 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)',
  },
  media: {
    minHeight: 150,
  },
  cardMedia: {},
});

function AboutPage() {
  const classes = useStyles();

  return (
    <div>
      <div className='about-section'>
        <h1>Hakkımızda</h1>
        <p>
          Sizler için 7/24 aktif bir şekilde 100% el işçiliğiyle kişiye özel
          tasarımlar sunmaktayız. Güleryüzlü hizmet kadromuzla müşteri
          memnuniyetini en üst seviyede tutmak için titizlikle çalışıyoruz. Hem
          ofis hem online market aracılığıyla satış yapmaktayız. Ürünler
          hakkında daha detaylı bilgi edinmek için iletişim adreslerimizden bize
          ulaşabilirsiniz.
        </p>
      </div>

      {/* {/* <h2 style={{ textAlign: 'center' }}></h2> */}
      <div
        style={{ backgroundColor: '#150f0f', paddingTop: '9%' }}
        className='row'
      >
        <div className='column'>
          <div className='container'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={addressImage}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Adres
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Some Address Text
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Link
                    color='inherit'
                    href='https://goo.gl/maps/fncCfyAMJGuWxEL8A'
                  >
                    Google Maps'de Gör
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className='column'>
          <div className='container'>
            <Card className={classes.root}>
              <CardActionArea>
                <div className={classes.cardMedia}>
                  <CardMedia
                    className={classes.media}
                    image={contactImage}
                    title='Contemplative Reptile'
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    İletişim
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Phone Number <br />
                    E-Mail
                  </Typography>

                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Link color='inherit' href=''>
                    E-Posta{' '}
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className='column'>
          <div className='container'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={trendyolImage}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Satış
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Ürünlerimiz şimdi Trendyol'da!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Link
                    color='inherit'
                    href='https://ty.gl/hcnos15'
                    style={{ marginTop: '1.5rem' }}
                  >
                    Trendyol'da Biz
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
