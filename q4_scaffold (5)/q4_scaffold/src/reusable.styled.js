import styled from "styled-components";

const Button = styled.button`
background:${(props)=>props.bg};
`;

const Container = styled.div`
flex:${(props)=>props.flex}`;


export {Button,Container};