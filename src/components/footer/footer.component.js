import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import './footer.scss';


export default (props) => {

   return (
     <div className="footer">
        <div className="footer__upper">

            {/** important links */}
            <div className="footer__upper__important_links">

              <h3 className="footer__upper__talk_online__footer_title"> Important Links </h3><br/>
              <p> About </p>
              <p> Cindy's cafes around me </p>

            </div>

            
            {/** lets talk online */}
            <div className="footer__upper__talk_online">

                <h3 className="footer__upper__talk_online__footer_title"> Let's Talk Online </h3><br/>
                <div className="footer__upper__talk_online__icons">
                    <FacebookIcon className="icon" />
                    <TwitterIcon className="icon" />
                    <InstagramIcon className="icon" />
                </div>

            </div>

        </div>
        <div className="footer__lower">

            <p className="footer__lower_logo"> Cindys </p>
            <p className="footer__lower_copyright"> @2021 </p> 

        </div>
     </div>
   )
}
