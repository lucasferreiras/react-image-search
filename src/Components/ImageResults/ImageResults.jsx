import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cellHeight={180} >
          {images.map((image) => (

            <GridListTile key={image.id}>
              <img src={image.largeImageURL} alt="" />
              <GridListTileBar
                title={image.tags}
                subtitle={<span>by <strong>{image.user}</strong></span>}
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(image.largeImageURL)} >
                    <ZoomIn style={{ color: 'white' }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogContent>
            <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;