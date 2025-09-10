// import React from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const SubAccountsStats = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/subaccount-details");
//   };
//   // Sample data - replace with your actual data
//   const subAccounts = Array(12)
//     .fill(null)
//     .map((_, index) => ({
//       id: index + 1,
//       name: `Sub Account Name`,
//       videoCount: 24,
//       userCount: 24,
//     }));

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       {/* Header with Search */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-2xl font-bold text-gray-900">Sub Accounts Stats</h1>

//         {/* Search Bar */}
//         <div className="relative max-w-md">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search anything..."
//             className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//           />
//         </div>
//       </div>

//       {/* Sub Accounts Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {subAccounts.map((account) => (
//           <div
//             key={account.id}
//             className="bg-white border border-gray-200 rounded-lg p-6"
//           >
//             {/* Account Name */}
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               {account.name}
//             </h3>

//             {/* Stats */}
//             <div className="space-y-3 mb-6">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Total Video Count</span>
//                 <span className="font-semibold text-gray-900">
//                   {account.videoCount} Videos
//                 </span>
//               </div>

//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Total Users</span>
//                 <span className="font-semibold text-gray-900">
//                   {account.userCount} Users
//                 </span>
//               </div>
//             </div>

//             {/* View Details Button */}
//             <button
//               onClick={handleClick}
//               className="w-full bg-white border cursor-pointer border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200"
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       <div className="flex justify-center mt-8">
//         <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
//           Load More Accounts
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubAccountsStats;

//-----------------------------------------

// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { subAccountAPI } from "../api/api";

// const SubAccountsStats = () => {
//   const navigate = useNavigate();
//   const [subAccounts, setSubAccounts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchSubAccounts();
//   }, []);

//   const fetchSubAccounts = async () => {
//     try {
//       setLoading(true);
//       const response = await subAccountAPI.getAll();
//       setSubAccounts(response.data.data);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch sub-accounts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClick = (userLocationId) => {
//     navigate(`/subaccount-details/${userLocationId}`);
//   };

//   const filteredSubAccounts = subAccounts.filter(
//     (account) =>
//       account.subAccountName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       account.userLocationId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading)
//     return <div className="p-6 text-center">Loading sub-accounts...</div>;
//   if (error)
//     return <div className="p-6 text-center text-red-500">Error: {error}</div>;

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       {/* Header with Search */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-2xl font-bold text-gray-900">Sub Accounts Stats</h1>

//         {/* Search Bar */}
//         <div className="relative max-w-md">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <input
//             type="text"
//             placeholder="Search sub-accounts..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-80"
//           />
//         </div>
//       </div>

//       {/* Sub Accounts Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredSubAccounts.map((account) => (
//           <div
//             key={account.userLocationId}
//             className="bg-white border border-gray-200 rounded-lg p-6"
//           >
//             {/* Account Name */}
//             <h3 className="text-lg font-semibold text-gray-900 mb-2">
//               {account.subAccountName}
//             </h3>
//             <p className="text-sm text-gray-500 mb-4">
//               ID: {account.userLocationId}
//             </p>

//             {/* Stats */}
//             <div className="space-y-3 mb-6">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Total Video Count</span>
//                 <span className="font-semibold text-gray-900">
//                   {account.totalVideos} Videos
//                 </span>
//               </div>

//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Total Users</span>
//                 <span className="font-semibold text-gray-900">
//                   {account.totalUsers} Users
//                 </span>
//               </div>
//             </div>

//             {/* View Details Button */}
//             <button
//               onClick={() => handleClick(account.userLocationId)}
//               className="w-full bg-white border cursor-pointer border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200"
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {filteredSubAccounts.length === 0 && (
//         <div className="text-center py-8 text-gray-500">
//           No sub-accounts found
//         </div>
//       )}

//       {/* Load More Button - Implement pagination if needed */}
//       {/* <div className="flex justify-center mt-8">
//         <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
//           Load More Accounts
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default SubAccountsStats;

//====================================

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { subAccountAPI } from "../api/api";

// Skeleton Card Component
const SkeletonCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      {/* Account Name Skeleton */}
      <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>

      {/* ID Skeleton */}
      <div className="h-4 bg-gray-100 rounded animate-pulse mb-4 w-3/4"></div>

      {/* Stats Skeleton */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
        </div>

        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="w-full h-10 bg-gray-100 rounded-md animate-pulse"></div>
    </div>
  );
};

const SubAccountsStats = () => {
  const navigate = useNavigate();
  const [subAccounts, setSubAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSubAccounts();
  }, []);

  const fetchSubAccounts = async () => {
    try {
      setLoading(true);
      const response = await subAccountAPI.getAll();
      setSubAccounts(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch sub-accounts");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (userLocationId) => {
    navigate(`/subaccount-details/${userLocationId}`);
  };

  const filteredSubAccounts = subAccounts.filter(
    (account) =>
      account.subAccountName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.userLocationId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error)
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header with Search */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Sub Accounts Stats</h1>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search sub-accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-80"
            disabled={loading}
          />
        </div>
      </div>

      {/* Sub Accounts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? // Render 8 skeleton cards while loading
            Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : // Render actual sub-accounts
            filteredSubAccounts.map((account) => (
              <div
                key={account.userLocationId}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                {/* Account Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {account.subAccountName}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  ID: {account.userLocationId}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Video Count</span>
                    <span className="font-semibold text-gray-900">
                      {account.totalVideos} Videos
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Users</span>
                    <span className="font-semibold text-gray-900">
                      {account.totalUsers} Users
                    </span>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => handleClick(account.userLocationId)}
                  className="w-full bg-white border cursor-pointer border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            ))}
      </div>

      {!loading && filteredSubAccounts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No sub-accounts found
        </div>
      )}

      {/* Load More Button - Implement pagination if needed */}
      {/* <div className="flex justify-center mt-8">
        <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
          Load More Accounts
        </button>
      </div> */}
    </div>
  );
};

export default SubAccountsStats;
