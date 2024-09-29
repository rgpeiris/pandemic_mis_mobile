import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Box, Typography } from "@mui/material";

import CustomCard from "../../components/customCard";
import Heading from "../../components/heading";
import { SpaceBetween } from "../../components/wrapper";
import { FormWrapper } from "../../components/wrapper";
import { FormActionButton } from "../../components/button";

import { checkStringValidity } from "../../utils";

import { createComplaint } from "../../store/actions";

const CreateComplaint = ({ isMobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [complaintTitle, setComplaintTitle] = useState("");
  const [isValidComplaintTitle, setIsValidComplaintTitle] = useState(true);
  const [complaintDescription, setComplaintDescription] = useState("");
  const [isValidComplaintDescription, setIsValidComplaintDescription] =
    useState(true);

  const { loggedInUser } = useSelector((state) => state.auth);

  const onHandleComplaintTitle = (e) => {
    setIsValidComplaintTitle(true);
    setComplaintTitle(e.target.value);
  };

  const onHandleComplaintDescription = (e) => {
    setIsValidComplaintDescription(true);
    setComplaintDescription(e.target.value);
  };

  const checkValidity = (e) => {
    e.preventDefault();
    let isErrorValidation = false;

    if (!checkStringValidity(complaintTitle)) {
      setIsValidComplaintTitle(false);
      isErrorValidation = true;
    }
    if (!checkStringValidity(complaintDescription)) {
      setIsValidComplaintDescription(false);
      isErrorValidation = true;
    }

    if (!isErrorValidation) {
      handleCreate(e);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const userData = {
      complaintId: 0,
      complaintTitle: complaintTitle,
      complaintDescription: complaintDescription,
      createdBy: loggedInUser.userName,
      createdDate: new Date().toISOString(),
    };

    dispatch(createComplaint(userData, onHandleCancel));
  };

  const onHandleCancel = () => {
    navigate("/");
  };

  return (
    <CustomCard isMobile={isMobile}>
      <SpaceBetween>
        <Heading
          title="Create Complaint"
          isArrowBack={true}
          isMobile={isMobile}
        />
      </SpaceBetween>
      <FormWrapper onSubmit={checkValidity}>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <TextField
              required
              fullWidth
              label={"Complaint Title"}
              value={complaintTitle}
              onChange={onHandleComplaintTitle}
              error={!isValidComplaintTitle}
              helperText={!isValidComplaintTitle && "* Required Field"}
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <TextField
              required
              fullWidth
              label={"Complaint Description"}
              value={complaintDescription}
              multiline
              rows={3}
              onChange={onHandleComplaintDescription}
              error={!isValidComplaintDescription}
              helperText={!isValidComplaintDescription && "* Required Field"}
            />
          </Grid>
        </Grid>
        <FormActionButton onCancelClick={onHandleCancel} loading={false} />
      </FormWrapper>
    </CustomCard>
  );
};

export default CreateComplaint;
