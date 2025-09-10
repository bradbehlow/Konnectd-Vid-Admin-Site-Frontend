// import React, { useState } from "react";
// import { Search, ArrowLeft, Share } from "lucide-react";
// import SharingHistoryModal from "./SharingHistoryModal";
// import { useNavigate } from "react-router-dom";

// const SubAccountDetails = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/");
//   };

//   // Sample data - replace with your actual data
//   const subAccountUsers = Array(6)
//     .fill(null)
//     .map((_, index) => ({
//       id: index + 1,
//       userName: "Alex Smith",
//       email: "example@gmail.com",
//       videoCount: [24, 12, 15, 12, 61, 12][index] || 12,
//     }));

//   const handleViewHistory = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//   };

//   return (
//     <>
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         {/* Header with Back Button and Search */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleClick}
//               className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               <span className="text-sm">Go back</span>
//             </button>
//           </div>

//           {/* Search Bar */}
//           <div className="relative max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search anything..."
//               className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-80"
//             />
//           </div>
//         </div>

//         {/* Page Title */}
//         <h1 className="text-2xl font-bold text-gray-900 mb-8">
//           Sub Account Details
//         </h1>

//         {/* Users Table */}
//         <div className="overflow-hidden rounded-lg border border-gray-200">
//           <table className="min-w-full divide-y divide-gray-200">
//             {/* Table Header */}
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   User Name
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Video Count
//                 </th>
//                 <th className="px-6 py-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>

//             {/* Table Body */}
//             <tbody className="bg-white divide-y divide-gray-200">
//               {subAccountUsers.map((user, index) => (
//                 <tr
//                   key={user.id}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user.userName}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{user.email}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {user.videoCount}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right">
//                     <button
//                       onClick={() => handleViewHistory(user)}
//                       className="inline-flex items-center gap-2 cursor-pointer bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-sm"
//                     >
//                       <Share className="w-4 h-4" />
//                       View Share History
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Load More Button */}
//         <div className="flex justify-center mt-8">
//           <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
//             Load More
//           </button>
//         </div>
//       </div>

//       {/* Sharing History Modal */}
//       <SharingHistoryModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         userName={selectedUser?.userName}
//       />
//     </>
//   );
// };

// export default SubAccountDetails;

//------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Search, ArrowLeft, Share } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import SharingHistoryModal from "./SharingHistoryModal";
// import { subAccountAPI } from "../api/api";

// const SubAccountDetails = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const navigate = useNavigate();
//   const { userLocationId } = useParams();

//   useEffect(() => {
//     if (userLocationId) {
//       fetchUsers();
//     }
//   }, [userLocationId, page]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await subAccountAPI.getUsers(userLocationId, page, 10);
//       const newUsers = response.data.data.users;
//       console.log("Fetched users:", newUsers);

//       if (page === 1) {
//         setUsers(newUsers);
//       } else {
//         setUsers((prev) => [...prev, ...newUsers]);
//       }

//       setHasMore(page < response.data.data.totalPages);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClick = () => {
//     navigate("/");
//   };

//   const handleViewHistory = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//   };

//   const loadMore = () => {
//     setPage((prev) => prev + 1);
//   };

//   if (loading && page === 1)
//     return <div className="p-6 text-center">Loading users...</div>;
//   if (error)
//     return <div className="p-6 text-center text-red-500">Error: {error}</div>;

//   return (
//     <>
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         {/* Header with Back Button and Search */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleClick}
//               className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               <span className="text-sm">Go back</span>
//             </button>
//             <h1 className="text-2xl font-bold text-gray-900">
//               Sub Account Details
//             </h1>
//           </div>

//           {/* Search Bar - Implement search if needed */}
//           {/* <div className="relative max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search users..."
//               className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-80"
//             />
//           </div> */}
//         </div>

//         {/* Users Table */}
//         <div className="overflow-hidden rounded-lg border border-gray-200">
//           <table className="min-w-full divide-y divide-gray-200">
//             {/* Table Header */}
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   User Name
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Video Count
//                 </th>
//                 <th className="px-6 py-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>

//             {/* Table Body */}
//             <tbody className="bg-white divide-y divide-gray-200">
//               {users.map((user) => (
//                 <tr
//                   key={user.userId}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {user.userName}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{user.email}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {user.videoCount}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right">
//                     <button
//                       onClick={() => handleViewHistory(user)}
//                       className="inline-flex items-center gap-2 cursor-pointer bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-sm"
//                     >
//                       <Share className="w-4 h-4" />
//                       View Share History
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {users.length === 0 && (
//           <div className="text-center py-8 text-gray-500">
//             No users found for this sub-account
//           </div>
//         )}

//         {/* Load More Button */}
//         {hasMore && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={loadMore}
//               disabled={loading}
//               className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200 disabled:opacity-50"
//             >
//               {loading ? "Loading..." : "Load More"}
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Sharing History Modal */}
//       <SharingHistoryModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         user={selectedUser}
//       />
//     </>
//   );
// };

// export default SubAccountDetails;

//=======================================

import React, { useState, useEffect } from "react";
import { Search, ArrowLeft, Share } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import SharingHistoryModal from "./SharingHistoryModal";
import { subAccountAPI } from "../api/api";

// Skeleton Table Row Component
const SkeletonTableRow = () => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-12"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 py-2 rounded-md w-40 h-9 animate-pulse"></div>
      </td>
    </tr>
  );
};

// Skeleton Table Component
const SkeletonTable = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              User Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Video Count
            </th>
            <th className="px-6 py-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>

        {/* Skeleton Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonTableRow key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SubAccountDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const navigate = useNavigate();
  const { userLocationId } = useParams();

  useEffect(() => {
    if (userLocationId) {
      fetchUsers();
    }
  }, [userLocationId, page]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await subAccountAPI.getUsers(userLocationId, page, 10);
      const newUsers = response.data.data.users;
      console.log("Fetched users:", newUsers);

      if (page === 1) {
        setUsers(newUsers);
      } else {
        setUsers((prev) => [...prev, ...newUsers]);
      }

      setHasMore(page < response.data.data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleViewHistory = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (error)
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Header with Back Button and Search */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
              disabled={loading && page === 1}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Go back</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              Sub Account Details
            </h1>
          </div>

          {/* Search Bar - Implement search if needed */}
          {/* <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-80"
              disabled={loading && page === 1}
            />
          </div> */}
        </div>

        {/* Users Table or Skeleton */}
        {loading && page === 1 ? (
          <SkeletonTable />
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    User Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Video Count
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr
                    key={user.userId}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.userName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.videoCount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleViewHistory(user)}
                        className="inline-flex items-center gap-2 cursor-pointer bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200 text-sm"
                      >
                        <Share className="w-4 h-4" />
                        View Share History
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Show skeleton rows when loading more pages */}
                {loading && page > 1 && (
                  <>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <SkeletonTableRow key={`loading-${index}`} />
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        )}

        {!loading && users.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No users found for this sub-account
          </div>
        )}

        {/* Load More Button */}
        {hasMore && !loading && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}

        {/* Loading indicator for pagination */}
        {loading && page > 1 && (
          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 text-gray-600 font-medium py-2 px-6 rounded-lg border border-gray-300">
              Loading more users...
            </div>
          </div>
        )}
      </div>

      {/* Sharing History Modal */}
      <SharingHistoryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
      />
    </>
  );
};

export default SubAccountDetails;
