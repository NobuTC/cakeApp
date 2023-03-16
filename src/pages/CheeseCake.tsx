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
import "./Home.css";

const Cheesecake: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Cheesecake</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Cheesecake</IonTitle>
          </IonToolbar>
          <IonImg src="../assets/img/cheesecake.jpg"></IonImg>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Cheesecake;
