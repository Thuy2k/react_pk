import Icon from '@ant-design/icons';

const AddSvg = ()=>(
  <svg viewBox="0 0 30 30" focusable="false" data-icon="assign" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path fill="" d="M16.699,2.27l-3.398-0.001l0,11.033L2.269,13.301l0.001,3.398
	l11.031,0.002l0,11.03h3.398v-11.03l11.032-0.002l-0.001-3.398l-11.031,0.001V2.27z"></path>
  </svg>
)

const AddIcon = props => <Icon component={AddSvg} {...props} />;

export default AddIcon;