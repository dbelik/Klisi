import styled from "styled-components";

import theme from '../../../config/theme';

export const StyledLinkButton = styled.button`
    background-color: transparent;
    color: ${theme.primary};

    :hover, :focus {
        color: white;
        background-color: ${theme.primary};
    }
`;