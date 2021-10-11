import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Drawer from '../drawer';
import TitleBar from './titlebar';

const PageWrapper = (props) => {
  const { title, btnTitle, addView, children, handleAdd } = props;
  const [addDrawer, setAddDrawer] = useState(false);
  const toogleAdddrawer = () => setAddDrawer(!addDrawer);
  const AddView = addView;

  return (
    <>
      <TitleBar title={title} btnTitle={btnTitle} addView={addView} toogleAdddrawer={toogleAdddrawer} />
      <Container maxWidth={false} style={{ marginTop: '25px' }}>
        {children}</Container>
      <Drawer open={addDrawer} onClose={toogleAdddrawer} width={450} title={btnTitle}>
        <AddView onClose={toogleAdddrawer} onAdd={handleAdd}/>
      </Drawer>
      </>
  );
};

export default PageWrapper;