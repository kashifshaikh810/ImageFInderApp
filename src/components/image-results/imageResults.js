import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton'; 
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }

 handleOpen = img => {
    this.setState({ open: true, currentImg: img })
 }

 handelClose = () => {
    this.setState({ open: false })
 }

    render(){
        let ImageListContent;
        const { images } = this.props;
        if(images) {
            ImageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                by <strong>{img.user}</strong>
                            </span>
                        }
                        actionIcon={
                            <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                                <ZoomIn color="White" />
                            </IconButton>
                        }
                        >
                            <img src={img.largeImageURL} />
                        </GridTile>
                    ))}
                </GridList>
            );
        }else {
            ImageListContent = null;
        }

        const actions = [
            <FlatButton label="Close" primary={true} onClick={this.handelClose}/>
        ]

        return(
            <div>
                {ImageListContent}
                <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handelClose}>
                <img src={this.state.currentImg} alt="" style={{ width: '100%' }} /> 
                </Dialog>    
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
} 

export default ImageResults;