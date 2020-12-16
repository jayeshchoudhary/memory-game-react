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
import vue from "../images/vue.png";

const getImage = (name) => {
  switch (name) {
    case "angular":
      return angular;
    case "cpp":
      return cpp;
    case "java":
      return java;
    case "mongodb":
      return mongodb;
    case "python":
      return python;
    case "react":
      return react;
    case "graphql":
      return graphql;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "postgresql":
      return postgresql;
    case "vue":
      return vue;
    default:
      return backImg;
  }
};

export default getImage;
