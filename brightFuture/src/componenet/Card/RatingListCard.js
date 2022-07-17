import React from 'react'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function RatingListCard() {
  return (
    <div className="rtng_lst_lst">
        <div className="d-flex justify-content-between align-items-center">
            <div className="name_post_dt">
                <h5>User 1</h5>
                <p>17-07-2022</p>
            </div>
            <div className="d-flex rting_prfle_rating">
                <div>
                    <Rating
                        name="half-rating"
                        value={5 }
                        precision={0.5}
                        readOnly
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                </div>
            </div>
        </div>
        <p className="rtng_feed">Good</p>
    </div>
  )
}
