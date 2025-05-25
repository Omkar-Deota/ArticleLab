import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EntryDetailsModal from "../../components/modal/EntryDetails";
import SamplingScreen from "../../components/modal/NewRecord";
import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import { Button } from "@nextui-org/react";

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openEntryModal, setOpenEntryModal] = useState(false);
  const [openSamplingModal, setOpenSamplingModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const navigate = useNavigate();

  const handleButtonClick = (e, entryId, vehicle_no) => {
    e.stopPropagation();
    navigate(`/predict/${entryId}`, { state: { vehicleNumber: vehicle_no } });
  };

  const handleRowClick = (params) => {
    setSelectedData(params.row);
    setOpenEntryModal(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/weighbridge-data"
      );
      const dataWithId = response.data.map((row, index) => ({
        id: row.id || index + 1,
        ...row,
      }));
      const sortedData = dataWithId.sort((a, b) => b.id - a.id);

      setRows(sortedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseEntryModal = () => {
    setOpenEntryModal(false);
    setSelectedData(null);
  };

  const handleOpenSamplingModal = () => {
    setOpenSamplingModal(true);
  };

  const handleCloseSamplingModal = () => {
    setOpenSamplingModal(false);
  };

  const columns = [
    { field: "entry_id", headerName: "Entry Id", width: 120 },
    { field: "vehicle_no", headerName: "Vehicle No", flex: 1, minWidth: 150 },
    {
      field: "challan_quantity_MT",
      headerName: "Challan Quantity (MT)",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "gross_weight_MT",
      headerName: "Gross Weight (MT)",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "expected_weight_MT",
      headerName: "Expected Weight (MT)",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,

      renderCell: (params) => (
        <Button
          onClick={(e) =>
            handleButtonClick(e, params.row.entry_id, params.row.vehicle_no)
          }
          className="bg-orange-400 font-bold tracking-wide rounded-xl hidden md:block mt-1.5"
        >
          Check
        </Button>
      ),
    },
  ];

  return (
    <>
      <Nav />
      <Container maxWidth="xl my-4 bg-[#ebebeb] border-black p-5 rounded-xl">
        <div className="flex mb-5 items-center justify-between">
          <p className="text-5xl text-gray-700 tracking-wide font-semibold">
            Truck Data
          </p>
          <Button
            size="md"
            className="bg-orange-400 font-bold tracking-wide rounded-xl hidden md:block"
            onClick={handleOpenSamplingModal}
          >
            Add New Entry
          </Button>
        </div>
        <div style={{ height: "80vh", width: "100%" }}>
          <DataGrid
            columns={columns}
            loading={loading}
            rows={rows}
            onRowClick={handleRowClick}
          />
        </div>
      </Container>

      {selectedData && (
        <EntryDetailsModal
          open={openEntryModal}
          selectedData={selectedData}
          onClose={handleCloseEntryModal}
        />
      )}

      <Modal
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
        open={openSamplingModal}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        }}
        onClose={handleCloseSamplingModal}
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
          <SamplingScreen
            onClose={handleCloseSamplingModal}
            onSuccess={() => {
              fetchData(); // Refresh the data
              handleCloseSamplingModal(); // Close the modal
            }}
          />
        </Box>
      </Modal>
      <Footer />
    </>
  );
};

export default DataTable;
