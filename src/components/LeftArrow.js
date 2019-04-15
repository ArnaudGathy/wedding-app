import styled from 'styled-components'

export const LeftArrow = styled.div`
  right: -16px;
  position: absolute;
  top: 11px;

  :before {
    content: ' ';
    height: 14px;
    width: 14px;
    position: absolute;
    border-style: solid;
    border-color: rgba(222, 3, 127, 0);
    border-right-color: #de037f;
    border-width: 7px;
  }

  :after {
    content: ' ';
    height: 14px;
    width: 14px;
    position: absolute;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0);
    border-right-color: white;
    border-width: 6px;
    margin-left: 1px;
  }
`