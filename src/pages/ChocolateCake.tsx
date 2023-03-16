import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Menu from "../components/Menu";
import "./Home.css";

const Chocolatecake: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>ChocolateCake</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle size="large">Chocolatecake</IonTitle>
            </IonToolbar>
            <IonImg src="../assets/img/chocolatecake.jpg"></IonImg>
          </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Chocolatecake;
