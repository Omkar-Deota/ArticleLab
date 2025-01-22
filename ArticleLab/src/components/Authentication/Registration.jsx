import { Input } from "@nextui-org/react";
import PropTypes from 'prop-types';

const Registration = ({toggleState}) => {
  return (
    <div className=" ">
      <p className="font-semibold text-center text-3xl">Create an account</p>
      <Input
        key="inside"
        type="text"
        label="Employee_ID"
        labelPlacement="inside"
        className="my-2"
      />

      <Input
        key="inside"
        type="text"
        label="Employee_Name"
        labelPlacement="inside"
        className="my-2"
      />

      <Input
        key="inside"
        type="text"
        label="Designation"
        labelPlacement="inside"
        className="my-2"
      />

      <Input
        key="inside"
        type="email"
        label="Email"
        labelPlacement="inside"
        className="my-2"
      />

      <Input
        key="inside"
        type="password"
        label="Set your Password"
        labelPlacement="inside"
        description="Password should be max then 8 character:"
        className="my-2"
      />
      <p>
        Already have an account?{" "}
        <button className="text-blue-500" onClick={toggleState}>
          Login
        </button>
      </p>
      
    </div>
  );
  
};
Registration.propTypes = {
  toggleState: PropTypes.func.isRequired, // Ensures toggleState is a function and required
};
export default Registration;
