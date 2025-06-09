
"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import { MyContext } from "@/context/context";
import { useRouter } from "next/navigation";
import 'remixicon/fonts/remixicon.css'







export default function Registration() {


  const route = useRouter()

  const { data: session, status } = useSession()

  let {
    setUserData,
    userData
  } = useContext(MyContext)

  let [googleAuthSignInBtnClicked, setGoogleAuthSignInBtnClicked] = useState(false)
let googleAuthSignInBtnClickedRef= useRef(false)


  const userRole = useRef("user")
  let [userRoleState, setUserRoleState] = useState("user")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    authProvider: "",
    role: "user"
  });
  const [error, setError] = useState(null);













  useEffect(() => {

    let userData = session?.user

    // console.log(userData)

    // console.log("Entered in google auth session in registration")

    if (session && status == "authenticated" && googleAuthSignInBtnClickedRef.current == true) {

      // console.log("Entered in session condition")



      async function googleAuth() {
        try {

          // console.log("entered in googleAuth function")

          let formDataToGoogleSend = {
            name: userData?.name,
            email: userData?.email,
            image: userData?.image,
            role: userRole.current,
            authProvider: "google"
          }

          let response = await axios.post("/api/user/userRegistration", formDataToGoogleSend)

          console.log(response?.data)

          if (response?.data?.success == true) {

            console.log("Response is true and entered in condition of true")
            if (userRole.current == "user") {
              console.log("enter in hoem", userRole)
              route.push("/")
            } else if (userRole.current == "admin") {
              route.push("/adminHome")
            }

            localStorage.setItem("ontimeUserData", JSON.stringify(response?.data?.existingUser || response?.data?.createdUser))
            // console.log("The user is successfully authenticated with google", response.data.createdUser, response.data.existingUser)
            setUserData(response?.data?.createdUser || response?.data?.existingUser)
            // console.log(userRole)

          } else {
            alert(response?.data?.reason || response?.data?.msg)
            // throw new Error("Google auth is failed")
          }

        } catch (error) {
          // console.log("error from google auth in registration", error)
        }
      }
      googleAuth()

      googleAuthSignInBtnClickedRef.current==false


    }


  }, [session, status])
















  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };







  useEffect(() => {
    console.log(userRole.current)
  }, [userRole.current])











  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Entered in handle Submit of registration page")

      setError(null);
      // // console.log(form)
      // Basic client-side validation
      if (!form.name || !form.email || !form.phoneNo || !form.password) {
        setError("All fields are required.");
        return;
      }

      if (form.password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }


      const updatedForm = { ...form, authProvider: "local" }
      // console.log(updatedForm)


      let response = await axios.post("/api/user/userRegistration", updatedForm)

      console.log(response.data)

      if (response?.data?.success == true) {

        console.log(userRole)
        if (userRole.current == "user") {
          console.log("enter in hoem", userRole)
          route.push("/")
        } else if (userRole.current == "admin") {
          route.push("/adminHome")
        }


        localStorage.setItem("ontimeUserData", JSON.stringify(response?.data?.existingUser || response?.data?.createdUser))
        setUserData(response?.data?.existingUser || response?.data?.createdUser)


        // console.log(response.data)
      } else {
        alert(response?.data?.reason || response?.data?.msg || "Something went wrong. Please try again.")
      }








    } catch (error) {
      console.log(error)
    }


  };















  function handleUserButtonClick() {
    console.log("enter in user button")
    setForm({ ...form, role: "user" });
    setUserRoleState("user")
    userRole.current = "user"
  }

  function handleAdminButtonClick() {
    console.log("enter in admin button")
    setForm({ ...form, role: "admin" });
    setUserRoleState("admin")
    userRole.current = "admin"
  }











  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">





      {/* Form contianer */}
      <div
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">



        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>





        <div className="h-max w-full overflow-x-hidden border-2 border-zinc-600  rounded-lg">
          <button
            onClick={handleUserButtonClick}
            className={`h-max w-1/2 flex-1 border-r-2 border-zinc-600  ${form.role == "user" ? "bg-blue-600 text-lg text-zinc-100" : null}`}>User</button>
          <button
            onClick={handleAdminButtonClick}
            className={`h-max w-1/2 flex-1 border-r-2 border-zinc-600  ${form.role == "admin" ? "bg-blue-600 text-lg text-zinc-100" : null}`}>Admin</button>
        </div>




        {/* for to show error below button when something went wrong */}
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}







        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">







          {/* Username */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your username"
              required
            />
          </div>






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






          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phoneNo"
              id="phoneNo"
              value={form.phoneNo}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="+92 330 9887657"
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
            Create Account
          </button>



        </form>







        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Log in
          </Link>
        </p>








        {
          userRoleState == "user" ?


            <div className="h-max w-full">

              <div className="flex items-center space-x-2">
                <span className="flex-1 h-px bg-gray-300"></span>
                <span className="text-xs text-gray-500 uppercase">Or</span>
                <span className="flex-1 h-px bg-gray-300"></span>
              </div>





              <button
                onClick={() => {
                  signIn("google", {
                    callbackUrl: `${window.location.origin}/registration`
                  });
                  googleAuthSignInBtnClickedRef.current==true
                  googleAuthSignInBtnClicked(true)
                }}
                className="w-full flex items-center justify-center gap-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <i className="ri-google-fill     text-2xl "></i>
                Sign up with Google
              </button>

            </div>



            :
            null
        }










        {/* Google Sign-Up Button */}








      </div>






    </div >
  );
}

