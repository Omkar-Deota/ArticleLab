import { Input } from "@nextui-org/react";

function Registration() {
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
      <p>Already have an account?  <button className="text-blue-500" >Login</button></p>
    </div>
  );
}

export default Registration;
