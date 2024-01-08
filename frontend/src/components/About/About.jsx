import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, dignissimos!</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src="../../assets/" alt="" srcset="" />
                    <Typography
                        variant="h4"
                        style={{ margin: "1vmax 0", color: "black" }}
                    >
                        {/* {about.name} */}
                        Harsh Verma
                    </Typography>

                    <Typography>
                        {/* {about.title} */}
                        Here
                    </Typography>

                    <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
                        {/* {about.subtitle} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi dolores amet reiciendis quis quaerat totam architecto laborum eaque enim exercitationem distinctio deserunt aliquam, est, consequuntur hic ipsam necessitatibus repellat? Ipsa sint tenetur est laboriosam minus dolor deserunt necessitatibus nihil eligendi consequatur molestias pariatur consequuntur obcaecati ipsam beatae nulla, asperiores illum doloremque, consectetur deleniti sapiente at animi distinctio? Sed, dolor?
                    </Typography>
                </div>

                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "5px",
                            textAlign: "right",
                        }}
                    >
                        {/* {about.description} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi dolores amet reiciendis quis quaerat totam architecto laborum eaque enim exercitationem distinctio deserunt aliquam, est, consequuntur hic ipsam necessitatibus repellat? Ipsa sint tenetur est laboriosam minus dolor deserunt necessitatibus nihil eligendi consequatur molestias pariatur consequuntur obcaecati ipsam beatae nulla, asperiores illum doloremque, consectetur deleniti sapiente at animi distinctio? Sed, dolor?
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default About;