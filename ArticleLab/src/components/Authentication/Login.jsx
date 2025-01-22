
import { Input } from "@nextui-org/react";
import PropTypes from 'prop-types';

const Login = ({toggleState}) => {
  return (
    <div>
      <p className="font-semibold text-center text-3xl">Welcome back</p>
      <Input
        key="inside"
        type="text"
        label="Enter employee_ID"
        labelPlacement="inside"
        className="my-2"
      />

      <Input
      
        key="inside"
        type="password"
        label="Enter Password"
        labelPlacement="inside"
        className="my-2"
      />
      <p className="mt-3">
        Have not an account?{' '}
        <button className="text-blue-500" onClick={toggleState}>
          Register yourself..
        </button>
      </p>
    </div>
  )
}
Login.propTypes = {
  toggleState: PropTypes.func.isRequired, // Ensures toggleState is a function and required
};
export default Login