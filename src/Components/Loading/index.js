import * as React from 'react';
import styles from './style.module.css'
import { Spin } from 'antd';

class Loading extends React.Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <Spin size="large" />
        </div>
      </>
    );
  }
}
  
export default Loading;