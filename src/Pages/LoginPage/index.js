import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const LoginPage = props => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  // const [isAlertDisplay, setDisplayAlert] = React.useState(false);
  const [form] = Form.useForm();

  // const urlParams = parseQuery(props.location.search);

  React.useEffect(() => {

  }, []);
  // const { history, location } = props;

  // const handleSubmit = async (values) => {
  //   let { email, password } = values;
  //   setLoading(true);
  //   history.push({ pathname: '/dashboard' });

  // };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('dashboard');
  };

  return (
    <React.Fragment>
      <div className={styles.logoLogin}>
        <img src="https://5nhatnhat.com/v2/images/logo_5nhatnhat_w300.webp" />
      </div>

      <Form
        name="login"
        className={styles.formLogin}
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 360,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập Email',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu',
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );

}

export default LoginPage;
