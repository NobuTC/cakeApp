import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Menu from "../components/Menu";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <Menu></Menu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Homepage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader>
            <IonToolbar>
              <IonTitle size="large">Cake</IonTitle>
            </IonToolbar>

            <IonItem routerLink="/cheesecake">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Cheesecake</IonCardTitle>
                  <IonCardSubtitle>Cheese</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Cheesecake is on of my favorite cake!
                </IonCardContent>
              </IonCard>
            </IonItem>

            <IonItem routerLink="/chocolatecake">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Chocolate cake</IonCardTitle>
                  <IonCardSubtitle>Chocolate</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Chocolate is good cake too.</IonCardContent>
              </IonCard>
            </IonItem>
          </IonHeader>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
