import styled from "styled-components";

type AreaProps = {
    done: boolean;
}

export const Area = styled.div(({ done }: AreaProps) => (`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label {
        color: #ccc;
        text-decoration: ${done ? "line-through" : 'none'} ;
    }
`));

export const Check = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
