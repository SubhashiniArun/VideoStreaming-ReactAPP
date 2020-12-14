import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  margin: 0 20px;
`;

export const Inner = styled.div`
  padding-top: 100px;
  position: relative;
  width: 90%;
  //max-width: 900px;
  margin: auto;
  video {
    //padding-top:120px;
    //padding-left: 20px;
    height: 92%;
    width: 100%;
  }
`;

export const Close = styled.button`
margin-top: 20px;
  position: absolute;
  right: 15px;
  //top: 15px;
  width: 22px;
  height: 22px;
  //opacity: 0.3;
  background-color: white;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 22px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  background-color: #41C4DE;;
  border-radius: 3px;
  //border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: linear-gradient(to bottom, #009ec4 0%,#00779d 100%);
  }
`;