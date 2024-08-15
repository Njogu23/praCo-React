import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddRecord = ({ handleChange, handleSubmit, record }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmitWithFeedback = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await handleSubmit(e);
      setMessage("Record added successfully!");

      // Clear the form fields
      handleChange({
        target: {
          name: "reset", // any name to trigger reset
          value: {
            date: "",
            exercise: "",
            target: "",
            sets: "",
            reps: ""
          }
        }
      });
    } catch (error) {
      setMessage("Failed to add record. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitWithFeedback}
      sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        type="date"
        label="Date"
        name="date"
        value={record.date}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        type="text"
        label="Exercise"
        placeholder="Add Exercise..."
        name="exercise"
        value={record.exercise}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        type="text"
        label="Target"
        placeholder="Add Target..."
        name="target"
        value={record.target}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        type="text"
        label="Sets"
        placeholder="Add Sets..."
        name="sets"
        value={record.sets}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        type="text"
        label="Reps"
        placeholder="Add Reps..."
        name="reps"
        value={record.reps}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding..." : "Add"}
      </Button>
      {message && (
        <Typography variant="body2" color={message.includes("successfully") ? "green" : "error"}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default AddRecord;