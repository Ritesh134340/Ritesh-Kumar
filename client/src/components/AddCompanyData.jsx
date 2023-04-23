import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Loading from "../components/Loading"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCompany} from "../redux/appRedux/action";
import { useDispatch,useSelector } from "react-redux";

const AddCompanyData = () => {
  const [url, seturl] = useState("");
  const [name, setName] = useState("");

  
  
  const dispatch = useDispatch();
  const loading=useSelector((state)=>state.appReducer.loading)




  const handleAddData = (e) => {
    e.preventDefault();
    if (!url || !name) {
      toast.error("Invalid input !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      dispatch(addCompany({ name: name, url: url })).then((res) => {
        if (res.status === 200) {
          toast.success(res.payload.mesg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setName("");
          seturl("");

        } else {
          toast.error(res.mesg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
    }
  };






  return (
   loading ? <Loading/> : <MainContainer>
   
      <form className="form">
        <label>Name</label>
        <br />
        <input
          value={name}
          type="text"
          placeholder="Enter company name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Url</label>
        <br />
        <input
          value={url}
          type="text"
          placeholder="Enter company  url"
          onChange={(e) => seturl(e.target.value)}
        />
        <br />
        <button onClick={handleAddData}>Submit</button>
      </form>
      <ToastContainer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 32%;
  margin: auto;
  border-radius: 8px;
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 28px 25px 25px 25px;

  .form {
    margin: auto;
  }

  .form > input {
    width: 100%;
    height: 38px;
    border-radius: 5px;
    border: 1px solid gray;
    padding-left: 10px;
    outline: none;
    margin-top: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
    &:focus{
    border:2px solid blue
   }
  }
  .form>label{
    font-size:15px;
  }
  .form > button {
    padding: 8px 15px;
    border-radius: 4px;
    margin-top: 30px;
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    background-color: #19376d;
    font-weight: bold;
    font-size: 16px;
  }
  @media all and (max-width: 1024px) and (min-width: 769px) {
    width: 45%;
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    width: 50%;
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    width: 83%;
  }
`;

export default AddCompanyData;
