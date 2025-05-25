/* eslint-disable react/prop-types */
import {
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  entry_id: Yup.number().required("ID must be given"),
  vehicle_no: Yup.string().required("Vehicle number is required"),
  challan_quantity: Yup.number().required("Challan quantity can't be empty"),
  gross_weight: Yup.number().required("Gross weight can't be empty"),
  truck_type: Yup.string().required("Truck type is required"),
  expectedWeight: Yup.number(),
});

export default function SamplingScreen({ onSuccess, onClose }) {
  const formik = useFormik({
    initialValues: {
      entry_id: "",
      vehicle_no: "",
      challan_quantity: "",
      gross_weight: "",
      truck_type: "",
      expectedWeight: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { truck_type, ...datatosend } = values;
        console.log(truck_type);

        await axios.post(
          "http://localhost:3000/weighbridge-submit",
          datatosend
        );
        onSuccess();
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Function to calculate expected weight based on truck type
  const handleTruckTypeChange = (grossWeight, truckType) => {
    let deduction = 0;

    if (truckType === "10_wheeler") {
      deduction = 8;
    } else if (truckType === "12_wheeler") {
      deduction = 10;
    } else if (truckType === "18_wheeler") {
      deduction = 15;
    }

    const calculatedWeight = grossWeight - deduction;

    formik.setFieldValue(
      "expectedWeight",
      calculatedWeight > 0 ? calculatedWeight : 0
    );
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Typography gutterBottom component="h1" variant="h5">
        Sample Details
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          error={formik.touched.entry_id && Boolean(formik.errors.entry_id)}
          helperText={formik.touched.entry_id && formik.errors.entry_id}
          label="Entry ID"
          name="entry_id"
          sx={{ padding: "6px" }}
          type="number"
          value={formik.values.entry_id}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          error={formik.touched.vehicle_no && Boolean(formik.errors.vehicle_no)}
          helperText={formik.touched.vehicle_no && formik.errors.vehicle_no}
          label="Vehicle No"
          name="vehicle_no"
          sx={{ padding: "6px" }}
          type="text"
          value={formik.values.vehicle_no}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          error={
            formik.touched.challan_quantity &&
            Boolean(formik.errors.challan_quantity)
          }
          helperText={
            formik.touched.challan_quantity && formik.errors.challan_quantity
          }
          label="Challan Quantity"
          name="challan_quantity"
          sx={{ padding: "6px" }}
          type="number"
          value={formik.values.challan_quantity}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          error={
            formik.touched.gross_weight && Boolean(formik.errors.gross_weight)
          }
          helperText={formik.touched.gross_weight && formik.errors.gross_weight}
          label="Gross Weight"
          name="gross_weight"
          sx={{ padding: "6px" }}
          type="number"
          value={formik.values.gross_weight}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            const value = Number(e.target.value);
            formik.setFieldValue("gross_weight", value);
            handleTruckTypeChange(value, formik.values.truck_type);
          }}
        />
        <RadioGroup
          aria-label="truck-type"
          name="truck_type"
          value={formik.values.truck_type}
          onChange={(e) => {
            const value = e.target.value;
            formik.setFieldValue("truck_type", value);
            handleTruckTypeChange(formik.values.gross_weight, value);
          }}
        >
          <FormControlLabel
            control={<Radio />}
            label="10 Wheeler"
            value="10_wheeler"
          />
          <FormControlLabel
            control={<Radio />}
            label="12 Wheeler"
            value="12_wheeler"
          />
          <FormControlLabel
            control={<Radio />}
            label="18 Wheeler"
            value="18_wheeler"
          />
        </RadioGroup>
        {formik.touched.truck_type && formik.errors.truck_type && (
          <Typography color="error" variant="body2">
            {formik.errors.truck_type}
          </Typography>
        )}
        <TextField
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          label="Expected Weight"
          name="expectedWeight"
          sx={{ padding: "6px" }}
          type="number"
          value={formik.values.expectedWeight}
        />
        <Button
          color="primary"
          disabled={formik.isSubmitting}
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        <Button
          color="secondary"
          sx={{ mt: 2, ml: 2 }}
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}
