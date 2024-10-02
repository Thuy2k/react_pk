import Icon from '@ant-design/icons';

const HomeSvg = ()=>(
  <svg viewBox="0 0 30 30" focusable="false" data-icon="" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path fill="" d="M29.928,15.359c-0.143,0.351-0.486,0.579-0.865,0.579h-3.75v13.125c0,0.518-0.42,0.938-0.938,0.938H18.75
	c-0.518,0-0.938-0.42-0.938-0.938V22.5h-5.625v6.563c0,0.518-0.419,0.938-0.937,0.938H5.625c-0.518,0-0.938-0.42-0.939-0.938V15.938
	H0.937c-0.379,0-0.721-0.227-0.867-0.579c-0.144-0.352-0.065-0.752,0.203-1.021L14.337,0.275c0.367-0.366,0.961-0.366,1.326,0
	l14.062,14.063C29.994,14.607,30.074,15.007,29.928,15.359z"></path>
  </svg>
)

const HomeIcon = props => <Icon component={HomeSvg} {...props} />;

export default HomeIcon;