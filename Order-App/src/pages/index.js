import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd'
import styles from './index.scss'

const { Header, Content } = Layout

function Index() {
  return (
    <Layout className={styles.Layout}>
      <Header>Header</Header>
      <Content className={styles.Content}>Content</Content>
    </Layout>
  );
}

Index.propTypes = {
};

export default connect()(Index);
