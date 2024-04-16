import React, { useEffect, useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";
import _ from 'lodash';

// import all components pages
import Compare from "./components/Compare/compare";
import Home from "./components/Home/home";
import Quiz from "./components/Quiz/quiz";
import Questionary from "./components/Quiz/questionary.js";
import Search from "./components/Search/search";
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import Profile from './components/Profile/profile';
import Learning from './components/Learning/learningHome.js';
import Intro from './components/Learning/Intro.js'; 
import Charging from './components/Learning/Charging.js';
import Costs from './components/Learning/Costs.js';
import Maintenance from './components/Learning/Maintenance.js';
import Environment from './components/Learning/Environment.js';
import Future from './components/Learning/Future.js';
import FAQs from './components/Learning/FAQs.js'

// mongodb+srv://weifan:info441@info441.wfotfpj.mongodb.net/

export default function App(props) {
    const [cars, setCars] = useState([]);
    const [profile, setProfile] = useState(null);
    const getUserInfo = process.env.REACT_APP_BACKEND_HOST + "/auth/login/success";
    const getCars = process.env.REACT_APP_BACKEND_HOST + "/cars/getAllCarModels";

    const getAllCars = async () => {
      fetch(getCars, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        credentials: "include",
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          return response.json().then((errorData) => {
            throw new Error(errorData.message);
          });
        })
        .then((resObject) => {
          console.log("this is the resObject");
          console.log(resObject);
          setCars(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const getUser = () => {
      fetch(getUserInfo, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        credentials: "include",
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          return response.json().then((errorData) => {
            throw new Error(errorData.message);
          });
        })
        .then((resObject) => {
          console.log("this is the resObject");
          console.log(resObject);
          setProfile(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      getAllCars();
      getUser();
    }, []);

    return (
      <div>
        <Routes>
          <Route path="/" element={<Navbar profile={profile} />}>
              <Route path="/" element={<Home/>} />
              <Route path="/Compare" element={<Compare cars={cars}/>} />
              <Route path="/Quiz" element={<Quiz/>} />
              <Route path="/Quiz/Questionary" element={<Questionary cars={cars}/>} />
              <Route path="/Search" element={<Search profile={profile} cars={cars}/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Profile" element={<Profile profile={profile}/>} />
              <Route path="/Learning" element={<Learning />} />
              <Route path="/Learning/Intro" element={<Intro />} />
              <Route path="/Learning/Charging" element={<Charging />} />
              <Route path="/Learning/Costs" element={<Costs />} />
              <Route path="/Learning/Maintenance" element={<Maintenance />} />
              <Route path="/Learning/Environment" element={<Environment />} />
              <Route path="/Learning/Future" element={<Future />} />
              <Route path="/Learning/FAQs" element={<FAQs />} />
          </Route>
        </Routes> 
      </div>
    );
  }