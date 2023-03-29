import React from "react";
import Card from "../../components/card/Card";
import Column from "../../components/column/Column";
import AppHeader from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import { AppContainer, AppMain } from "./styles";

const Dashboard = () => {
  return (
    <AppContainer>
      <Modal>
        <h3>TItle</h3>
      </Modal>
      <AppHeader></AppHeader>
      <AppMain>
        <Column title="To Do">
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
        </Column>
        <Column title="In Progress">
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
        </Column>
        <Column title="Done">
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
        </Column>
        <Column title="Archived">
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
          <Card
            title="Design mockup"
            description="Copywriting content for the app to be created"
          ></Card>
        </Column>
      </AppMain>
    </AppContainer>
  );
};

export default Dashboard;
