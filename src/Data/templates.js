import templateOneImg from "../Img/resume-template-one.JPG";
import templateTwoImg from "../Img/resume-template-two.JPG";
import templateThreeImg from "../Img/resume-template-three.JPG";
import templateFourImg from "../Img/resume-template-four.JPG";
import Template1 from "../Templates/Template_1";
import Template2 from "../Templates/Template_2";
import Template3 from "../Templates/Template_3";
import Template4 from "../Templates/Template_4"
// Template one
export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  // Template Two
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
  // Template Three
  {
    id: 3,
    template_name: "Template Three",
    template_img: templateThreeImg,
    template: <Template3 />,
  },
  // Template Four
  {
    id: 4,
    template_name: "Template Four",
    template_img: templateFourImg,
    template: <Template4 />,
  },
  
];
