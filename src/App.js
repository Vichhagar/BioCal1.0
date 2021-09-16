import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './component/BiorhythmCard';
import {useLocalStorage} from './hook';

function App() {
  const[name, setName] = useLocalStorage('name', '');
  const[birthDate, setBirthDate] = useLocalStorage('bd', '');
  const[targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BioCal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        {birthDate && targetDate &&
          <BiorhythmCard birthDate={ birthDate } targetDate={ targetDate }/>
        }
        
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput type="text" value = {name}
            onIonChange = {
              (event) => setName(event.detail.value)
          }/>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Birth Date</IonLabel>
          <IonDatetime displayFormat = "D MMM YYYY" value = {birthDate}
            onIonChange = {
              (event) => setBirthDate(event.detail.value)
          }/>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Target Date</IonLabel>
          <IonDatetime displayFormat = "D MMM YYYY" value = {targetDate}
            onIonChange = {
              (event) => setTargetDate(event.detail.value)
          }/>
        </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
