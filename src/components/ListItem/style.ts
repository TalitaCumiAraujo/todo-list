import styled from "styled-components";

type ContainerProps = {
    done: boolean;

};
export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    align-items: center;
    background: #20212C;
    padding: 1rem;
    border-radius:10px;
    margin-bottom: 0.7rem!important;
    
    input{
        width: 25px;
        height: 25px;
        margin-right: 7px!important;
    }
    label{
        color: #ccc;
        text-decoration: ${done ? "line-through" : "initial"};
    }
    `
));