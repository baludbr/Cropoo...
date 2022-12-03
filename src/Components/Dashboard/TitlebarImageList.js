import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width:1200, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'http://southasia.ifpri.info/files/2020/02/Bihar.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.tpci.in/indiabusinesstrade/wp-content/uploads/2020/06/Wheat-Rice_TPCI.jpg',
    
  },
  {
    img: 'https://agfundernews.com/wp-content/uploads/2015/09/SLCM.jpg',
  },
  {
    img: 'https://www.adaniagrilogistics.com/-/media/Project/Agrilogistics/business-model/business-model-01/business-model-02.jpg?h=342&la=en&w=533&hash=3C4998E29A562880B322234116F86D49',
    cols: 2,
  },
  {
    img: 'https://4.bp.blogspot.com/-5PzCkmCW-s8/WzCbgDqbXtI/AAAAAAAAAV0/Bf4GNiCfUAwIEc_Qc_M9S6NN4GK3G_OWgCEwYBhgL/s1600/slider-02.jpg',
    cols: 2,
  },
  {
    img: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/4/Desk/2020_4$largeimg_495848939.jpg',
    cols: 2,
  },
];