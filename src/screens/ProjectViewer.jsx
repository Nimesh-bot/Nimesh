import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../assets/Global";
import Header from "../components/Header";
import Loading from "../components/Loading";

import { FaHandPointRight } from "react-icons/fa";

import { Disk } from "../components";
import { ThemeContext } from "../context/theme-context";
import { getSelectedProject } from "../redux/apiCalls";

const Gallery = styled.img`
  filter: ${(props) => (props.selected ? "brightness(0.5)" : "brightness(1)")};
`;
const ContentWrapper = styled.div`
  h2 {
    color: ${(props) => props.theme.text};
  }
  p {
    color: ${(props) => props.theme.fade};
  }
  span {
    color: ${(props) => props.theme.primary};
  }
`;
const Icon = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.primary};
`;
const Span = styled.p`
  color: ${(props) => props.theme.text};
`;

const ProjectViewer = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const { project_description, isFetching } = useSelector(
    (state) => state.projects
  );

  const [selectedImage, setSelectedImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getSelectedProject(dispatch, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const display_image = project_description?.gallery[0]?.image;

    setSelectedImage(display_image);
  }, [project_description]);

  const navigate = useNavigate();

  return (
    <Container
      bg={`${theme.body}`}
      className="w-full h-full px-4 lg:px-16 py-4 flex flex-col gap-y-10"
    >
      <Header
        icon={Disk}
        title={project_description?.name}
        handleClose={() => navigate(-1)}
      />

      {
        isFetching ? (
          <Loading height="calc(100vh - 10.5rem)" />
        ) : (
          <Container
            bg={`${theme.background}`}
            className="w-full h-[calc(100vh-10.5rem)] max-h-auto rounded-md p-8 flex flex-col lg:flex-row gap-y-12 overflow-scroll"
          >
            <div className="w-full lg:w-2/5 flex-col gap-8">
              <img
                src={selectedImage}
                alt="Main"
                className="flex-1 aspect-video rounded-md mb-2"
              />
              <div className="flex gap-4 overflow-auto">
                {project_description?.gallery?.map((item, index) => (
                  <Gallery
                    src={item.image}
                    alt="Ss"
                    className="w-40 aspect-video rounded-md object-cover"
                    key={index}
                    selected={selectedImage === item.image}
                    onClick={() => setSelectedImage(item.image)}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 lg:px-8 flex flex-col gap-y-8">
              <ContentWrapper className="flex flex-col gap-y-2">
                <h2 className="text-xl font-semibol">Description</h2>
                <p className="text-xs font-light">
                  {project_description?.description}
                </p>
              </ContentWrapper>
              <ContentWrapper className="flex flex-col gap-y-2">
                <h2 className="text-xl font-semibol">Features</h2>
                {project_description?.features?.map((item, index) => (
                  <div className="ml-4 flex gap-x-2 items-center" key={index}>
                    <Icon>
                      <FaHandPointRight />
                    </Icon>
                    <Span className="text-xs font-light">{item}</Span>
                  </div>
                ))}
              </ContentWrapper>
              <ContentWrapper className="flex flex-col gap-y-2">
                <h2 className="text-xl font-semibol">Development</h2>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-light">Language and Tools:</p>
                  <div className="ml-4 flex flex-col gap-y-2 gap-x-8">
                    {project_description?.techStack?.map((item, index) => (
                      <div className="flex gap-x-2 items-center" key={index}>
                        <Icon>
                          <FaHandPointRight />
                        </Icon>
                        <Span className="text-xs font-light">{item}</Span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-light">Team Members:</p>
                  <div className="flex flex-col gap-y-2 gap-x-4 text-xs font-light ml-4">
                    {project_description?.team?.map((item, index) => (
                      <div className="flex gap-x-2 items-center" key={index}>
                        <Icon>
                          <FaHandPointRight />
                        </Icon>
                        <Span>{item}</Span>
                      </div>
                    ))}
                  </div>
                </div>
              </ContentWrapper>
              <ContentWrapper className="flex flex-col gap-y-2">
                <h2 className="text-xl font-semibol">Visit Website</h2>
                <a
                  href={project_description?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-xs font-light cursor-pointer">
                    {project_description?.url}
                  </span>
                </a>
              </ContentWrapper>
            </div>
          </Container>
        )
        // <>
        //     <p>Hello</p>
        // </>
      }
    </Container>
  );
};

export default ProjectViewer;
