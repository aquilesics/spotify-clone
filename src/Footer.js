import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid,Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className='footer'>
            
            <div className="footer__left">
                {/*album info*/}
                <img className='footer__albumLogo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2F8r_ni5Xu1PtvKtToXk1XrDnSrU8%3D%2Ffit-in%2F300x300%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(40)%2Fdiscogs-images%2FR-1598402-1231233098.jpeg.jpg&f=1&nofb=1' alt=''/>
                <div className='footer__songInfo'>
                    <h4>Siege Engine</h4>
                    <p>Buckethead</p>
                </div>

            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__green'/>
                <SkipPreviousIcon className='footer__icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green'/>
            </div>

            <div className='footer__right'>
                {/* volume controls */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                
                </Grid>
            </div>
            
        </div>
    )
}

export default Footer

 