import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { StyledTitlebar, StyledButtonWrapper } from './styles';

const TitleBar = (props) => {
    const { title, btnTitle, toogleAdddrawer } = props;

    return (
        <>
            <div>
                <StyledTitlebar>
                    <Toolbar>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                        <StyledButtonWrapper>
                            {btnTitle && <Button color='primary' variant='contained' onClick={toogleAdddrawer}>{btnTitle}</Button>}
                        </StyledButtonWrapper>
                    </Toolbar>
                </StyledTitlebar>
            </div>
        </>
    );
};

export default TitleBar;