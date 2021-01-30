import React from 'react';

import { StyledLinkButton } from "./Styles";

export default function LinkButton({ children, onClick }) {
    return (
        <StyledLinkButton onClick={onClick}>{ children }</StyledLinkButton>
    )
}