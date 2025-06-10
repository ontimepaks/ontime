'use client';
import { useSession, signIn } from 'next-auth/react';
import React, { useState, useEffect, useContext, useRef } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MyContext } from '@/context/context';
import 'remixicon/fonts/remixicon.css'












const login = () => {



  let route = useRouter()
  const { data: session, status } = useSession()

  let { setUserData } = useContext(MyContext)

  let [userRoleState, setUserRoleState] = useState("user")
  let userRole = useRef("user")

  const [form, setForm] = useState({
    email: "",
    password: "",
    authProvider: "",
    role: "user"
  });
  const [error, setError] = useState(null);









  // when i come to the google then next.js auto check that is there is previosu session created with google
  // if traces or found then it it auto check and authenticate it and get email, name and image
  // now this data is send to the backend registration route and when on this session if mistakenly, the user is not created then it create it
  // otherise in the backend registration route, we make the logic that if user is registered on some email then send res present and also data
  // si thats why the user is also not registered but we got the authentication
  useEffect(() => {

    let userData = session?.user

    // console.log(userData)

    if (session && status == "authenticated") {

      async function googleAuth() {
        try {

          // let formDataToGoogleSend = {
          //   name: userData?.name,
          //   email: userData?.email,
          //   image: userData?.image,
          //   role: userRole,
          //   authProvider: "google"
          // }


          let formDataToGoogleSend={
            email:userData?.email,
            role:userRole.current,
            authProvider:"google"
          }


          let response = await axios.post("/api/user/userLogin", formDataToGoogleSend)

          console.log(response?.data)

          if (response?.data?.success == true) {


            if (userRole.current == "user") {
              console.log("enter in home", userRole)
              route.push("/")
            } else if (userRole.current == "admin") {
              route.push("/adminHome")
            }


            localStorage.setItem("ontimeUserData", JSON.stringify(response?.data?.existingUser || response?.data?.createdUser))
            // console.log("The user is successfully authenticated with google", response.data.existingUser)
            setUserData(response?.data?.createdUser || response?.data?.existingUser)
          } else {
            alert(response?.data?.reason || response?.data?.msg)
            throw new Error("Google auth is failed")
          }

        } catch (error) {
          console.log("error from google auth in registration", error)
        }
      }
      googleAuth()


    }

    // if(status=="authenticated" && userData?.id){

    // }

  }, [session, status])








  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };









  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);


      // Basic client-side validation
      if (!form.email || !form.password) {
        setError("All fields are required.");
        return;
      }


      if (form.password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }




      const updatedForm = { ...form, authProvider: "local" }




      let response = await axios.post("/api/user/userLogin", updatedForm)
      console.log(response.data)
      if (response?.data?.success == true) {
        localStorage.setItem("ontimeUserData", JSON.stringify(response?.data?.existingUser))

        if (userRole.current == "user") {
          route.push("/")
        } else {
          route.push("/adminHome")
        }
      } else {
        alert(response?.data?.reason || response?.data?.msg || "Something went wrong. Please try again")
      }



    } catch (error) {
      console.log(error)
    }


  };











  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">





      {/* Form contianer */}
      <div
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">



        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">Login Account</h2>





        <div className="h-max w-full overflow-x-hidden border-2 border-zinc-600  rounded-lg">
          <button
            onClick={() => { setForm({ ...form, role: "user" }); userRole.current = "user"; setUserRoleState("user") }}
            className={`h-max w-1/2 flex-1 border-r-2 border-zinc-600  ${form.role == "user" ? "bg-blue-600 text-lg text-zinc-100" : null}`}>User</button>
          <button
            onClick={() => { setForm({ ...form, role: "admin" }); userRole.current = "admin"; setUserRoleState("admin") }}
            className={`h-max w-1/2 flex-1 border-r-2 border-zinc-600  ${form.role == "admin" ? "bg-blue-600 text-lg text-zinc-100" : null}`}>Admin</button>
        </div>




        {/* for to show error below button when something went wrong */}
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}







        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">







          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>





          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="password123"
              required
            />
          </div>





          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>







        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-600">
          No Account?{" "}
          <Link
            href="/registration"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>



        {
          userRoleState == "user"

            ?

            <div className="h-max w-full">

              <div className="flex items-center space-x-2">
                <span className="flex-1 h-px bg-gray-300"></span>
                <span className="text-xs text-gray-500 uppercase">Or</span>
                <span className="flex-1 h-px bg-gray-300"></span>
              </div>


              <button
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <i className="ri-google-fill     text-2xl "></i>
                Login with Google
              </button>


            </div>


            :
            null

        }


        {/* Divider */}








        {/* Google Sign-Up Button */}
        {/* No need to change th signIn, both login and signIn are done by this */}


      </div>






    </div>
  )
}

export default login