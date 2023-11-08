import { useEffect, useState } from "react";
import "../../../css/SubmittedRequest.css";
import axios from "axios";

const SubmittedRequests = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
const getLatestRequest=async()=>{
try {
  
  const res= await axios.get("https://hackathon-waste-api.onrender.com/api/v1/waste-request/latest",{
    headers:{
      token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
    }
  })
  setData(res.data)
} catch (error) {
  console.log(error)
}
}
getLatestRequest()
  },[])

  return (
    <div className="submitted_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Your recent request</h4>
        </div>
      <div className="details">
      
          <div className="data">
            <h6>Name: </h6>
            <p>{data.username}</p>
          </div>
          <div className="data">
            <h6>Location:</h6>
            <p>{data.location}</p>
          </div>
          <div className="data">
            <h6>Landmark:</h6>
            <p>{data.landmark}</p>
          </div>
          <div className="data">
            <h6>Date and Time:</h6>
            <p>{data?.data}</p>
          </div>
          <div className="data">
            <h6>Waste Type:</h6>
            <p>{data.wasteType}</p>
          </div>
          <div className="data">
            <h6>Number Of Bins:</h6>
            <p>{data.numberOfBins}</p>
          </div>
          <div className="data">
            <h6>Service Option:</h6>
            <p>{data.serviceOption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedRequests;
