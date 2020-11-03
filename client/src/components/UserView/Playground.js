import React from "react";
import styled from "styled-components";

import { Header } from "../Header";
import { Button } from "../Button";
import { TextButton } from "../TextButton";
import { Input } from "../Input";
import { ProgressBar } from "../ProgressBar";
import { StatusMessage } from "../StatusMessage";
import { ImageGallery } from "../ImageGallery";
import { AdminSearchBar } from '../AdminSearchBar'


const PlaygroundContainer = styled.div`
    /* border: 2px solid green; */
`

const ComponentWrapper = styled.div`
  box-sizing: border-box;
  width: 312px;
  border: 1px dotted green;
  & > h2 {
    margin: 64px 0px 16px 0px;
    font-size: 32px;
    font-family: Open Sans;
    font-weight: 700;
    /* border: 1px solid lightcoral; */
  }
  & > h3 {
    margin: 16px 0px 8px 0px;
    font-size: 16px;
    font-family: Open Sans;
    font-weight: 400;
    /* border: 1px solid dodgerblue; */
  }
  & > h4 {
    margin: 16px 0px 8px 0px;
    font-size: 20px;
    font-family: Open Sans;
    font-weight: 600;
    text-decoration: underline;
    /* border: 1px solid dodgerblue; */
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export default function Playground() {

    function onClick() {

    }

 
// const PlaygroundContainer = styled.div`
//   border: 2px solid green;

//   & > h1 {
//     margin: 0px;
//   }
// `;





  return (
    <PlaygroundContainer>
      <h1>Playground Component</h1>

      {/* This is the Search bar for Admin User */}
        <h1>Admin Search Bar</h1>
      <AdminSearchBar />
      {/* This is the end of Search bar */}

      {/* This is the Header */}
      <h2>Header</h2>
      <h4>Props</h4>
      <h3>none</h3>
      <h4>Prop values</h4>
      <p>default</p>
      <Header />

      {/* This is the end of the header */}

      {/* This is the Button */}
      <h1>This is the Button Component</h1>

      <p>Primary</p>
      <Button onClick={onClick} buttonStyle={"primary"} />

      <p>Secondary</p>
      <Button onClick={onClick} buttonStyle={"secondary"} />

      <p>Google button</p>
      <Button onClick={onClick} buttonStyle={"google-button"} />

      <p>'Sign in Button'</p>
      <TextButton />
      {/* end of Button */}

      {/* ********** INPUT COMPONENT */}
      <h2>Input</h2>
      <h4>Props</h4>

      <h3>'label'</h3>
      <p>Sets the input label.</p>
      <h4>'label': prop values</h4>
      <p>none</p>

      <h3>'status'</h3>
      <p>
        Sets the input component status by altering text and container styles.
      </p>
      <ComponentWrapper>
        <h3>'normal'</h3>
        <Input status={"default"} label={"Label"} />

        <h3>'active'</h3>
        <Input status={"active"} label={"Label"} />

        <h3>'warning'</h3>
        <Input status={"warning"} label={"Label"} />

        <h3>'disabled'</h3>
        <Input status={"disabled"} label={"Label"} />
      </ComponentWrapper>
      {/* ********** END INPUT COMPONENT */}

      <h3>'step'</h3>
      <p>Set the current step for the progress bar.</p>

      <h4>'step': prop values</h4>
      <p>1</p>
      <ProgressBar step={1} />
      <p>2</p>
      <ProgressBar step={2} />
      <p>3</p>
      <ProgressBar step={3} />
      {/* ********** END PROGRESSBAR COMPONENT */}

      {/* ********** STATUS MESSAGE COMPONENT */}
      <h2>Status Message</h2>
      <h4>Props</h4>

      <h3>'message'</h3>
      <p>Sets the message to render to the user.</p>
      <h4>'message': prop values</h4>
      <p>none</p>

      <h3>'status'</h3>
      <p>
        Sets the status of the component by altering the border color, font
        color, and icon image and color.
      </p>
      <h4>'status': prop values</h4>

      <p>'success'</p>
      <StatusMessage
        status={"success"}
        message={`This is your status messsage.`}
      />

      <p>'warning'</p>
      <StatusMessage
        status={"warning"}
        message={`This is your status messsage.`}
      />

      <p>'error'</p>
      <StatusMessage
        status={"error"}
        message={`This is your status messsage.`}
      />
      {/* ********** END STATUS MESSAGE COMPONENT */}

      {/* IMAGE GALLERY COMPONENT */}
      <h2>Image Gallery</h2>
      <h4>Props</h4>
      <ImageGallery />
      {/* END OF COPY FOR EACH NEW COMPONENT */}


    </PlaygroundContainer>
  );
}
