// import React from "react";
// import { ArrowLeft, X } from "lucide-react";

// const SharingHistoryModal = ({ isOpen, onClose, userName }) => {
//   // Sample sharing history data
//   const sharingHistory = [
//     {
//       id: 1,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 16",
//       date: "Jul 15, 2025, 1:24 AM",
//       status: "SENT",
//     },
//     {
//       id: 2,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 21",
//       date: "Jul 15, 2025, 12:35 AM",
//       status: "SENT",
//     },
//     {
//       id: 3,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 20",
//       date: "Jul 15, 2025, 12:34 AM",
//       status: "SENT",
//     },
//     {
//       id: 4,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "lo ninja",
//       date: "Jul 15, 2025, 12:27 AM",
//       status: "SENT",
//     },
//     {
//       id: 5,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 7",
//       date: "Jul 15, 2025, 12:24 AM",
//       status: "SENT",
//     },
//     {
//       id: 6,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 6",
//       date: "Jul 15, 2025, 12:24 AM",
//       status: "SENT",
//     },
//     {
//       id: 7,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 3",
//       date: "Jul 15, 2025, 12:15 AM",
//       status: "SENT",
//     },
//     {
//       id: 8,
//       contactName: "John Doe lj",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 2",
//       date: "Jul 15, 2025, 12:15 AM",
//       status: "SENT",
//     },
//     {
//       id: 9,
//       contactName: "John Doe",
//       contactAddress: "example@gmail.com",
//       type: "email",
//       subject: "test 1",
//       date: "Jul 15, 2025, 12:15 AM",
//       status: "SENT",
//     },
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
//         {/* Modal Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={onClose}
//               className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               <span className="text-sm">Go back</span>
//             </button>
//           </div>

//           <button
//             onClick={onClose}
//             className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">
//             Sharing History
//           </h2>

//           {/* History Table */}
//           <div className="overflow-hidden rounded-lg border border-gray-200">
//             <div className="overflow-y-auto max-h-96">
//               <table className="min-w-full divide-y divide-gray-200">
//                 {/* Table Header */}
//                 <thead className="bg-gray-50 sticky top-0">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Contact Name
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Contact Address
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Type
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Subject
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Date
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>

//                 {/* Table Body */}
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {sharingHistory.map((item) => (
//                     <tr
//                       key={item.id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {item.contactName}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {item.contactAddress}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{item.type}</div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {item.subject}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{item.date}</div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <span className="inline-flex px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
//                           {item.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SharingHistoryModal;

//-------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { ArrowLeft, X } from "lucide-react";
// import { userAPI } from "../api/api";

// const SharingHistoryModal = ({ isOpen, onClose, user }) => {
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     if (isOpen && user) {
//       fetchHistory();
//     }
//   }, [isOpen, user, page]);

//   const fetchHistory = async () => {
//     try {
//       setLoading(true);
//       const response = await userAPI.getHistory(user.userId, page, 10);
//       const newHistory = response.data.data.history;

//       if (page === 1) {
//         setHistory(newHistory);
//       } else {
//         setHistory((prev) => [...prev, ...newHistory]);
//       }

//       setHasMore(page < response.data.data.totalPages);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch history");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadMore = () => {
//     setPage((prev) => prev + 1);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
//         {/* Modal Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={onClose}
//               className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               <span className="text-sm">Go back</span>
//             </button>
//             <h2 className="text-2xl font-bold text-gray-900">
//               Sharing History - {user?.userName}
//             </h2>
//           </div>

//           <button
//             onClick={onClose}
//             className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="p-6">
//           {/* History Table */}
//           <div className="overflow-hidden rounded-lg border border-gray-200">
//             <div className="overflow-y-auto max-h-96">
//               <table className="min-w-full divide-y divide-gray-200">
//                 {/* Table Header */}
//                 <thead className="bg-gray-50 sticky top-0">
//                   <tr>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Contact Name
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Contact Address
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Type
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Subject
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Date
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Status
//                     </th>
//                   </tr>
//                 </thead>

//                 {/* Table Body */}
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {history.map((item, index) => (
//                     <tr
//                       key={index}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {item.contactName}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {item.contactAddress}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{item.type}</div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {item.subject}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">
//                           {formatDate(item.date)}
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <span
//                           className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                             item.status === "sent"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {item.status.toUpperCase()}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {history.length === 0 && !loading && (
//             <div className="text-center py-8 text-gray-500">
//               No sharing history found
//             </div>
//           )}

//           {loading && (
//             <div className="text-center py-4 text-gray-500">
//               Loading history...
//             </div>
//           )}

//           {hasMore && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={loadMore}
//                 disabled={loading}
//                 className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200 disabled:opacity-50"
//               >
//                 {loading ? "Loading..." : "Load More"}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SharingHistoryModal;

//============================================

import React, { useState, useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
import { userAPI } from "../api/api";

// Skeleton Table Row for Modal
const SkeletonHistoryRow = () => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-36"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="h-5 bg-gray-100 rounded-full animate-pulse w-16"></div>
      </td>
    </tr>
  );
};

// Skeleton Table for Modal
const SkeletonHistoryTable = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="overflow-y-auto max-h-96">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Contact Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Contact Address
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          {/* Skeleton Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonHistoryRow key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SharingHistoryModal = ({ isOpen, onClose, user }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (isOpen && user) {
      fetchHistory();
    }
  }, [isOpen, user, page]);

  useEffect(() => {
    // Reset state when modal opens
    if (isOpen) {
      setPage(1);
      setHistory([]);
      setLoading(true);
      setError(null);
    }
  }, [isOpen]);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await userAPI.getHistory(user.userId, page, 10);
      const newHistory = response.data.data.history;

      if (page === 1) {
        setHistory(newHistory);
      } else {
        setHistory((prev) => [...prev, ...newHistory]);
      }

      setHasMore(page < response.data.data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch history");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Go back</span>
            </button>
            <h2 className="text-2xl font-bold text-gray-900">
              Sharing History - {user?.userName}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 cursor-pointer hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {error ? (
            <div className="text-center py-8 text-red-500">Error: {error}</div>
          ) : loading && page === 1 ? (
            <SkeletonHistoryTable />
          ) : (
            <>
              {/* History Table */}
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <div className="overflow-y-auto max-h-96">
                  <table className="min-w-full divide-y divide-gray-200">
                    {/* Table Header */}
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Contact Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Contact Address
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="bg-white divide-y divide-gray-200">
                      {history.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.contactName}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.contactAddress}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.type}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {item.subject}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {formatDate(item.date)}
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                item.status === "sent"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {item.status.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}

                      {/* Show skeleton rows when loading more pages */}
                      {loading && page > 1 && (
                        <>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonHistoryRow key={`loading-${index}`} />
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {!loading && history.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-lg font-medium mb-2">
                    No sharing history found
                  </div>
                  <div className="text-sm">
                    This user hasn't shared any content yet.
                  </div>
                </div>
              )}

              {/* Load More Button */}
              {hasMore && !loading && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg border border-gray-300 transition-colors duration-200 disabled:opacity-50 shadow-sm"
                  >
                    Load More
                  </button>
                </div>
              )}

              {/* Loading indicator for pagination */}
              {loading && page > 1 && (
                <div className="flex justify-center mt-6">
                  <div className="bg-gray-100 text-gray-600 font-medium py-2 px-6 rounded-lg border border-gray-300">
                    Loading more history...
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SharingHistoryModal;
