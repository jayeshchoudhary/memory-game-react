import angular from "../images/angular.png";
import cpp from "../images/cpp.png";
import java from "../images/java.png";
import mongodb from "../images/mongodb.png";
import python from "../images/python.png";
import backImg from "../images/backImg.png";
import react from "../images/react.png";
import graphql from "../images/graphql.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import typescript from "../images/typescript.png";
import postgresql from "../images/postgresql.png";
import veu from "../images/veu.png";

const getImage = (name) => {
  if (name === "angular") return angular;
  else if (name === "cpp") return cpp;
  else if (name === "java") return java;
  else if (name === "mongodb") return mongodb;
  else if (name === "python") return python;
  else if (name === "react") return react;
  else if (name === "backImg") return backImg;
  else if (name === "graphql") return graphql;
  else if (name === "css") return css;
  else if (name === "javascript") return javascript;
  else if (name === "typescript") return typescript;
  else if (name === "postgresql") return postgresql;
  else if (name === "veu") return veu;
};

export default getImage;
