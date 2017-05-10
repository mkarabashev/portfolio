import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Link from 'material-ui/svg-icons/content/link';

const styles = {
  titleBackground: `linear-gradient(
    to top,
    rgba(0,0,0,0.7) 0%,
    rgba(0,0,0,0.3) 70%,
    rgba(0,0,0,0) 100%
  )`,
  imageDiv: {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  titleStyle: {
    color: 'white',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
  }
}

const buttons = (
  <div>
    <IconButton><Link color="#AEEA00" /></IconButton>
    <IconButton><Code color="#AEEA00" /></IconButton>
  </div>
);

const makeTile = (tile) => {
  const divStyle = {
    ...styles.imageDiv,
    backgroundImage: `url(${tile.img})`
  };

  let rows, cols;

  if (tile.featured) {
    if (window.innerWidth > 900) {
      rows = 2.02;
      cols = 1;
    } else if (window.innerWidth > 600) {
      rows = cols = 2;
    } else {
      rows = cols = 1;
    }
  }

  return (
    <GridTile
      key={tile.img}
      title={tile.title}
      actionIcon={buttons}
      titleStyle={styles.titleStyle}
      titleBackground={styles.titleBackground}
      subtitle={tile.subtitle}
      rows={rows}
      cols={cols}
    >
      <div style={divStyle} />
    </GridTile>
  );
}

export default makeTile;
