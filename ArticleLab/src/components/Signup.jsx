
const Signup=()=> {
   
  return (
    <div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <input
                            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="First Name"
                            aria-label="First Name"
                            name="firstName"
                            required={true}
                            pattern="[A-Za-z]+"
                            title="First Name should contain only letters"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                    /[^a-zA-Z]/g,
                                    ''
                                ) // Allow only alphabetic input (A-Z, a-z)
                            }}
                        />
                        <input
                            className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Last Name"
                            aria-label="Last Name"
                            name="lastName"
                          
                            required
                            pattern="[A-Za-z]+"
                            title="Last Name should contain only letters"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(
                                    /[^a-zA-Z]/g,
                                    ''
                                ) // Allow only alphabetic input (A-Z, a-z)
                            }}
                            
                        />
                        
                        <div className="relative w-full">
                            <input
                                type="password"
                                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Create Password"
                                aria-label="Create Password"
                                name="password"
                                required={true}
                            />
                        
                        </div>
                    </div>


    </div>
  )
}

export default Signup