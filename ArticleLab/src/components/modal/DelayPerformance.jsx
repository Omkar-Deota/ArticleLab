/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import axios from "axios";

const NextModal = ({ entry_id }) => {
  const [additionalData, setAdditionalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      if (entry_id) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            `http://localhost:3000/delay-data/${entry_id}`
          );
          setAdditionalData(response.data);
        } catch (err) {
          console.log(err);
          setError("Failed to fetch data.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAdditionalData();
  }, [entry_id]);

  return (
    <Box>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <List>
          {additionalData.map((item, index) => (
            <ListItem key={index}>
              <div>
                <Typography>ID: {item.entry_id}</Typography>
                <Typography>Vehicle No: {item.vehicle_no}</Typography>
                <Typography>Delay: {item.delay_minutes} minutes</Typography>
              </div>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default NextModal;
