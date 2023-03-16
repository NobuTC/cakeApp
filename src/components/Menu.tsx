import {
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem routerLink="/">home</IonItem>
          <IonItem routerLink="/cheesecake">cheesecake</IonItem>
          <IonItem routerLink="/chocolatecake">chocolatecake</IonItem>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
