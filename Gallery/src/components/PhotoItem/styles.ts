import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    
    img {
        max-width: 100%;
        margin: auto;
        display: block;
        border-radius: 10px;
    }
    
    div {
        margin: 10px 0px;
    }

    input[type=button] {
        background-color: #ff1a1a;
        border: 0;
        color: #FFFFFF;
        padding: 8px 16px;
        font-size: 13px;
        border-radius: 5px;
        cursor: pointer;
        
        &:hover {
            box-shadow: 0 0 8px 2px #ff1a1a;
        }
    }
`;