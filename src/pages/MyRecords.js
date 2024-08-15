import React, { useEffect, useState } from "react";
import AddRecord from "../components/AddRecord";
import { db } from "../firebase"; // Import Firebase Firestore instance
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const MyRecords = () => {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState({
    date: "",
    exercise: "",
    target: "",
    sets: "",
    reps: ""
  });
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setRecord({
      ...record,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "records"), record);

      // Reset form and fetch new data
      setRecord({
        date: "",
        exercise: "",
        target: "",
        sets: "",
        reps: ""
      });
      fetchData();

      // Show success toast notification
      toast.success("Record added successfully!");
    } catch (err) {
      console.error("Error adding document: ", err);

      // Show error toast notification
      toast.error("Failed to add record. Please try again.");
    }
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "records"));
      const records = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(records);
    } catch (err) {
      console.error("Failed to fetch data:", err);

      // Show error toast notification
      toast.error("Failed to fetch records. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "records", id));
      fetchData();

      // Show success toast notification
      toast.success("Record deleted successfully!");
    } catch (err) {
      console.error("Failed to delete record:", err);

      // Show error toast notification
      toast.error("Failed to delete record. Please try again.");
    }
  };

  const handleEdit = async (id, updatedRecord) => {
    try {
      const recordRef = doc(db, "records", id);
      await updateDoc(recordRef, updatedRecord);
      fetchData();

      // Show success toast notification
      toast.success("Record updated successfully!");
    } catch (err) {
      console.error("Failed to update record:", err);

      // Show error toast notification
      toast.error("Failed to update record. Please try again.");
    }
  };

  const filteredData = data.filter(item =>
    item.exercise.toLowerCase().includes(search) ||
    item.date.toLowerCase().includes(search)
  );

  const tableData = filteredData.map((item) => (
    <TableRow key={item.id}>
      <TableCell>{item.date}</TableCell>
      <TableCell>{item.exercise}</TableCell>
      <TableCell>{item.target}</TableCell>
      <TableCell>{item.sets}</TableCell>
      <TableCell>{item.reps}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleEdit(item.id, item)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(item.id)}
          style={{ marginLeft: 8 }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          My Records
        </Typography>
        <AddRecord handleChange={handleChange} handleSubmit={handleSubmit} record={record} />
        <Box mt={2} mb={4}>
          <TextField
            variant="outlined"
            label="Search by exercise or date"
            fullWidth
            onChange={handleSearch}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Exercise</TableCell>
                <TableCell>Target</TableCell>
                <TableCell>Sets</TableCell>
                <TableCell>Reps</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{tableData}</TableBody>
          </Table>
        </TableContainer>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
      </Box>
    </Container>
  );
};

export default MyRecords;