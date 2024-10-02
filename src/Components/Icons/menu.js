import Icon from '@ant-design/icons';

const MenuSvg = ()=>(
  <svg viewBox="0 0 30 30" focusable="false" data-icon="" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path fill="" d="M30,5.923c0,0.938-0.762,1.7-1.7,1.7H1.699C0.761,7.623,0,6.862,0,5.923l0,0
	c0-0.938,0.761-1.699,1.699-1.699H28.3C29.238,4.224,30,4.985,30,5.923L30,5.923z M30,15c0,0.938-0.762,1.7-1.7,1.7H1.699
	C0.761,16.7,0,15.938,0,15l0,0c0-0.938,0.761-1.699,1.699-1.699H28.3C29.238,13.301,30,14.062,30,15L30,15z M30,24.077
	c0,0.938-0.762,1.698-1.7,1.698H1.699C0.761,25.775,0,25.016,0,24.077l0,0c0-0.938,0.761-1.699,1.699-1.699H28.3
	C29.238,22.378,30,23.141,30,24.077L30,24.077z"></path>
  </svg>
)

const MenuIcon = props => <Icon component={MenuSvg} {...props} />;

export default MenuIcon;