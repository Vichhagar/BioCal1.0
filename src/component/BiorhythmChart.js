import { LineChart, Line, CartesianGrid, ResponsiveContainer, XAxis, ReferenceLine } from 'recharts';
import React from 'react';
import { calculateBiorhythmSeries } from "../calculation";
import dayjs from 'dayjs';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM');
}

function BiorhythmChart({birthDate, targetDate}) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
                .map((item) => ({...item, date:formatDate(item.date)}));
    console.log(data);
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date" ticks = {[data[3].date, data[15].date, data[28].date]}/>
                <ReferenceLine x = {data[15].date}/>
                <CartesianGrid vertical = {false} strokeDasharray="3 3" />
                <Line dot={false} type="monotone" dataKey="physical" stroke="blue" className="physical"/>
                <Line dot={false} type="monotone" dataKey="emotional" stroke="red" className="emotional"/>
                <Line dot={false} type="monotone" dataKey="intellectual" stroke="green" className="intellectual"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhythmChart;