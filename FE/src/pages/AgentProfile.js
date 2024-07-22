import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPlusCircle, FaUser } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdConfirmationNumber, MdPhone, MdEdit } from 'react-icons/md';

const AgentProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState("1234 Main St, Anytown, India");
  const [linkedIn, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#e9ecef]">
      <div className="bg-card shadow-lg rounded-lg overflow-hidden max-w-4xl w-full relative p-10">
        <button 
          onClick={toggleEditing} 
          className="absolute top-3 right-3 bg-indigo-500 text-white p-2 rounded-full hover:bg-hover-button"
        >
          <MdEdit size={20} />
        </button>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 text-center">
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
            <label htmlFor="profilePic" className="cursor-pointer relative inline-block">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="mx-auto rounded-full w-32 h-32 md:w-40 md:h-40 object-cover shadow-md"
                />
              ) : (
                <div className="mx-auto rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-[#e9ecef] border-card relative">
                  <FaUser size={48} className="text-normal-button" />
                  <FaPlusCircle size={32} className="text-normal-button absolute bottom-2 right-2" />
                </div>
              )}
            </label>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">Yasaswini Desu</h2>
          </div>
          <div className="flex-grow text-center md:text-left space-y-4 md:space-y-6 text-lg">
            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <MdConfirmationNumber className="inline-block mr-3 ml-8 text-normal-button" size={22} />
              <span>BR-1234</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <MdPhone className="inline-block mr-3 ml-8 text-normal-button" size={22} />
              <span>+91 9874563210</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <MdEmail className="inline-block mr-3 ml-8 text-normal-button" size={22} />
              <span>agent.yd@example.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600">
              <MdLocationOn className="inline-block mr-3 ml-8 text-normal-button" size={22} />
              {isEditing ? (
                <input 
                  type="text" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  className="border p-2 rounded w-full"
                />
              ) : (
                <span>{address}</span>
              )}
            </div>
            {isEditing && (
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <FaLinkedin className="inline-block mr-3 ml-8 text-normal-button" size={20} />
                  <input 
                    type="text" 
                    placeholder="LinkedIn URL" 
                    value={linkedIn} 
                    onChange={(e) => setLinkedIn(e.target.value)} 
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex items-center">
                  <FaTwitter className="inline-block mr-3 ml-8 text-normal-button" size={20} />
                  <input 
                    type="text" 
                    placeholder="Twitter URL" 
                    value={twitter} 
                    onChange={(e) => setTwitter(e.target.value)} 
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex items-center">
                  <FaFacebook className="inline-block mr-3 ml-8 text-normal-button" size={20} />
                  <input 
                    type="text" 
                    placeholder="Facebook URL" 
                    value={facebook} 
                    onChange={(e) => setFacebook(e.target.value)} 
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex items-center">
                  <FaInstagram className="inline-block mr-3 ml-8 text-normal-button" size={20} />
                  <input 
                    type="text" 
                    placeholder="Instagram URL" 
                    value={instagram} 
                    onChange={(e) => setInstagram(e.target.value)} 
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <button 
                    onClick={handleSave} 
                    className="bg-normal-button text-white p-3 rounded hover:bg-hover-button focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {!isEditing && (
          <div className="border-t p-4 flex justify-center md:justify-start space-x-4 mt-6">
            {linkedIn && (
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <FaLinkedin size={22} />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                <FaTwitter size={22} />
              </a>
            )}
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                <FaFacebook size={22} />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400">
                <FaInstagram size={22} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
 