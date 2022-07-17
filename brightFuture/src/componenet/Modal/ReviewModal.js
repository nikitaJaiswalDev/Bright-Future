import React, { useState } from 'react'
import {FormGroup,Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import Switch from '@material-ui/core/Switch';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';

export default function ReviewModal(props) {
    console.log(props);
  return (
    <Modal isOpen={props.open} centered={true}>
        <ModalHeader className="py-4  clse_jb">Rate{" "} Nikita </ModalHeader>
          <ModalBody className="">
            <div className="pb-1 align-items-center d-flex justify-content-between">
                <div>
                  <span className="pst_rvw">Post review anonymously</span>
                </div>
                <div>
                  <Switch
                    //   checked={rating_anonymously}
                    //   onChange={(e)=> set_rating_anonymously(e.target.checked)}
                      color="primary"
                      name="checkedB"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            </div>
            <div className="align-items-center d-flex justify-content-between">
              <div>
                <span className="pst_rvw">Rate</span>
              </div>
                <span className="clr-rating">
                    <Rating
                        name="half-rating"
                        value={5}
                        precision={0.5}
                        // onChange={(event, newValue) => {
                        // set_rating_value(newValue);
                        // }}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                </span>
                <div className="error_msg_shw">
                    <small className="text-danger">
                    
                    </small>
                </div>
            </div>
            <p className="pt-2 pb-1 pst_rvw">Add Review</p>
            <FormGroup row className="mx-1">
                <Input type="textarea" rows="6" name="text" className="form-control" placeholder="Add review"
                    value={'abc'}
                    // onChange={ (e)=> set_rating_text(e.target.value)}
                />
                <div className="error_msg_shw">
                    <small className="text-danger">
                    {/* {ratingError.rating_textError} */}
                    </small>
                </div>
            </FormGroup>
            <div className="d-flex justify-content-end py-2">
              <Button
                onClick={props.handleCancel} variant="outlined" className="sgnup_btn mr-4" color="primary">CANCEL</Button>
              <Button onClick={props.handleConfirm} variant="contained" className="cnfrm_btn" color="primary">CONFIRM</Button>
            </div>
          </ModalBody>
    </Modal>
  )
}
