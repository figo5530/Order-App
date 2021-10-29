import React from 'react';
import { connect } from 'dva';

function Index() {
  return (
    <div>
      Let's get started!!!!
    </div>
  );
}

Index.propTypes = {
};

export default connect()(Index);
