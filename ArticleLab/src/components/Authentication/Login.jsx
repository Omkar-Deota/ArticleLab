
import { Input } from "@nextui-org/react";
function Login() {
  return (
    <div>
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
    </div>
  )
}

export default Login