import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle 
} from "@ionic/react";
import { calculateBiorhythms } from "../calculation";
import dayjs from "dayjs";
import BiorhythmChart from './BiorhythmChart'
import './BiorhythmCard.css';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY');
}

function BiorhythmCard({birthDate, targetDate}) {
    const {date, physical, emotional, intellectual} = calculateBiorhythms(birthDate, targetDate);
    return(
        <IonCard  className="biorhythmCard">
            <IonCardHeader>
                <IonCardTitle>{formatDate(new Date())}</IonCardTitle>
            </IonCardHeader>

            <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>

            <IonCardContent>
                <p className="physical">Physical: { physical.toFixed(4) }</p>
                <p className="emotional">Emotional: { emotional.toFixed(4) }</p>
                <p className="intellectual">Intellectual: { intellectual.toFixed(4) }</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;