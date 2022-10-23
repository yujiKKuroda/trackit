import { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

import Weekday from "./Weekday"

export default function HabitAdd({
    displayAdd,
    setDisplayAdd
}) {

    const [isDisabled, setIsDisabled] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    function closeDisplay() {
        setDisplayAdd(false);
    }

    function markDay(index) {
        const isSelected = selectedDays.some(d => index === d);
        if (isSelected) {
            const newList = selectedDays.filter(d => index !== d);
            setSelectedDays(newList);
            console.log(newList);
        } else {
            const test = [...selectedDays, index];
            setSelectedDays(test);
            console.log(test);
        }
    }

    return (
        <>
        <Habit displayAdd={displayAdd}>
            <input
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={e => setHabitName(e.target.value)}
                disabled={isDisabled}
                required
            />
            <Week>
                {week.map ((day, index) =>
                    <Weekday
                        key={index}
                        day={day}
                        index={index}
                        isDisabled={isDisabled}
                        markDay={markDay}
                        isSelected={selectedDays.some(d => index === d)}
                    />
                )}
            </Week>
            <BottomLine>
                <p onClick={closeDisplay}>Cancelar</p>
                <button>Salvar</button>
            </BottomLine>
        </Habit>
        </>
    );

}

const Habit = styled.form`
    @media(max-width: 1334px) {
        display: ${props => props.displayAdd ? "block" : "none !important"};
        position: relative;
        width: 100%;
        height: 180px;
        padding: 18px 16px 15px 19px;
        background: #ffffff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        input {
            width: 100%;
            height: 45px;
            margin-bottom: 8px;
            padding: 9px 11px 11px 11px;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
        }

        ::placeholder {
            color: #dbdbdb;
        }
    }
`;

const Week = styled.div`
    @media(max-width: 1334px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const BottomLine = styled.div`
    @media(max-width: 1334px) {
        position: absolute;
        bottom: 15px;
        right: 16px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52b6ff;
        }

        button {
            width: 84px;
            height: 35px;
            margin-left: 23px;
            padding: 0;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #ffffff;
            background-color: #52b6ff;
            border: none;
            border-radius: 4.63636px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;