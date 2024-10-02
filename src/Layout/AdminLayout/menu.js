import { Menu } from 'antd';
import React from 'react';
import usePermission from '../../Hooks/usePermission';
import HomeIcon from '../../Components/Icons/home';
import { ROLE_FUNCTION } from '../../Constants/index';
import styles from './style.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
// import {handleClientError, handleResponse} from "../../Utils/Helpers";
// import {useDispatch, useSelector} from "react-redux";
// import {setRefetchSuccess} from "../../store/actions";

const { SubMenu, Item } = Menu;
const ITEM = 'Item';
const SUB_MENU = 'Sub';

const MainMenu = props => {
  console.log("PLCcccccccccccccccccccccc", props);

  const userPermission = usePermission();
  const navigate = useNavigate();
  const location = useLocation();

  //   const {isRefetchSuccess} = useSelector((state) => state);
  //   React.useEffect(() => {
  //     if(isRefetchSuccess){
  //       dispatch(setRefetchSuccess(false));
  //     }
  //   }, [isRefetchSuccess]);

  const menu = [
    { type: ITEM, key: '/dashboard', title: <><HomeIcon /><span>Tổng quan</span></> },
    { type: ITEM, key: '/booking', title: <><HomeIcon /><span>Đặt lịch</span></> },
    // {
    //   type: SUB_MENU, key: "/opportunity", title: <span><HomeIcon /><span>Cơ hội</span></span>, permission: ROLE_FUNCTION.menu_opportunity, children: [
    //     {
    //       type: SUB_MENU, key: "/opportunity/", title: "Cơ hội", permission: ROLE_FUNCTION.menu_opportunity, children: [
    //         { type: ITEM, key: '/opportunity', title: "Cơ hội", permission: ROLE_FUNCTION.menu_opportunity },
    //         { type: ITEM, key: '/opportunity', title: "Cơ hội", permission: ROLE_FUNCTION.menu_opportunity },
    //       ]
    //     },
    //     { type: ITEM, key: '/', title: "Đơn hàng", permission: ROLE_FUNCTION.menu_vault },
    //     { type: ITEM, key: '/', title: "Khách hàng", permission: ROLE_FUNCTION.menu_acad },
    //   ]
    // },
    {
      type: SUB_MENU, key: "#", title: <span><HomeIcon /><span>Cơ hội</span></span>, children: [
        {
          type: SUB_MENU, key: "#", title: "Cơ hội", children: [
            { type: ITEM, key: '/opportunity', title: "Cơ hội", },
            { type: ITEM, key: '/opportunity', title: "Cơ hội", },
          ]
        },
        { type: ITEM, key: '/', title: "Đơn hàng", },
        { type: ITEM, key: '/', title: "Khách hàng", },
      ]
    },
  ]

  const onTitleClickHandle = (item) => {
    if (props.isOpenViewLogoutMessage) {
      props.onClickViewLogoutMessage(false)
    }
    if (item) {
      navigate(item.key)
    }
  }
  const renderMenu = (_menu) => {
    return _menu.map(item => {
      if (item.permission && !userPermission.has(item.permission)) return <></>;
      if (!item.key) return <></>;
      switch (item.type) {
        case ITEM:
          return <Item className={item.alert ? styles.alert : ""} key={item.key}>{item.title}</Item>
        case SUB_MENU:
          return <SubMenu key={item.key} title={item.title} onTitleClick={onTitleClickHandle}>
            {renderMenu(item.children)}
          </SubMenu>
        default:
          return <></>
      }
    });
  }

  const selectedKeys = [location.pathname];
  const defaultSelectedKeys = [location.pathname];
  return (
    <>
      <Menu
        className={styles.navCustom}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={selectedKeys}
        onClick={(item) => {
          navigate(item.key);
          if (props.isOpenViewLogoutMessage) {
            props.onClickViewLogoutMessage(false)
          }
        }}
      >
        {renderMenu(menu)}
      </Menu>
    </>
  )
}

export default MainMenu;