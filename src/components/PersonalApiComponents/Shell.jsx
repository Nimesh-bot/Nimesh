import React, { useState } from "react";
import styled from "styled-components";
import Spiner from "../../assets/Icons/Spiner";

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const HeadingWrapper = styled.div`
    border-bottom: 0.5px solid ${(props) => props.theme.background};
    padding-bottom: 1rem;

    h3 {
        flex-[0.5];
        color: ${(props) => props.theme.primary};
    }
`;
const InputWrapper = styled.div`
  background-color: transparent;
  flex: 2;

  select {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    font-size: 14px;
    font-weight: 300;

    option {
      color: ${(props) => props.theme.body};
    }
  }
`;
const Button = styled.div`
  background-color: ${(props) => props.theme.primary}25;
  color: ${(props) => props.theme.primary};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
const Response = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  overflow: auto;
`;
const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body}15;
  backdrop-filter: blur(2px) brightness(110%);
`;

const api_options = [
  "who_am_i",
  "my_education",
  "my_hobbies",
  "profession",
  "experience",
  "strength",
  "weakness",
  "goal",
];

const Shell = ({ request }) => {
  const [loading, setLoading] = useState(false);

  const [res, setRes] = useState({
    message: "Please make a request",
  });

  const [apiReq, setApiReq] = useState("who_am_i");

  const handleSend = (req) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      if (req === undefined || req === "") {
        return setRes({
          status: "error",
          message: "Please make an API request",
        });
      }
      if (req === "who_am_i") {
        setRes({
          status: "success",
          fullname: "Nimesh Shakya",
          email: "somit409@gmail.com",
          profession: "Frontend Developer",
          age:
            new Date().getMonth() > 5
              ? new Date().getFullYear() - 2001
              : new Date().getFullYear() - 2002,
        });
      }
      if (req === "my_education") {
        setRes({
          status: "success",
          school: "Next Generation Residential Academy",
          highschool: "Trinity Internation Education",
          bachelor: "Softwarica College of IT & Ecommerce",
        });
      }
      if (req === "my_hobbies") {
        setRes({
          status: "success",
          hobbies: ["Gaming", "Anime", "Traveling"],
        });
      }
      if (req === "profession") {
        setRes({
          status: "success",
          "TripletR&D": "Software Engineer",
        });
      }
      if (req === "experience") {
        setRes({
          status: "success",
          organizations: [
            {
              name: "Triplet R&D",
              position: "Software Engineer",
              duration: "September 2024 - Present",
              contributions:
                "Contribution on television broadcasting platform's mobile and TV applications.",
            },
            {
              name: "CSI Solutions",
              position: "Software Engineer",
              duration: "January 2024 - September 2024",
              contributions:
                "Small contribution on television broadcasting platform、where I learned flutter's architecture and development for Android TV. Gained hands-on experience on Odoo. Finally CRM with Vue where I learned working with highly reusable components.",
            },
            {
              name: "Bitmosys",
              position: "Frontend Developer",
              duration: "March 2022 - December 2024",
              contributions:
                "Currently improving UI/UX of the websites and mobile apps.",
            },
            {
              name: "Ayata Incorporation",
              position: "Frontend Developer",
              duration: "February 2023 - April 2023",
              contributions:
                "Fixed bugs of ongoing projects and improved the performance of the webapp by working on feature to upload videos asynchronously without freezing the UI.",
            },
            {
              name: "Kurma Tech",
              position: "UI/UX Designer Intern",
              duration: "August 2021 - October 2021",
              contributions:
                "Assisted in designing UI/UX for the website and mobile app. And also handled the social media of few clients.",
            },
          ],
        });
      }
      if (req === "strength") {
        setRes({
          status: "success",
          strength: [
            "Teamwork",
            "Problem Solving",
            "Good Work Ethic",
            "Time Management",
          ],
        });
      }
      if (req === "weakness") {
        setRes({
          status: "success",
          weakness: ["404 Not Found"],
        });
      }
      if (req === "goal") {
        setRes({
          status: "success",
          current_goal: "Fullstack Developer",
          future_goal: "XR Developer",
        });
      }
    }, 2000);
  };

  return (
    <Container className="w-full lg:w-[calc(100vw-22rem)] h-full">
      <HeadingWrapper className="flex flex-col items-center w-full h-auto md:h-14 md:flex-row gap-y-4 gap-x-12">
        <div className="px-4">
          <h3 className="text-base font-normal cursor-pointer">GET</h3>
        </div>
        <InputWrapper className="hidden lg:flex">
          <p>https://services.saqyeah.com/api/{request}</p>
        </InputWrapper>
        <InputWrapper className="flex items-center lg:hidden">
          <p>https://services.saqyeah.com/api/</p>
          <select onChange={(e) => setApiReq(e.target.value)}>
            {api_options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </InputWrapper>
        <Button onClick={() => handleSend(request)} className="hidden lg:flex">
          SEND
        </Button>
        <Button onClick={() => handleSend(apiReq)} className="lg:hidden">
          SEND
        </Button>
      </HeadingWrapper>
      <Response>
        {loading && (
          <Loading>
            <Spiner />
          </Loading>
        )}
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(res, null, 4)}
        </pre>
      </Response>
    </Container>
  );
};

export default Shell;
