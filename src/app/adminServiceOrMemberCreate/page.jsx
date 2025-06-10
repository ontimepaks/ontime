'use client';
import React, { useContext, useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import axios from 'axios';
import { MyContext } from '@/context/context';
import { useRouter } from 'next/navigation';


const AdminCreateForm = () => {


  let route = useRouter()

  const [resource, setResource] = useState();

  let {
    setAllMembersData,
    setCurrentAdminNav
  } = useContext(MyContext)

  const [mode, setMode] = useState('service');
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    price: '',
    contact: "",
    catag: ""
  });





  useEffect(() => {
    // // console.log("Resourse of cloudinary: ", resource)
    // console.log(mode)
  }, [mode])




  const handleModeChange = (newMode) => {
    setMode(newMode);
    // reset form fields when toggling
    setFormData({
      name: '',
      desc: '',
      price: '',
      contact: "",
      catag: ""
    });
  };





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };















  const handleSubmit = async (e) => {
    e.preventDefault();


    try {



      if (mode == "member") {
        let response = await axios.post("/api/member/createMember", formData)

        console.log(response.data)

        if (response?.data?.success == true) {
          // setAllMembersData(response?.data?.createdMember)
          route.push("/adminHome")
          setCurrentAdminNav("members")
          // console.log(response.data)
        } else {
          alert("THe req to create member is failed")
        }
      }
      else if (mode == "service") {
        let response = await axios.post("/api/services/createService", formData)
        if (response?.data?.success == true) {
          route.push("/adminHome")
          setCurrentAdminNav("members")
        } else {
          alert("THe req to create service is failed")
        }
      }







    } catch (error) {
      console.log(error)
    }


    // console.log({ mode, ...formData });
  };
























  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 py-10 px-4">








      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >





        {/* Upper Heading */}
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-6 text-center font-extrabold">
          {mode === 'service' ? 'Create Service' : 'Create Member'}
        </h2>






        {/* Toggle Buttons */}
        <div className="h-max w-full flex justify-center space-x-4 mb-8">
          <button
            onClick={() => handleModeChange('service')}
            className={`px-5 py-2 rounded-lg font-medium transition 
            ${mode === 'service'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'} 
            shadow-sm`}
          >
            Service
          </button>
          <button
            onClick={() => handleModeChange('member')}
            className={`px-5 py-2 rounded-lg font-medium transition 
            ${mode === 'member'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'} 
            shadow-sm`}
          >
            Member
          </button>
        </div>









        {/* Name Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={`Enter ${mode === 'service' ? 'service' : 'member'} name`}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="desc">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            value={formData.desc}
            onChange={handleInputChange}
            rows="4"
            placeholder={`Enter ${mode === 'service' ? 'service' : 'member'} description`}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          />
        </div>

        {/* Price Input (only for Service) */}
        {mode === 'service' && (
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter service price"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        )}



        {
          mode === "member"
            ?

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="contact">
                Contact
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter member contact"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>



            :

            null

        }



        {
          mode === "service"
            ?

            <div className="w-full mb-10">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="catag">
                Contact
              </label>
              <select
                name='catag'
                value={formData.catag}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="graphicDesginAndBranding">Graphic Design & Branding</option>
                <option value="webAndEcommerce">Web & Ecommerce</option>
                <option value="3dModelingAndVisualization">3D Modeling & Visualization</option>
                <option value="videoProductionAndAnimation">Video Production And Animation</option>
                <option value="socialMediaManagementAndAds">Social Media Management & Ads</option>
                <option value="printingAndPackaging">Printing And Packaging</option>
                <option value="businessAutomation">Business Automation</option>
                <option value="photographyAndVideoGraphy">Photography And Videography</option>
                <option value="trandingAndCourses">Training And Courses</option>
                <option value="artificialInteligenceServices">Artificial Intelligence Services</option>
                <option value="consultingServices">Consulting Services</option>
                <option value="accountingSoftwareIntegration">Accounting Software Integration</option>
                <option value="instituteAndInternship">Institute & Internship</option>
              </select>
            </div>

            :

            null

        }




        {/* Submit Button */}
        <div className="h-max w-full">
          <button
            type="submit"
            className="h-max w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Create
          </button>
        </div>





      </form>







      {/* 
      <CldUploadWidget
        className='h-max w-full bg-red-200 p-10'
        uploadPreset="ml_default"
        onSuccess={(result, { widget }) => {
          setResource(result?.info);  // { public_id, secure_url, etc }
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => {

          function handleFileUploadClick() {
            setResource(null)
            open()
          }


          return (
            <button onClick={handleFileUploadClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
 */}

    </div>
  );
};

export default AdminCreateForm;
