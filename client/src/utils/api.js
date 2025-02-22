import axios from "axios";

// Function to fetch the report data
const fetchReportData = async (fromDate, toDate, casino) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL || "";
    const response = await axios.post(
      `${baseUrl}/api/customer/v1/partner/report`,
      {
        fromDate,
        toDate,
        casino,
      }
    );
    if (response.data && response.data.data) {
      return response.data.data; // Return the filtered data
    } else {
      throw new Error("No data returned from server.");
    }
  } catch (error) {
    console.error("Error fetching report data:", error);
    throw error;
  }
};

export { fetchReportData };
