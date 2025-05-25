/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Box, Typography, Tabs, Tab } from "@mui/material";
import NextModal from "./DelayPerformance";
import { Button } from "@nextui-org/react";

const EntryDetailsModal = ({ open, onClose, selectedData }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Modal
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Entry Details" />
          <Tab label="Performance" />
        </Tabs>

        {tabValue === 0 && selectedData && (
          <Box sx={{ padding: "16px" }}>
            <Typography>ID: {selectedData.entry_id}</Typography>
            <Typography>Vehicle No: {selectedData.vehicle_no}</Typography>
            <Typography>
              Challan Quantity: {selectedData.challan_quantity_MT} MT
            </Typography>
          </Box>
        )}
        {tabValue === 1 && selectedData && (
          <NextModal entry_id={selectedData.entry_id} />
        )}

        <Button
          className="bg-orange-400 font-bold tracking-wide rounded-xl hidden md:block"
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default EntryDetailsModal;
