import React, { useState } from "react";
import axios from "axios";
import {
  BookOpen,
  CalendarDays,
  Clock,
  Plane,
  AlertTriangle,
  MessageCircle,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, onClick }) => (
  <div
    className="flex items-center space-x-2 text-[#F1F3F9] cursor-pointer hover:text-blue-400"
    onClick={onClick}
  >
    <Icon size={18} />
    <span>{label}</span>
  </div>
);

const tabData = [
  { id: "home", label: "Home" },
  { id: "timeline", label: "Timeline" },
  { id: "content", label: "Content" },
  { id: "settings", label: "Settings" },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleStartSession = async () => {
    try {
      const response = await axios.post("http://localhost:8000/courses", {
        courseName: "Custom 1:1 Literature",
        language: "English",
        learner: "Emma Williams",
        host: "James Anderson",
        time: "Sun, 10:00 am - 11:00 am",
      });
      console.log("Session started:", response.data);
      alert("Session successfully posted!");
    } catch (error) {
      console.error("Error starting session:", error);
      alert("Failed to start session.");
    }
  };

  const SidebarItem = ({ icon: Icon, label, to }) => (
    <Link
      to={to}
      className="flex items-center space-x-2 text-[#F1F3F9] cursor-pointer hover:text-blue-400"
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="flex h-screen bg-[#0D1224] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#0D1224] p-6 space-y-6 border-r border-gray-700">
        <div className="text-xl font-bold text-white mb-8">
          Bright Future Academy
        </div>
        <nav className="space-y-4">
          <SidebarItem icon={BookOpen} label="Courses" to="/courses" />
          <SidebarItem icon={CalendarDays} label="Calendar" />
          <SidebarItem icon={Clock} label="Working Hours" />
          <SidebarItem icon={Plane} label="Leaves" />
          <SidebarItem icon={AlertTriangle} label="Session conflicts" />
          <SidebarItem icon={MessageCircle} label="Chats" />
          <SidebarItem icon={Bell} label="Notifications" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-[#F9FAFB] text-black overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Custom 1:1 Literature</h1>
            <p className="text-gray-600">English</p>
          </div>
          <button
            onClick={handleStartSession}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Start Adhoc Session
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4 flex">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 ${
                activeTab === tab.id
                  ? "border-b-2 border-[#0D1224] font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "home" && (
            <>
              <h2 className="text-lg font-semibold">1 Upcoming Session</h2>
              <div className="bg-white rounded shadow p-4 mt-4">
                <div className="text-gray-500">May 2025</div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <div className="font-bold">Live Session</div>
                    <div className="text-sm text-gray-600">
                      Hosted by James Anderson
                    </div>
                    <div className="text-sm text-gray-600">
                      Sun, 10:00 am - 11:00 am
                    </div>
                  </div>
                  <button
                    className="bg-[#0D1224] text-white px-4 py-2 rounded-md"
                    onClick={handleStartSession}
                  >
                    Start
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="bg-white rounded shadow p-6 text-center">
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-sm text-gray-500">Remaining</div>
                  <div className="text-sm text-gray-500">Consumed</div>
                  <div className="text-sm text-gray-500">Total</div>
                  <p className="mt-4 text-gray-600">
                    No session credits assigned
                  </p>
                </div>

                <div className="bg-white rounded shadow p-6">
                  <div className="text-sm font-medium text-gray-500">
                    Learner
                  </div>
                  <div className="mt-2 font-bold">Emma Williams</div>
                </div>
              </div>
            </>
          )}

          {activeTab === "timeline" && <p>Timeline content goes here...</p>}
          {activeTab === "content" && (
            <p>Content materials will be shown here.</p>
          )}
          {activeTab === "settings" && (
            <p>Course settings and preferences go here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
