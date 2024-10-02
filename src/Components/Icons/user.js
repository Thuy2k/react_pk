import Icon from '@ant-design/icons';

const UserSvg = ()=>(
  <svg viewBox="0 0 30 30" focusable="false" data-icon="" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path fill="" d="M21.173,6.193c0,3.423-2.774,6.194-6.192,6.194c-3.423,0-6.195-2.771-6.195-6.194
	C8.785,2.773,11.558,0,14.98,0C18.398,0,21.173,2.773,21.173,6.193z M15,14.568c-3.76,0-11.873,2.228-11.873,9.526l0.537,3.329
	C6.795,28.986,10.596,30,15,30c4.402,0,8.203-1.014,11.335-2.576l0.537-3.328C26.872,16.796,18.76,14.568,15,14.568z"></path>
  </svg>
)

const UserIcon = props => <Icon component={UserSvg} {...props} />;

export default UserIcon;