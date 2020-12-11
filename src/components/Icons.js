import angular from "../images/angular.png";
import cpp from "../images/cpp.png";
import java from "../images/java.png";
import mongodb from "../images/mongodb.png";
import python from "../images/python.png";
import backImg from "../images/backImg.png";
import react from "../images/react.png";

const getImage = (name) => {
  if (name === "angular") return angular;
  else if (name === "cpp") return cpp;
  else if (name === "java") return java;
  else if (name === "mongodb") return mongodb;
  else if (name === "python") return python;
  else if (name === "backImg") return backImg;
  else if (name === "react") return react;
};

export default getImage;
