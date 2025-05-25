import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import Charts from "../components/Charts/Charts";
import WeightChart from "../components/Charts/WeightChart";

const DetailsPage = () => {
  const { entry_id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [weight, setWeight] = useState([]);
  const [gcv, setGcv] = useState([]);
  const [pweight, setPweight] = useState(0);
  const [predicting, setPredicting] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [vehicleOptions, setVehicleOptions] = useState([]);
  const selectedVehicleNumber = location.state?.vehicleNumber || null;
  const [selectedVehicle, setSelectedVehicle] = useState(selectedVehicleNumber);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/dashboard/${entry_id}`
      );
      const weight_diff = await axios.get(
        `http://localhost:3000/weight-diff/${entry_id}`
      );
      const realGcv = await axios.get(
        `http://localhost:3000/real-gcv/${entry_id}`
      );

      setGcv(realGcv.data);

      if (weight_diff.data.length > 0) {
        const weightDiffEntry = weight_diff.data.find(
          (entry) => entry.entry_id === Number(entry_id)
        );

        if (weightDiffEntry) {
          setPweight(
            weightDiffEntry["(wb.expected_weight_MT-wb.challan_quantity_MT)"]
          );
        } else {
          console.error("Entry not found for the specified entry_id.");
        }
      } else {
        console.error(
          "No data found in weight_diff for the specified entry_id."
        );
      }

      setWeight(weight_diff.data);
      setData(response.data);

      const vehicles = [
        ...new Set(response.data.map((item) => item.vehicle_no)),
      ];

      setVehicleOptions(["All", ...vehicles]);
      setName(response.data[0]?.t_id);
      setSelectedVehicle(selectedVehicle);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handlePredictQuality = async () => {
    setPredicting(true);
    try {
      const vehicleNumber = data[0]?.vehicle_no;
      const delay = data[0]?.delay_minutes;
      const weightVariation = pweight;
      const tId = data[0]?.t_id;

      const payload = {
        vehicle_no: vehicleNumber,
        delay: delay,
        weight_variation: weightVariation,
        t_id: tId,
      };

      const response = await axios.post(
        `http://localhost:3000/predict-quality`,
        payload
      );

      setPredictionResult(response.data);
      onOpen();
    } catch (error) {
      console.error("Error predicting quality:", error);
    } finally {
      setPredicting(false);
    }
  };

  const handleSendAlert = async () => {
    try {
      const gcv = predictionResult?.predictions?.gcv.toFixed(4);
      const moisture = predictionResult?.predictions?.moisture.toFixed(2);
      const payload = {
        gcv,
        moisture,
        entry_id,
        name,
      };

      const response = await axios.post(
        "http://localhost:3000/send-alert",
        payload
      );
      if (response.status === 200) {
        setShowSnackbar(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData =
    selectedVehicle === "All"
      ? data
      : data.filter((item) => item.vehicle_no === selectedVehicle);

  const filteredWeight =
    selectedVehicle === "All"
      ? weight
      : weight.filter((item) => item.vehicle_no === selectedVehicle);

  const filteredGcv =
    selectedVehicle === "All"
      ? gcv
      : gcv.filter((item) => item.vehicle_no === selectedVehicle);

  useEffect(() => {
    fetchData();
  }, [entry_id]);

  return (
    <>
      <Nav />
      <div className="flex items-center flex-row-reverse gap-6 w-full mt-10 max-md:block  max-md:space-y-2 max-md:ml-2 max-md:mb-10">
        <div className="bg-orange-600 p-3 max-md:p-2 w-fit rounded-xl   text-white">
          <Typography gutterBottom variant="h6">
            Details for Entry ID: {entry_id}
          </Typography>
          <Typography gutterBottom variant="h6">
            Transporter ID: {name}
          </Typography>
        </div>

        <Select
          label="Filter by Vehicle Number"
          placeholder={selectedVehicleNumber}
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
          className="w-64"
        >
          {vehicleOptions.map((vehicle) => (
            <SelectItem key={vehicle} value={vehicle}>
              {vehicle}
            </SelectItem>
          ))}
        </Select>
      </div>

      <Container maxWidth="md" className="mb-8">
        {!loading && <Charts data={filteredData} realData={filteredGcv} />}
        {!loading && <WeightChart data={filteredWeight} />}

        <div className="flex gap-10 mt-5 justify-center">
          <Button
            disabled={predicting}
            onClick={handlePredictQuality}
            className="bg-orange-400 font-bold tracking-wide rounded-xl"
          >
            {predicting ? <CircularProgress size={24} /> : "Predict Quality"}
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-xl">
                    Prediction Result
                  </ModalHeader>
                  <ModalBody>
                    <Typography>
                      <strong>Predicted GCV:</strong>{" "}
                      {predictionResult?.predictions?.gcv.toFixed(2)}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Predicted Moisture:</strong>{" "}
                      {predictionResult?.predictions?.moisture.toFixed(2)}%
                    </Typography>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      onPress={handleSendAlert}
                      // onPress={() => setShowSnackbar(true)}
                      className=" bg-red-200 font-bold tracking-wide rounded-xl border-2 border-red-400"
                    >
                      Send Alert
                    </Button>
                    <Button
                      onPress={onClose}
                      className=" bg-orange-400 font-bold tracking-wide rounded-xl"
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </Container>
      <Footer />

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Suspicious alert sent Successfully !!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DetailsPage;
